import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    datasourceUrl: process.env.POSTGRES_PRISMA_URL, // Use pooled connection for app
});

export default prisma;
