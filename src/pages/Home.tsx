import Card from "../components/Card";
import Layout from "../layout/layout";
import { Suspense } from "react";
import { getGithubRepository } from "../services/Services";
import { useQuery } from "@tanstack/react-query";

const Home = () => {
  const { data } = useQuery<any>({
    queryKey: ["profile"],
  });
  console.log(data);

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Layout>
        <section className="flex flex-col  justify-center items-center mx-8">
          <div className="grid lg:md:grid-cols-2 gap-x-6 w-full lg:md:w-fit">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="">
                <Card />
              </div>
            ))}
          </div>
          <p className="text-slate-300 mt-[2rem] cursor-pointer">
            View all repository
          </p>
        </section>
      </Layout>
    </Suspense>
  );
};

export default Home;
