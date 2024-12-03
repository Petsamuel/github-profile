import Card from "../components/Card";
import { SubHeader } from "../components/Header";
import Layout from "../layout/layout";
import { Suspense } from "react";

const Home = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Layout>
        <section className="flex flex-col  justify-center items-center mx-8">
          <SubHeader />
          <div className="grid lg:md:grid-cols-2 gap-x-6 w-full lg:md:w-fit">
            {[1, 2, 3, 4, 5, 6].splice(1, 4).map((_, index) => (
              <div key={index} className="">
                <Card />
              </div>
            ))}
          </div>
          <p className="text-slate-300 mt-[2rem]">View all repository</p>
        </section>
      </Layout>
    </Suspense>
  );
};

export default Home;
