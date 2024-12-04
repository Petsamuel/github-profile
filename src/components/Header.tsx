/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import logo from "../assets/react.svg";
import { useForm } from "react-hook-form";
import { useMutateData } from "../services/useMutateData";
import {
  getLocalStoreData,
  // clearLocalStore,
  // getLocalStoreData,
  setLocalStoreData,
} from "../services/useLocalStorage";

export const Header: React.FC = () => {
  const [userData, setUserData] = useState<unknown>();

  const { mutate, status, isSuccess } = useMutateData(
    "UserData",
    (data) => {
      setUserData(data);
    },
    (error) => {
      console.log(error);
      reset();
    }
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (isSuccess) {
      setLocalStoreData({ name: "UserData", obj: userData });
    }
  }, [isSuccess, userData]);


  const handleSubmitFunc = (data: string) => {
    mutate({
      url: `https://api.github.com/users/${data}`,
    });
  };

  return (
    <section className="flex flex-col  justify-center items-center">
      <div className="bg-cover bg-no-repeat lg:h-fit w-full bg-heroBg py-8 lg:pb-[8rem] h-[15rem] bg-center">
        <form
          className="justify-center flex items-center mx-8 relative lg:mt-2 mt-[4rem]"
          onSubmit={handleSubmit((data) => {
            if (status === "idle") {
              handleSubmitFunc(data.username);
            }
          })}
        >
          <input
            type="text"
            className={`py-4 px-10 outline-none bg-gray-900 rounded-lg text-slate-300 lg:w-[35dvw] w-[100dvw] font-bold relative bg-searchIcon ${
              status === "pending" && "cursor-not-allowed "
            }`}
            placeholder="username"
            {...register("username", {
              required: {
                value: true,
                message: "Field is required",
              },
              minLength: 3,
            })}
            disabled={status === "pending" ? true : false}
          />
          {/* <input type="text" className="hidden" /> */}
        </form>
        {errors.username?.message && (
          <div className="text-center text-rose-600 font-medium text-xs"></div>
        )}
        {/* {data[0]?.message ==="notfound" && "notfound"} */}
      </div>
      <SubHeader data={userData} />
    </section>
  );
};

const SubHeader = ({ data }: any) => {
  const [localData] = useState(getLocalStoreData({ name: "UserData" }));

  return (
    <div className=" text-slate-300 mx-8">
      <div className="flex items-start flex-col lg:flex-row">
        <div className="flex flex-col space-y-2 relative">
          <div className="relative rounded-lg bg-gray-800 overflow-hidden p-1 -mt-6 w-fit  inline-flex">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] rounded-2xl" />
            <div className=" gap-2 cursor-pointer backdrop-blur-2xl rounded-lg">
              <a href={data?.url != undefined ? data?.url : localData[0].url}>
                <img
                  src={data?.avatar_url != undefined ? data?.avatar_url : logo}
                  alt="profile-image"
                  width={100}
                  height={100}
                  className="bg-gray-900 rounded-lg"
                />
              </a>
            </div>
          </div>
          {/* </MovingBorder> */}
          <div className=" bottom-0 lg:w-[15dvw] text-pretty cursor-pointer">
            <h4 className="text-2xl tracking-wide">
              {data?.name != undefined ? data?.name : localData[0].name}
            </h4>
            <p className="py-2 w-full lg:truncate text-ellipsis ...">
              {data?.bio != undefined ? data?.bio : localData[0].bio}
            </p>
          </div>
        </div>
        <div className="flex my-4 lg:space-x-4 lg:flex-row md:flex-row flex-col lg:items-center gap-4 lg:justify-evenly justify-center lg:w-fit  w-[88dvw]">
          <div className="bg-gray-900 p-4 flex space-x-4 rounded-xl cursor-pointer">
            <p className="capitalize text-slate-500 font-medium lg:text-lg text-sm">
              Followers
            </p>
            <span className=" w-[2px] bg-slate-800" />
            <p className="lg:text-lg  text-sm">
              {data?.followers != undefined
                ? data?.followers
                : localData[0].followers}
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl  flex space-x-4 cursor-pointer">
            <p className="capitalize text-slate-500 font-medium lg:text-lg  text-sm">
              following
            </p>
            <span className="w-[2px] bg-slate-800" />
            <p className="lg:text-lg  text-sm">
              {data?.following != undefined
                ? data?.following
                : localData[0].following}
            </p>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl  flex space-x-4 cursor-pointer">
            <p className="capitalize text-slate-500 font-medium lg:text-lg  text-sm">
              location
            </p>
            <span className=" w-[2px] bg-slate-800" />
            <p className="lg:text-lg text-sm text-balance">
              {data?.location != undefined
                ? data?.location
                : localData[0].location}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
