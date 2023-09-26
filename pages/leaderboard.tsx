import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Header from "~/components/Header";
import { Result } from "~/interface";

export default function Leaderboard(): JSX.Element {
  const [results, setResults] = useState<Result[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      await axios
        .get("/api/get-results")
        .then((response) => {
          console.log(response.data);
          setResults(
            response.data.results.sort(
              (a: Result, b: Result) => b.percentage - a.percentage
            )
          );
        })
        .catch((error) => toast.error(error.message));
      setLoading(false);
    })();
  }, []);

  console.log(results);

  return (
    <>
      <Header />
      {!loading ? (
        <div className="min-h-screen">
          <ul className="space-y-5 max-w-4xl mx-auto">
            {results.map((result, index: number) => (
              <li key={index} className="flex items-center gap-5 w-full">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold">{result.percentage}%</h2>
                </div>
                <div className="flex flex-[10] items-center justify-between space-x-3 w-full border-b py-6">
                  <div className="flex gap-3">
                    <Image
                      src={result.photo}
                      width={30}
                      height={30}
                      alt={`${result.fullName}'s photo`}
                      className="rounded-full"
                    />
                    <h3>{result.fullName}</h3>
                  </div>
                  <p>{result.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-center">loading...</p>
      )}
    </>
  );
}
