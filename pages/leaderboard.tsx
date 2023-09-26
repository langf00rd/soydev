import axios from "axios";
import Image from "next/image";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Header from "~/components/Header";
import Loader from "~/components/Loader";
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
          setResults(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          toast.error(error.message);
          setLoading(false);
        });
    })();
  }, []);

  console.log(results);

  return (
    <>
      <Header />
      {!loading ? (
        <div className="min-h-screen">
          <ul className="max-w-4xl mx-auto">
            {results.map((result, index: number) => (
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
      ) : (
        <Loader />
      )}
    </>
  );
}
