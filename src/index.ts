import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get("/", async (req, res) => {
  const data = await prisma.user.findMany();
  res.json({ data });
});

app.post("/", async (req, res) => {
  await prisma.user.create({
    data: {
      username: Math.random().toString(),
      password: Math.random().toString(),
    },
  });

  res.json({
    message: "post endpoint",
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
