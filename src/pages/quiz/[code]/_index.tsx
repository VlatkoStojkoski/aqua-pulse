"use client";
import { type Socket, io } from "socket.io-client";
import { useState } from "react";
import ChatPage from "./ChatPage";

export default function Home() {
  const [showChat, setShowChat] = useState(false);
  const [userName, setUserName] = useState("");
  const [showSpinner, setShowSpinner] = useState(false);
  const [roomId, setroomId] = useState("");

  const socket: Socket = io("http://localhost:3001");

  const handleJoin = () => {
    if (userName !== "" && roomId !== "") {
      console.log(userName, "userName", roomId, "roomId");
      socket.emit("join_room", roomId);
      setShowSpinner(true);
    } else {
      alert("Please fill in Username and Room Id");
    }
  };

  return (
    <div>
      <div
        style={{ display: showChat ? "none" : "" }}
      >
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUserName(e.target.value)}
          disabled={showSpinner}
        />
        <input
          type="text"
          placeholder="room id"
          onChange={(e) => setroomId(e.target.value)}
          disabled={showSpinner}
        />
        <button onClick={() => handleJoin()}>
          {!showSpinner ? (
            "Join"
          ) : (
            <div></div>
          )}
        </button>
      </div>
      <div style={{ display: !showChat ? "none" : "" }}>
        <ChatPage socket={socket} roomId={roomId} username={userName} />
      </div>
    </div>
  );
}
// import { useState, useEffect } from 'react';
// import { type Prisma } from "@prisma/client";
// import { type GetServerSideProps, type InferGetServerSidePropsType } from "next";
// import Link from "next/link";
// import { db } from "~/server/db";
// import io from 'socket.io-client';

// export default function QuizPage ({
// 	quiz
// }: InferGetServerSidePropsType<typeof getServerSideProps>) {
// 	useEffect(() => {
// 		const socket = io();

// 		return () => {
// 				socket.disconnect();
// 		};
// 	}, []);

// 	const sendMessage = () => {
// 		// Send the message to the server
// 		socket.emit('message', currentMessage);
// 		// Clear the currentMessage state
// 		setCurrentMessage('');
// 	};

// 	return (
// 		<>
// 			<div className='bg-neutral-900 w-full min-h-screen p-6'>
// 				<div className='flex flex-col w-full max-w-lg gap-4 text-white mx-auto'>
// 					<pre>{JSON.stringify(quiz, null, 2)}</pre>
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// interface QuizPageProps {
// 	quiz: Prisma.QuizGetPayload<Record<string, never>>;
// }

// export const getServerSideProps: GetServerSideProps<QuizPageProps, {
// 	slug: string;
// }> = async ({ params }) => {
// 	const quiz = await db.quiz.findUnique({
// 		where: {
// 			slug: params?.slug
// 		},
// 		include: {
// 			questions: true
// 		}
// 	});

// 	if(!quiz) {
// 		return {
// 			notFound: true
// 		}
// 	}

// 	return {
// 		props: {
// 			quiz
// 		}
// 	}
// }