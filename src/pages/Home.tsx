import Card from "../components/Card";

import { Suspense, useState } from "react";
import { getGithubRepository } from "../services/Services";
import { useQuery } from "@tanstack/react-query";
import { Header } from "../components/Header";
import Footer from "../components/Footer";

type repoInfo = {
  license?: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  name?: string;
  html_url?: string;
};

const Home = () => {
  const [userInput, setUserInput] = useState<string>("github");

  const [limit, setLimit] = useState(true);
  const {
    data: repo,
    isError,
    error,
  } = useQuery({
    queryKey: ["repositories", userInput],
    queryFn: () => getGithubRepository(`${userInput}`),
  });
  console.log(isError, error);

  console.log(repo);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Header propsFunc={setUserInput} />

        {repo?.length <= 0 || isError ? (
          <div className="text-center justify-center flex mb-[4rem] text-gray-900">
            <p className="text-4xl font-bold">No repository</p>
          </div>
        ) : (
          //
          <section className="flex flex-col  justify-center items-center mx-8">
            <div className="grid lg:md:grid-cols-2 gap-x-6 w-full lg:md:w-fit">
              {repo
                ?.map((value: repoInfo, index: number) => (
                  <a
                    key={index}
                    href={value.html_url}
                    className="hover:scale-105"
                  >
                    <Card
                      cardDetails={{
                        license: value.license,
                        stargazers_count: value.stargazers_count,
                        forks_count: value.forks_count,
                        updated_at: value.updated_at,
                        name: value.name,
                      }}
                    />
                  </a>
                ))
                .splice(0, `${limit ? 4 : repo.length}`)}
            </div>
            <p
              className="text-slate-300 mt-[2rem] cursor-pointer"
              onClick={() => setLimit(!limit)}
            >
              {limit ? " View all repository" : "Hide all repository"}
            </p>
          </section>
        )}
        <footer>
          <Footer />
        </footer>
      </>
    </Suspense>
  );
};

export default Home;
