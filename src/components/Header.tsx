import logo from "../assets/react.svg";
import json from "../services/Static.json";
export const Header = () => {
  return (
    <section>
      <div className="bg-cover bg-no-repeat lg:h-fit w-full bg-heroBg py-8 lg:pb-[8rem] h-[15rem] bg-center">
        <form className="justify-center flex items-center mx-8 relative lg:mt-2 mt-[4rem]">
          <input
            className=" py-4 px-10 outline-none bg-gray-900 rounded-lg text-slate-300 lg:w-[35dvw] w-[100dvw] font-bold relative bg-searchIcon "
            placeholder="username"
          />
        </form>
      </div>
    </section>
  );
};

export const SubHeader = () => {
  return (
    <div className=" text-slate-300">
      <div className="flex items-start flex-col lg:flex-row">
        <div className="flex flex-col space-y-2 relative">
          <div className="rounded-lg bg-gray-800 p-2 -mt-6 w-fit">
            <img
              src={logo}
              alt="profile-image"
              width={100}
              height={100}
              className="bg-black "
            />
          </div>
          <div className=" bottom-0 lg:w-[15dvw] text-pretty">
            <h4 className="text-2xl tracking-wide">{json.name}</h4>
            <p className="py-2 w-full lg:truncate text-ellipsis ...">
              {json.bio} Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Cumque vel consectetur consequatur? Quis aliquid, sapiente
              odio hic molestiae soluta fugit id magni amet consequuntur atque
              assumenda! Eveniet dolore quia earum.
            </p>
          </div>
        </div>
        <div className="flex my-4 lg:space-x-4 lg:flex-row md:flex-row flex-col lg:items-center gap-4 justify-evenly w-full lg:w-auto">
          <div className="bg-gray-900 p-4 flex space-x-4 rounded-xl ">
            <p className="capitalize text-slate-500 font-medium lg:text-lg text-sm">
              Followers
            </p>
            <span className=" w-[2px] bg-slate-800" />
            <p className="lg:text-lg  text-sm">{json.followers}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl  flex space-x-4 ">
            <p className="capitalize text-slate-500 font-medium lg:text-lg  text-sm">
              following
            </p>
            <span className="w-[2px] bg-slate-800" />
            <p className="lg:text-lg  text-sm">{json.following}</p>
          </div>
          <div className="bg-gray-900 p-4 rounded-xl  flex space-x-4 ">
            <p className="capitalize text-slate-500 font-medium lg:text-lg  text-sm">
              location
            </p>
            <span className=" w-[2px] bg-slate-800" />
            <p className="lg:text-lg text-sm text-balance">{json.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
