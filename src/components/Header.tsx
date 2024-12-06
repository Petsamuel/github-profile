import { useState } from "react";

import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { getGithubProfile } from "../services/Services";

type Props = {
  propsFunc: (arg: string) => void;
};

export const Header = ({ propsFunc }: Props) => {
  const [userInput, setUserInput] = useState<string>("github");

  const { data: profile, isLoading } = useQuery({
    queryKey: ["profile", userInput],
    queryFn: () => getGithubProfile(`${userInput}`),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  console.log(userInput);
  propsFunc(userInput);
  const handleSubmitFunc = (data: string) => {
    if (isSubmitSuccessful) {
      setUserInput(data);
      propsFunc(data);
    }
  };

  return (
    <section className="flex flex-col  justify-center items-center">
      <div className="bg-cover bg-no-repeat lg:h-fit w-full bg-heroBg py-8 lg:pb-[8rem] h-[15rem] bg-center">
        <form
          className="justify-center flex items-center mx-8 relative lg:mt-2 mt-[4rem]"
          onSubmit={handleSubmit((data) => {
            handleSubmitFunc(data.username);
          })}
        >
          <input
            type="text"
            className={`py-4 px-10 outline-none bg-gray-900 rounded-lg text-slate-300 lg:w-[35dvw] w-[100dvw] font-bold relative bg-searchIcon ${
              isLoading && "cursor-not-allowed "
            }`}
            placeholder="username"
            {...register("username", {
              required: {
                value: true,
                message: "Field is required",
              },
              minLength: 3,
            })}
            disabled={isLoading}
          />
          {/* <input type="text" className="hidden" /> */}
        </form>
        {errors.username?.message && (
          <div className="text-center text-rose-600 font-medium text-xs"></div>
        )}
        {/* {data[0]?.message ==="notfound" && "notfound"} */}
      </div>

      {profile && <SubHeader isLoading={isLoading} data={profile} />}
    </section>
  );
};

type UserProfile = {
  html_url: string;
  avatar_url: string;
  name: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
};
const SubHeader = ({
  isLoading,
  data,
}: {
  isLoading: boolean;
  data: UserProfile;
}) => {
  return (
    <div className=" text-slate-300 mx-8">
      <div className="flex items-start flex-col lg:flex-row">
        <div className="flex flex-col space-y-2 relative">
          <div className="relative rounded-lg bg-gray-800 overflow-hidden p-1 -mt-6 w-fit  inline-flex">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] rounded-2xl" />
            <div className=" gap-2 cursor-pointer backdrop-blur-2xl rounded-lg">
              {isLoading ? (
                <div
                  role="status"
                  className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
                >
                  <div className="flex items-center justify-center w-full h-48 rounded sm:w-96 bg-gray-700">
                    <svg
                      className="w-10 h-10 text-gray-600"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 18"
                    >
                      <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                    </svg>
                  </div>
                </div>
              ) : (
                <a href={data?.html_url}>
                  <img
                    src={data?.avatar_url}
                    alt="profile-image"
                    width={100}
                    height={100}
                    className="bg-gray-900 rounded-lg"
                  />
                </a>
              )}
            </div>
          </div>
          {/* </MovingBorder> */}
          <div className=" bottom-0 lg:w-[15dvw] text-pretty cursor-pointer">
            <h4 className="text-2xl tracking-wide">{data?.name}</h4>
            <p className="py-2 w-full lg:truncate text-ellipsis ...">
              {data?.bio}
            </p>
          </div>
        </div>
        <div className="flex my-4 lg:space-x-4 lg:flex-row md:flex-row flex-col lg:items-center gap-4 lg:justify-evenly justify-center lg:w-fit  w-[88dvw]">
          <div className="bg-gray-900 p-4 flex space-x-4 rounded-xl cursor-pointer">
            <p className="capitalize text-slate-500 font-medium lg:text-lg text-sm">
              Followers
            </p>
            <span className=" w-[2px] bg-slate-800" />
            <p className="lg:text-lg  text-sm">{data?.followers}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl  flex space-x-4 cursor-pointer">
            <p className="capitalize text-slate-500 font-medium lg:text-lg  text-sm">
              following
            </p>
            <span className="w-[2px] bg-slate-800" />
            <p className="lg:text-lg  text-sm">{data?.following}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl  flex space-x-4 cursor-pointer">
            <p className="capitalize text-slate-500 font-medium lg:text-lg  text-sm">
              location
            </p>
            <span className=" w-[2px] bg-slate-800" />
            <p className="lg:text-lg text-sm text-balance">{data?.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
