import { useLanyard } from "react-use-lanyard";

const Team = () => {
  const { data } = useLanyard({
    userId: ["701896585604497490", "817417815396974683", "525021408196296720"],
  });
  console.group(data);
  return (
    <div className="px-20">
      <div className="bg-teambg w-full rounded-lg h-[95rem] xl:h-[25rem] mb-20 ">
        <h1 className="text-center font-jockey text-white text-2xl py-6">
          Ekibimizle Tanışın
        </h1>
        <div className="flex flex-col xl:flex-row place-content-center space-y-24 items-center xl:space-x-10 xl:space-y-0">
          {data &&
            data.map(({ data }) => (
              <div className="">
                <div className="bg-placeholder w-40 h-40 rounded-xl" />
                <div className="text-center font-jockey text-white text-2xl py-6">
                  <h1>{data.discord_user.username}</h1>
                  <h2>{data.discord_user.discriminator}</h2>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
