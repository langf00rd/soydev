import { Inter } from "next/font/google";
import { Button } from "~/components/ui/Button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`${inter.className} h-screen`}>
      <main className="text-center flex items-center justify-center flex-col h-full">
        <h1 className="text-[4rem]">so youre a dev huh?</h1>
        <div className="flex items-center justify-center gap-3">
          <Button>Yes, yes i am</Button>
          <Button variant="outline">Nah</Button>
        </div>
      </main>
    </div>
  );
}
