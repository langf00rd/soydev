import Image from "next/image";
import Header from "~/components/Header";
import { Result } from "~/interface";
import prisma from "~/prisma";

// export async function getStaticProps() {
//   const results = await prisma.result.findMany();
//   const sortedResults = results.sort(
//     (a: Result, b: Result) => b.percentage - a.percentage
//   );
//   const sortedResultsWithRanks = sortedResults.map((o: Result, i: number) =>
//     Object.assign(o, { rank: i + 1 })
//   );

//   return {
//     props: { results: sortedResultsWithRanks },
//   };
// }

export async function getServerSideProps() {
  const results = await prisma.result.findMany();
  const sortedResults = results.sort(
    (a: Result, b: Result) => b.percentage - a.percentage
  );
  const sortedResultsWithRanks = sortedResults.map((o: Result, i: number) =>
    Object.assign(o, { rank: i + 1 })
  );

  return {
    props: { results: sortedResultsWithRanks },
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
