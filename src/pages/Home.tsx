import { Suspense, useState } from "react";
import { getGithubRepository } from "../services/Services";
import { useQuery } from "@tanstack/react-query";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import { RepoAnimatedModal } from "../components/RepoModal";

type repoInfo = {
  license?: { key: string };
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  name?: string;
  html_url?: string;
  language: string;
  topics: string[];
  watchers_count: number;
  open_issues_count: number;
  description: string;
  contributors_url: string;
  has_issues: boolean;
  owner: { login: string; avatar_url: string; html_url: string };
};

const Home = () => {
  const [userInput, setUserInput] = useState<string>("github");

  const [limit, setLimit] = useState(true);
  const { data: repo, isError } = useQuery({
    queryKey: ["repositories", userInput],
    queryFn: () => getGithubRepository(`${userInput}`),
  });

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Header propsFunc={setUserInput} repos={repo} />

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
                  <span key={index}>
                    <RepoAnimatedModal
                      license={value.license}
                      stargazers_count={value.stargazers_count}
                      forks_count={value.forks_count}
                      updated_at={value.updated_at}
                      name={value.name}
                      html_url={value.html_url}
                      language={value.language}
                      topics={value.topics}
                      watchers_count={value.watchers_count}
                      open_issues_count={value.open_issues_count}
                      description={value.description}
                      contributors_url={value.contributors_url}
                      has_issues={value.has_issues}
                      owner={value.owner}
                    />
                  </span>
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
