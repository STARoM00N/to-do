import { Elysia, t } from "elysia";
import { prisma } from "../lib/prisma";

export const todoRoutes = new Elysia({ prefix: "/todos" })

  // TODO: Step 1 - GET /todos — ดึง todos ทั้งหมด
  // query params (ทั้งหมด optional):
  //   filter:    "all" | "active" | "completed"  (default "all")
  //   sortBy:    "createdAt" | "title"            (default "createdAt")
  //   sortOrder: "asc" | "desc"                   (default "desc")
  // Logic: ถ้า filter === "all" → where = {} ไม่งั้น where = { completed: filter === "completed" }
  // ใช้ t.Object + t.Optional + t.Union + t.Literal สำหรับ query validation
  .get("/", async ({ query }) => {
    // TODO: implement
  }, {
    query: t.Object({
      // TODO: กำหนด schema สำหรับ filter, sortBy, sortOrder
    }),
  })

  // TODO: Step 2 - GET /todos/:id — ดึง todo เดี่ยว
  // params: id (t.Numeric)
  // ถ้าไม่เจอ: set.status = 404, return { message: "Todo not found" }
  .get("/:id", async ({ params, set }) => {
    // TODO: implement
  }, { params: t.Object({ id: t.Numeric() }) })

  // TODO: Step 3 - POST /todos — สร้าง todo ใหม่
  // body: { title: string (minLength: 1) }
  .post("/", async ({ body }) => {
    // TODO: implement
  }, {
    body: t.Object({
      // TODO: กำหนด schema สำหรับ title
    }),
  })

  // TODO: Step 4 - PATCH /todos/:id — อัปเดต todo
  // params: id (t.Numeric), body: { title?: string, completed?: boolean }
  // ตรวจสอบว่า todo มีอยู่ก่อน ถ้าไม่เจอ return 404
  .patch("/:id", async ({ params, body, set }) => {
    // TODO: implement
  }, {
    params: t.Object({ id: t.Numeric() }),
    body: t.Object({
      // TODO: กำหนด schema สำหรับ title (optional) และ completed (optional)
    }),
  })

  // TODO: Step 5 - DELETE /todos/:id — ลบ todo
  // params: id (t.Numeric)
  // ตรวจสอบว่า todo มีอยู่ก่อน ถ้าไม่เจอ return 404
  // return { message: "Deleted successfully" }
  .delete("/:id", async ({ params, set }) => {
    // TODO: implement
  }, { params: t.Object({ id: t.Numeric() }) });
