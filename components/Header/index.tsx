import { Bean, Github } from "lucide-react";
import ROUTES from "~/routes";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/router";

export default function Header(): JSX.Element {
  const { pathname } = useRouter();
  return (
    <header className="h-[100px] px-5">
      <div className="max-w-4xl w-full mx-auto h-full flex items-center justify-between">
        <Link href={ROUTES.index}>
          <h2 className="flex items-center gap-1 text-2xl">
            <Bean fill="#000" stroke="#FFF" />
            soydev
          </h2>
        </Link>
        <nav>
          <ul className="flex items-center justify-center w-full gap-5">
            <li>
              <Link
                href={ROUTES.leaderboard}
                className={
                  pathname === ROUTES.leaderboard
                    ? "underline"
                    : "hover:underline hover:text-[#000]"
                }
              >
                <p>leaderboard</p>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <Link
            rel="noreferrer"
            target="_blank"
            href="https://github.com/langford-dev/soydev"
          >
            <Github />
          </Link>
          {/* <SignedIn>
            <UserButton />
          </SignedIn> */}
        </div>
      </div>
    </header>
  );
}
