import { Bean, Github } from "lucide-react";
import ROUTES from "~/routes";
import { Button } from "../ui/Button";
import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

export default function Header(): JSX.Element {
  return (
    <header className="h-[100px]">
      <div className="max-w-4xl w-full mx-auto h-full flex items-center justify-between">
        <Link href={ROUTES.index}>
          <h2 className="flex items-center gap-1 text-2xl">
            <Bean fill="#000" stroke="#FFF" />
            soydev
          </h2>
        </Link>
        <ul className="flex items-center justify-center w-full">
          <li>
            <Link href={ROUTES.checklist}>
              <Button variant="link">use checklist</Button>
            </Link>
          </li>
          <li>
            <Link href={ROUTES.questions}>
              <Button variant="link">use q&a</Button>
            </Link>
          </li>
          <li>
            <Link href={ROUTES.leaderboard}>
              <Button variant="link">leaderboard</Button>
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <Github />
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
