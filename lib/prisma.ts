import { Prisma, PrismaClient } from "@prisma/client";

// PrismaClient is attached to the `global` object in development to prevent
// exhausting your database connection limit.
//
// Learn more:
// https://pris.ly/d/help/next-js-best-practices

class MyPrismaClient extends PrismaClient<Prisma.PrismaClientOptions, "query"> {
  constructor() {
    super({
      log:
        process.env.ENABLE_PRISMA_LOGGING === "1"
          ? [
              {
                emit: "event",
                level: "query",
              },
            ]
          : [],
    });
  }
}
let prisma: MyPrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new MyPrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new MyPrismaClient();
  }
  prisma = (global as any).prisma;
  process.env.ENABLE_PRISMA_LOGGING === "1" &&
    prisma.$on("query", (e) => {
      console.log("Query: " + e.query);
    });
}
export default prisma;
