//import React from "react";
import "./styles/footer.css";

export const Footer = () => {
  /*
  <p>
              Copyright &copy; 2024 <span className=" text-black">name </span>
              <span>of your</span>
              <span className="text-amber-400">project</span>
            </p>
  */

  return (
    <footer>
      <div className="bg-black mx-2">
        <div className="">
          <p className=" text-blue-900 text-[20px] font-bold mx-4">
            In this project
          </p>
          <small className="text-white text-[10px] mx-4">
            We work to improve the lives of our users
          </small>
        </div>
      </div>

      <section className="flex flex-col items-center text-center xs:flex-row lg:flex-row ">
        <div>
          <div className="flex flex-col xs:flex-row lg:flex-row  ">
            <p className="text-[10px]  m-2"> Copyright &copy; 2024; </p>
            <p className="flex items-center m-2 font-bold text-[10px] md:text-[15px] lg:text-[20px]">
              <span className="text-black text-[10px]">FAST </span>
              <span className="text-[10px]">&#47;&#47;&#47;</span>
              <span className="text-amber-500 text-[10px]">programming</span>
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center xs:justify-end  m-2">
          <div className="flex flex-col xs:justify-end">
            <p className="text-[10px]">
              Programmer:{" "}
              <span className="footer_name text-[10px]">Pedro Cevallos</span>
            </p>
            <p className="text-[10px]">
              Email:{" "}
              <span className="footer_name text-[10px]">
                pevallos@hotmail.com
              </span>
            </p>
            <p className="text-[10px]">Ecuador</p>
          </div>
        </div>
      </section>
    </footer>
  );
};
