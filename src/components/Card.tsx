import LicenseIcon from "../assets/Chield_alt.svg";
import NestingIcon from "../assets/Nesting.svg";
import StarIcon from "../assets/Star.svg";

const Card = () => {
  return (
    <section className="flex items-start mt-4 ">
      <div className="backdrop-blur- bg-opacity-50 w-full">
        <div className="flex flex-col p-6 bg-gradient-to-r from-gray-900 to-indigo-900 shadow-sm rounded-lg ">
          <h1 className=" font-bold text-white pb-2 ">.github</h1>
          <p className=" text-slate-300 tracking-wide text-balance truncate text-ellipsis... lg:w-[28dvw]">
            community healt files for @github orignization
          </p>
          <div className="flex space-x-4 mt-4 items-center">
            <div className="flex">
              <img src={LicenseIcon} alt="lincense" />
              <p></p>
            </div>
            <div className="flex">
              <img src={NestingIcon} alt="NestingIcon" />
              <p></p>
            </div>
            <div className="flex">
              <img src={StarIcon} alt="StarIcon" />
              <p></p>
            </div>
            <div>
              <p className="text-sm text-slate-300 ">updated x days ago</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
