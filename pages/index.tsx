import { useAuth } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Header from "~/components/Header";
import { Button } from "~/components/ui/Button";
import ROUTES from "~/routes";
import { motion } from "framer-motion";

export default function Home() {
  const { userId } = useAuth();
  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto space-y-5">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-[2.5rem] text-center mt-20"
        >
          discover and unlock your true potential
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center max-w-xl mx-auto px-10"
        >
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center space-x-3 justify-center"
        >
          {!userId ? (
            <Link href={ROUTES.signIn}>
              <Button
                variant="link"
                className="rounded-full scale-[1.1] text-md bg-[#000] text-[#fff]"
              >
                Get started &nbsp;
                <ArrowRight size={18} />
              </Button>
            </Link>
          ) : (
            <Link href={ROUTES.checklist}>
              <Button
                variant="link"
                className="rounded-full scale-[1.1] text-md bg-[#000] text-[#fff]"
              >
                🔥 use checklist 🔥
              </Button>
            </Link>
          )}
        </motion.div>
      </main>
    </>
  );
}
