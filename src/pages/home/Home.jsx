import "./home.css";
import Zamora from "./../../assets/imagenes-sin-copyright-gratis.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div>
        <div className=" relative z-0 flex flex-col justify-center m-2 xs:m-2 sm:m-2 md:mx-2 md:my-0 lg:m-2 lg:w-full ">
          <img
            className="object-cover rounded-md w-full md:w-full md:max-h-[500px] md:mt-2 lg:w-full lg:-m-2 lg:p-2 lg:max-h-[500px] mx-auto"
            src={Zamora}
            alt="Zamora"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/70 rounded-md p-4 text-center text-[8px] xs:text-[10px] sm:text-[15px] md:text-[18px] lg:text-[18px]">
              <h1 className="font-bold z-10">
                🎉 ¡WE PRESENT{" "}
                <span className="text-violet-600">FASTPROGRAMMING</span> ! 🚀
                <br />
                <br />
                Are you looking for a quick and
                <br />
                efficient way to start your next web project?
                <br />
                <br />
                You have the{" "}
                <span className="text-blue-600">backend and frontend,</span>
                <br />
                fully functional and listed for use.
                <br />
                With <span className="text-violet-600">FASTPROGRAMMING</span>,
                You have everything you need
                <br />
                to create a complete website.
                <br />
                <br />
                <span className="text-violet-600">FASTPROGRAMMING</span>, It is
                an easy to install library.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="  flex flex-col lg:flex-row ">
        <div className=" flex text-center order-1  m-2 mt-0 md:m-2 lg:mb-2 lg:mx-0 lg:mt-0 lg:ml-2  lg:w-1/4">
          <p className=" p-2 bg-violet-300 text-black justify-center rounded-md w-full h-full">
            🔥 <span className="font-bold text-[20px]">Powerful Backend: </span>
            <br />
            <br />
            <span className="font-bold"> Express: </span>
            Fast and minimalist server framework.
            <br />
            <br />
            <span className="font-bold"> Sequelize:</span>
            ORM to interact with SQL databases in a simple way.
            <br />
            <br />
            <span className="font-bold"> Socket.io: </span>
            Real-time communication with WebSockets.
            <br />
            <br />
            <span className="font-bold"> JWT: </span>
            Secure authentication with JSON Web Tokens.
            <br />
            <br />
            <span className="font-bold"> Firebase:</span>
            Storage and authentication services.
            <br />
            <br />
            <span className="font-bold"> Helmet, CORS, HPP:</span>
            Robust security for your API.
            <br />
            <br />
            <span className="font-bold">Rate Limiting and Sanitation: </span>
            Protection against brute force attacks and malicious injections.
            <br />
            <br />
            <span className="font-bold"> And others...</span>
            <br />
            <br />
          </p>
        </div>

        <div className=" flex text-center z-0  items-center  bg-violet-300  order-3 lg:order-2 m-2 mt-0 md:m-2 md:mt-0 lg:mb-2 lg:mt-0 lg:mx-2 ">
          <div className=" p-2 bg-violet-300 text-black justify-center rounded-md w-full h-full">
            <br />
            🚀 <span className="font-bold text-[30px]">Start in Minutes! </span>
            <br />
            <br />
            With FastProgramming, you can have your base project up and running
            in a matter of minutes.
            <br />
            <br />
            <br />
            <span className="font-bold"> Quick Install:</span>
            <br />
            npm install fastprogramming
            <br />
            <br />
            <br />
            <span className="font-bold">Automatic configuration: </span>
            <br />
            Generate your project with all dependencies installed.
            <br />
            <br />
            <br />
            <span className="font-bold">Easy deployment: </span>
            <br />
            Follow our detailed guides on the documentation page to deploy your
            application in any environment.
            <br />
            <br />
            <br />
            <br />
            📢 <span className="font-bold"> Get your Project Take Off!</span>
            <br />
            <br />
            Use FastProgramming to get a solid foundation and focus on what
            really matters: building amazing features and growing your app!
            <br />
            <br />
            <br />
            <br />✨ <span className="font-bold"> Do not wait more!</span>
            <br />
            <br />
            Discover everything FastProgramming can do for you and start
            creating amazing web projects today. 🚀
            <br />
            <br />
            <br />
            <hr className="border-t-2 border-gray-400 max-w-[600px] mx-auto my-4"></hr>
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 m-4 lg:mx-32">
              <div className="p-4 text-white">
                <p>
                  💖 <span className="font-bold">Thanks and Donations. </span>
                  <br />
                  <br />
                  If FastProgramming has been useful to you and you want to
                  support us, please consider making a donation. Every
                  contribution helps us improve and maintain this project for
                  the community.
                  <br />
                  <br />
                  Invite me to a coffee.
                  <br />
                  <br />
                </p>

                <div className="inline font-bold">
                  <a
                    href="https://www.paypal.com/ncp/payment/EAWBRGCBLG8PC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-yellow-500 text-white p-2 rounded-md"
                  >
                    👉 Make a Donation,
                  </a>
                  <br />
                </div>
                <br />
                <br />
              </div>
            </div>
            <br />
            <div className=" m-4 ">
              <li className="text-white inline rounded-md bg-blue-500 font-bold p-2">
                <Link className="text-white  font-bold" to="/documentation">
                  Go to DOCUMENTATION
                </Link>
              </li>
            </div>
          </div>
        </div>

        <div className="flex text-center order-2 lg:order-3  mx-2 mb-2 md:mx-2 md:mb-2 lg:ml-0 lg:mr-2 lg:w-1/4">
          <p className=" p-2 bg-violet-300 text-black justify-center rounded-md w-full h-full">
            🎉 <span className="font-bold text-[20px]"> Modern Frontend: </span>
            <br />
            <br />
            <span className="font-bold"> React:</span> JavaScript library for
            building user interfaces.
            <br />
            <br />
            <span className="font-bold">Redux Toolkit: </span> Efficient state
            management.
            <br />
            <br />
            <span className="font-bold"> React Hook Form:</span> Simple form
            management.
            <br />
            <br />
            <span className="font-bold"> React Router DOM:</span> Dynamic
            navigation and protected routes.
            <br />
            <br />
            <span className="font-bold"> Tailwind CSS:</span> Fast and
            responsive styling.
            <br />
            <br />
            <span className="font-bold"> Socket.io Client:</span> Real-time
            communication from the client.
            <br />
            <br />
            <span className="font-bold"> Vite:</span> Rapid development tool for
            a modern frontend development environment.
            <br />
            <br />
            <span className="font-bold"> And others...</span>
            <br />
            <br />
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
