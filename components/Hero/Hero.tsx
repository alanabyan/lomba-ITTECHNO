import RobotCanvas from "../canvas/Robot3d/Robot";

export default function Hero() {
  return (
    <div className="bg-black h-[100vh] overflow-x-hidden flex   text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] relative overflow-clip">
      <div className="absolute overflow-hidden h-[375px] w-[750px] lg:h-[375px] lg:w-[1950px] xl:w-[2550px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)]"></div>
      <div className="container">
        <div className="flex items-center justify-center text-center">
          <span className="text-white xl:relative  font-extrabold text-[4vh] lg:text-[9vh] pt-40">
            AI for the future of
            <br /> Software Engineer
          </span>
        </div>
        {/* <span className="absolute left-0">
                    <RobotCanvas />
                </span> */}
      </div>
    </div>
  );
}
