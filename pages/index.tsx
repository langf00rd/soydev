import { Inter } from "next/font/google";
import { Button } from "~/components/ui/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className} h-screen`}>
      <main className="text-center flex items-center justify-center flex-col h-full gap-10">
        <h1 className="text-[4rem] -mb-6">so youre a dev huh?</h1>
        <div className="max-w-[600px] grid gap-2">
          <p className="font-[500] text-[#000]">
            soydev [ soy - dev ] <i>noun</i>
          </p>
          <p>
            A &ldquo;programmer&rdquo; that works at a bich tech company and only knows
            javascript and HTML. They love IDEs like Visual Studio Code and inefficient
            frameworks that slow their code down.
          </p>
        </div>
        <div className="flex items-center justify-center gap-3">
          <Button>Yes, yes i am</Button>
          <Button variant="outline">Nah</Button>
        </div>
      </main>
    </div>
  );
}
