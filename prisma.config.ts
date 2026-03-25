import { defineConfig } from '@prisma/config';

export default defineConfig({
  migrations: {
    seed: 'tsx backend/prisma/seed.ts',
  },
  datasource: {
    url: "env('POSTGRES_URL_NON_POOLING')", // Use direct connection for migrations
  },
});
