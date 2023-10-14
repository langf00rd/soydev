import { authMiddleware } from "@clerk/nextjs";
import ROUTES from "./routes";

export default authMiddleware({
  ignoredRoutes: [ROUTES.index, ROUTES.leaderboard],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
