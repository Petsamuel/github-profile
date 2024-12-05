import Card from "../components/Card";
import Layout from "../layout/layout";
import { Suspense } from "react";
import { getGithubProfile, getGithubRepository } from "../services/Services";
import { useQuery } from "@tanstack/react-query";
const Home = () => {
  // const [currentPage, setCurrentPage] = useState<number>(0);
  // const [itemsPerPage, setItemsPerPage] = useState<number>(4);
  // const [filteredData, setFilteredData] = useState<any>([]);
  // useEffect(() => {
  //   const filteredProducts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].slice(
  //     currentPage * itemsPerPage,
  //     (currentPage + 1) * itemsPerPage
  //   );
  //   setFilteredData(filteredProducts);
  // }, [currentPage, filteredData, itemsPerPage]);

  const { data, isError, isLoading, error, isSuccess } = useQuery({
    queryKey: ["profile"],
    
  });

  console.log(data, isError, isLoading, error, isSuccess);

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
