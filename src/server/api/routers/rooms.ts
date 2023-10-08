import {
  createTRPCRouter,
  publicProcedure,
} from "~/server/api/trpc";
import { Room } from "~/server/handlers/rooms";

export const roomsRouter = createTRPCRouter({
	create: publicProcedure
		.mutation(({ ctx }) => {
			console.log('create room lol')
			return {
				content: 'room'
			};
		})
});
