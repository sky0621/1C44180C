import "server-only";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export type User = {
  username: string;
  password: string;
  email: string;
};

export const getUser = async (id: number) => {
  return prisma.users.findUnique({ where: { id: id } });
};
