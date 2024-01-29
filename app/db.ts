import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

// Define a type for the global object to avoid TypeScript errors
type MyGlobal = typeof globalThis & {
  prisma?: ReturnType<typeof prismaClientSingleton>;
};

// Cast the global object to the new type
const myGlobal = global as unknown as MyGlobal;

// Use the prisma client from the global object if it exists, otherwise create a new one
const prisma = myGlobal.prisma ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") myGlobal.prisma = prisma;
