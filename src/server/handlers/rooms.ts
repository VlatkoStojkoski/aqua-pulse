import { customAlphabet } from 'nanoid';
import { type PrismaClient, type Prisma } from '@prisma/client';

const nanoid = customAlphabet('1234567890abcdef', 6);

export class Room {
	isSingleplayer: boolean;
	roomCode?: string;
	players?: Prisma.QuizSessionPlayerGetPayload<Record<string, never>>[];
	quizSession?: Prisma.QuizSessionGetPayload<{
		include: {
			players: true;
		}
	}>;
	db: PrismaClient;

	constructor({ isSingleplayer, db }: { isSingleplayer: boolean, db: PrismaClient }) {
		this.isSingleplayer = isSingleplayer;
		this.db = db;
	}

	private async generateCode() {
		let isRoomCodeUnique = false;
		let roomCode = '';
		
		while (!isRoomCodeUnique) {
			roomCode = nanoid();
			const existingRoom = await this.db.quizSession.findUnique({
				where: {
					code: roomCode
				}
			});
			if (!existingRoom)
				isRoomCodeUnique = true;
		}

		return roomCode;
	}

	async init() {
		const roomCode = await this.generateCode();
		this.roomCode = roomCode;

		const newSession = await this.db.quizSession.create({
			data: {
				code: roomCode,
				isSingleplayer: this.isSingleplayer,
			},
			include: {
				players: true
			}
		});

		this.quizSession = newSession;
	}

	async addPlayer(userId: string) {
		if (!this.quizSession)
			throw new Error('Room not initialized');
			
		const newPlayer = await this.db.quizSessionPlayer.create({
			data: {
				quizSession: {
					connect: {
						id: this.quizSession.id
					}
				},
				user: {
					connect: {
						id: userId
					}
				}
			}
		});

		if (!newPlayer)
			throw new Error('Failed to add player to room');

		const newSession = await this.db.quizSession.update({
			where: {
				id: this.quizSession.id
			},
			data: {
				players: {
					connect: {
						id: newPlayer.id
					}
				}
			},
			include: {
				players: true
			}
		});

		if (!newSession)
			throw new Error('Failed to add player to room');

		this.quizSession = newSession;

		return newPlayer;
	}
}