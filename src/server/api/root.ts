import { exampleRouter } from "~/server/api/routers/example";
import { roomsRouter } from "~/server/api/routers/rooms";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  example: exampleRouter,
	rooms: roomsRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
