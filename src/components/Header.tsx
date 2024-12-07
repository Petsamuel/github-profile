/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import {
  getCommitMessage,
  getGithubProfile,
  getRoast,
} from "../services/Services";

import { AnimatedModal } from "./modal";

type Props = {
  propsFunc: (arg: string) => void;
  repos: { name: string }[];
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

export const Header = ({ propsFunc, repos }: Props) => {
  const [userInput, setUserInput] = useState<string>("github");

  const {
    data: profile,
    isLoading,
    isError,
    isSuccess,
  } = useQuery({
    queryKey: ["profile", userInput],
    queryFn: () => getGithubProfile(userInput),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  // fetch commit message
  const { data: commitMessage } = useQuery({
    queryKey: ["commit", userInput, repos],
    queryFn: () => getCommitMessage(userInput, getRepositoryName()),
    enabled: !!userInput && !!repos,
  });

  // get random repo name
  const getRepositoryName = () => {
    {
      if (repos?.length >= 1) {
        return repos[getRandomInt(repos?.length)].name;
      } else {
        return "no repo really ?";
      }
    }
  };

  // get random repos[x]name
  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }
  // set repoCommitList
  const CommitList = () => {
    if (commitMessage?.length >= 1) {
      const commits = commitMessage.map(
        (value: { commit: { message: string } }) => value.commit.message
      );
      return commits;
    }
    return "none found!";
  };

  // get Roast
  const { data: roast } = useQuery({
    queryKey: ["roast", userInput, CommitList()],
    queryFn: () => getRoast(userInput, getRepositoryName(), CommitList()),
    enabled: !!userInput && commitMessage?.length > 0,
  });

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
            className={`py-5 px-10 outline-none bg-gray-900 rounded-lg text-slate-300 lg:w-[35dvw] w-[100dvw] font-bold relative bg-searchIcon ${
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
        </form>
        {errors.username?.message && (
          <div className="text-center text-rose-600 font-medium text-xs"></div>
        )}
        {isSuccess && (
          <div className="flex justify-center mt-6">
            <AnimatedModal roast={roast} />
          </div>
        )}
      </div>

      {(profile || !isError) && <SubHeader data={profile} />}
    </section>
  );
};

const SubHeader = ({ data }: { data: UserProfile }) => {
  return (
    <div className=" text-slate-300 mx-8">
      <div className="flex items-start flex-col lg:flex-row">
        <div className="flex flex-col space-y-2 relative">
          <div className="relative rounded-lg bg-gray-800 overflow-hidden p-1 -mt-6 w-fit  inline-flex">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] rounded-2xl" />
            <div className=" gap-2 cursor-pointer backdrop-blur-2xl rounded-lg">
              <a href={data?.html_url}>
                <img
                  src={data?.avatar_url}
                  alt="profile-image"
                  width={100}
                  height={100}
                  className="bg-gray-900 rounded-lg"
                />
              </a>
            </div>
          </div>

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
