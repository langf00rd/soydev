import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import Header from "~/components/Header";
import { Result } from "~/interface";

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const results = await prisma.result.findMany();

  return {
    props: { results },
  };
}

export default function Leaderboard(props: { results: Result[] }): JSX.Element {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <ul className="max-w-4xl mx-auto">
          {props.results.map((result, index: number) => (
            <li key={index} className="p-5 border-b flex items-center justify-between">
              <h2 className="text-2xl">#{result.rank}</h2>
              <div className="flex items-center space-x-2 w-full max-w-[700px]">
                <Image
                  src={result.photo}
                  width={30}
                  height={30}
                  alt={`${result.fullName}'s photo`}
                  className="rounded-full w-[30px] h-[30px] object-cover"
                />
                <p>
                  <span className="text-[#000] font-[600]">{result.fullName}</span>
                  &nbsp;|&nbsp;
                  {result.role}
                </p>
              </div>
              <p className="text-xl font-[500] text-[#000]">{result.percentage}%</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
