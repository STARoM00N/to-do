import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import { todoRoutes } from "./routes/todos";

const PORT = Number(process.env.PORT ?? 3000);

const app = new Elysia()
  .use(
    cors({
      origin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
      methods: ["GET", "POST", "PATCH", "DELETE", "OPTIONS"],
      allowedHeaders: ["Content-Type"],
    })
  )

  // Health check
  .get("/health", () => ({ status: "ok" }))

  // API routes
  .use(todoRoutes)

  .listen(PORT);

console.log(`🚀 to-do-api running at http://localhost:${PORT}`);

export type App = typeof app;
