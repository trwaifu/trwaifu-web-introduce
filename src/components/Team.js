import { useLanyard } from "react-use-lanyard";

const Team = () => {
  const { data } = useLanyard({
    userId: [
      "701896585604497490",
      "817417815396974683",
      "488839097537003521",
      "525021408196296720",
    ],
  });

  const role = [
    "Fullstack Developer",
    "Backend Developer",
    "I dont know!!!!!!",
    "Backend Developer",
  ];

  console.group(data);
  return (
    <div className="px-20">
      <div className="bg-teambg w-full rounded-lg h-[70rem] xl:h-[25rem] mb-20 ">
        <h1 className="text-center font-jockey text-white text-2xl py-6">
          Ekibimizle Tanışın
        </h1>
        <div className="flex flex-col xl:flex-row place-content-center space-y-10 items-center xl:space-x-10 xl:space-y-0">
          {data &&
            data.map(({ data }, index) => (
              <div className="">
                <img
                  src={
                    "https://cdn.discordapp.com/avatars/" +
                    `${data.discord_user.id}/` +
                    data.discord_user.avatar
                  }
                  alt="userimg"
                  className="mx-auto rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                ></img>
                <div className="text-center font-jockey text-white text-2xl py-6">
                  <h1>
                    {data.discord_user.username}#
                    {data.discord_user.discriminator}
                  </h1>

                  <h1>{role[index]}</h1>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
