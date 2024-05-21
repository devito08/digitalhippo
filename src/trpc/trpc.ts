import { ExpressCOntext } from "@/server";
import { initTRPC } from "@trpc/server";

const t = initTRPC.context<ExpressCOntext>().create()
export const router = t.router
export const publicProcedure = t.procedure

