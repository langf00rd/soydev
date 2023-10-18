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
      <main className="max-w-3xl mx-auto py-20 text-center space-y-5">
        <h1 className="py-4 text-5xl font-bold tracking-tight text-center text-transparent bg-gradient-to-t bg-clip-text to-primary from-red-500/30 sm:text-7xl">discover and unlock your true potential</h1>
	<p className="font-[500] text-[#000]">
            soydev [ soy - dev ] <i>noun</i>
        </p>
           <p> &ldquo;A &lsquo;programmer&rsquo; that works at a bich tech company and only knows javascript and HTML. They love IDEs like Visual Studio Code and
	inefficient frameworks that slow their code down...&rdquo;
	</p>
        <motion.div
            initial={{ opacity: 0, y: -10 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center space-x-3 justify-center"
        >
          {!userId ? (
            <Link href={ROUTES.signIn}>
              <Button variant="link">
                Get started &nbsp;
                <ArrowRight size={18} />
              </Button>
            </Link>
          ) : (
            <Link href={ROUTES.checklist}>
              <Button
                //variant="link"
                className="text-[#fff]"
              >
                use checklist 🔥
              </Button>
            </Link>
          )}
        </motion.div>
      </main>
    </>
  );
}
