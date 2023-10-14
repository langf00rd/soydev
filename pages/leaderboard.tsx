import Header from "~/components/Header";
import { Entry } from "~/interface";
import LeaderBoardCard from "~/components/LeaderBoardCard";
import Link from "next/link";
import ROUTES from "~/routes";
import { Button } from "~/components/ui/Button";
import prisma from "~/prisma";

export async function getServerSideProps() {
  const results = await prisma.result.findMany();
  const sortedResults = results.sort((a: Entry, b: Entry) => b.percentage - a.percentage);
  const sortedResultsWithRanks = sortedResults.map((o: Entry, i: number) =>
    Object.assign(o, { rank: i + 1 })
  );
  return {
    props: { results: sortedResultsWithRanks },
  };
}

export default function Leaderboard(props: { results: Entry[] }): JSX.Element {
  return (
    <>
      <Header />
      <div className="min-h-screen">
        <ul className="max-w-4xl mx-auto">
          {props.results.map((result, index: number) => (
            <LeaderBoardCard result={result} index={index} key={index} />
          ))}
        </ul>
        <div className="flex items-center justify-center py-10">
          <Link href={ROUTES.checklist}>
            <Button className="text-black" variant="link">
              use checklist to join leaderboard
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
