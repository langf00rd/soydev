import { SignedOut, useAuth } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Link from "next/link";
import Header from "~/components/Header";
import { Button } from "~/components/ui/Button";
import ROUTES from "~/routes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { userId } = useAuth();
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto space-y-5">
        <h1 className="text-[4rem] text-center mt-20">so youre a dev huh?</h1>
        <div className="text-center max-w-xl mx-auto">
          <p className="font-[500] text-[#000]">
            soydev [ soy - dev ] <i>noun</i>
          </p>
          <p>
            &ldquo;A &lsquo;programmer&rsquo; that works at a bich tech company and only
            knows javascript and HTML. They love IDEs like Visual Studio Code and
            inefficient frameworks that slow their code down...&rdquo; -
            <Link
              rel="noreferrer"
              href="https://www.urbandictionary.com/define.php?term=Soydev"
              target="_blank"
            >
              &nbsp;Urban dictionary
            </Link>
          </p>
        </div>
        {!userId && (
          <div className="flex items-center justify-center">
            <div className="flex items-center space-x-3">
              <Link href={ROUTES.signIn}>
                <Button variant="link" className="rounded-full bg-[#000] text-[#fff]">
                  Sign in
                </Button>
              </Link>
              <Link href={ROUTES.signUp}>
                <Button variant="link">Sign up</Button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
