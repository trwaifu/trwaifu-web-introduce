import emilia from "../images/emilia.png";

import headervec from "../images/headervec.png";
const Header = () => {
  return (
    <div className=" py-20 ">
      <div className="text-white font-jockey flex space-x-5 px-10 justify-end">
        <a href="https://www.instagram.com/trwaifucom/">Instagram</a>
        <a href="https://discord.gg/trwaifu">Discord</a>
      </div>
      <div className="flex flex-col xl:flex-row  items-center text-center justify-items-center xl:text-left place-content-center">
        <img src={emilia} alt="img" className="xl:w-1/4 w-2/4 md:w-1/4 "></img>

        <div className="text-white flex flex-col space-y-4 ">
          <h1 className="text-[30px] font-poppins font-bold ">
            Türkiye Waifu Community
          </h1>

          <div>
            <h2 className="text-lg xl:text-2xl font-jockey text-center xl:text-left px-4 xl:px-0 w-96">
              Türkiyenin Gelişmekte Olan Discord Sunucusu Yepyeni Formatıyla
              Sizlere Farklı Deneyim Sunmak İçin Çalışmalara Başladı
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
