import LicenseIcon from "../assets/Chield_alt.svg";
import { RiGitBranchLine } from "react-icons/ri";
import { formatTimeAgo } from "../services/Services";
import { motion } from "framer-motion";
import { TbStar } from "react-icons/tb";
interface CardDetails {
  license?: { key: string };
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  name?: string;
}
const Card = ({
  name,
  updated_at,
  license,
  forks_count,
  stargazers_count,
}: CardDetails) => {
  const UpdatedDate = formatTimeAgo(updated_at);


  return (
    <motion.section
      className="flex items-start mt-4 cursor-pointer "
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          ease: "easeOut",
        },
      }}
      viewport={{ once: true }}
    >
      <div className="backdrop-blur- bg-opacity-50 w-full">
        <div className="flex flex-col p-6 bg-gradient-to-r from-gray-900 to-indigo-900 shadow-sm rounded-lg ">
          <h1 className=" font-bold text-white pb-2 ">{name}</h1>
          <h6 className=" text-slate-300 tracking-wide text-balance truncate text-ellipsis... lg:w-[28dvw]">
            community healt files for @github orignization
          </h6>
          <div className="flex space-x-4 mt-4 items-center">
            {license && (
              <div className="flex gap-1">
                <img src={LicenseIcon} alt="lincense" />
                <p className="capitalize text-slate-300">{license.key}</p>
              </div>
            )}
            <div className="flex gap-1 items-center text-slate-400">
              <RiGitBranchLine />
              <p className="text-slate-300">{forks_count}</p>
            </div>
            <div className="flex gap-1 text-slate-400 items-center">
              <TbStar />
              <p className="text-slate-300">{stargazers_count}</p>
            </div>
            <div className="flex gap-1">
              <p className="text-sm text-slate-300">updated {UpdatedDate}</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Card;
