import LicenseIcon from "../assets/Chield_alt.svg";
import NestingIcon from "../assets/Nesting.svg";
import StarIcon from "../assets/Star.svg";
import { formatTimeAgo } from "../services/Services";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Card = ({ cardDetails }: any) => {
  const UpdatedDate = formatTimeAgo(cardDetails.updated_at);

  // console.log(date);
  return (
    <section className="flex items-start mt-4 ">
      <div className="backdrop-blur- bg-opacity-50 w-full">
        <div className="flex flex-col p-6 bg-gradient-to-r from-gray-900 to-indigo-900 shadow-sm rounded-lg ">
          <h1 className=" font-bold text-white pb-2 ">{cardDetails.name}</h1>
          <p className=" text-slate-300 tracking-wide text-balance truncate text-ellipsis... lg:w-[28dvw]">
            community healt files for @github orignization
          </p>
          <div className="flex space-x-4 mt-4 items-center">
            {cardDetails.lincense?.[0] && (
              <div className="flex gap-1">
                <img src={LicenseIcon} alt="lincense" />
                <p className="capitalize ">{cardDetails.license?.[0]?.key}</p>
              </div>
            )}
            <div className="flex gap-1">
              <img src={NestingIcon} alt="NestingIcon" />
              <p className="text-slate-300">{cardDetails.forks_count}</p>
            </div>
            <div className="flex gap-1">
              <img src={StarIcon} alt="StarIcon" />
              <p className="text-slate-300">{cardDetails.stargazers_count}</p>
            </div>
            <div className="flex gap-1">
              <p className="text-sm text-slate-300">updated {UpdatedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
