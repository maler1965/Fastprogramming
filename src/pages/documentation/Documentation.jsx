import "./documentation.css";
import Zamora from "./../../assets/manhattan-3866140_1280.jpg";

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
            <div className="bg-white/80 rounded-md m-4 p-4 text-center text-[8px] xs:text-[10px] sm:text-[15px] md:text-[18px] lg:text-[18px]">
              <h1 className="font-bold z-10">
                <div className="inline p-2 rounded-md bg-violet-500">
                  <span className="text-black">
                    FAST <span className="text-white">&#47;&#47;&#47; </span>
                    <span className="text-amber-400">PROGRAMMING </span>
                  </span>
                </div>
                🚀
                <br />
                <br />
                So you can use the fastprogramming library, here you go A step
                by step guide that you must follow.
              </h1>
            </div>
          </div>
        </div>
      </div>

      <section className="  flex flex-col lg:flex-row ">
        <div className=" flex text-center order-2 lg:order-1  m-2 mt-0 md:m-2 lg:mb-2 lg:mx-0 lg:mt-0 lg:ml-2  lg:w-1/4">
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

        <div className=" flex text-center z-0  items-center  bg-violet-300  order-1 lg:order-2 m-2 mt-0 md:m-2 md:mt-0 lg:mb-2 lg:mt-0 lg:mx-2 ">
          <div className="p-2 lg:p-8 bg-violet-500 text-white justify-center rounded-md w-full h-full">
            <p>
              <br />
              🔧
              <span className="font-bold text-[20px]">
                TO INSTALL AND USE
                <br />
                fastprogramming.
              </span>
              <br />
              <br />
              <br />
            </p>
            <div className="flex justify-center rounded-lg bg-black/80 m-4 lg:mx-32">
              <div className="p-4">
                1. Install Node.js
                <br />
                <br />
                Make sure you have Node.js installed on your system.
                <br />
                You can download it from nodejs.org.
              </div>
            </div>
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 m-4 lg:mx-32">
              <div className="p-4">
                2. Create a new Node.js project
                <br />
                <br />
                Create a new folder for your project and navigate to it in the
                terminal.
                <br />
                Using these commands or the way you are used to create folders:
                <br />
                mkdir my-new-project
                <br />
                cd my-new-project
              </div>
            </div>
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 m-4 lg:mx-32">
              <div className="p-4">
                3. Initialize the Node.js project
                <br />
                <br />
                Initialize a new Node.js project using:
                <br />
                npm init
                <br />
                or to skip the questions and use the default values, uses:
                <br />
                npm init -y
              </div>
            </div>
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 m-4 lg:mx-32">
              <div className="p-4">
                4. Install the library.
                <br />
                <br />
                To install the library from npm use the following command:
                <br />
                npm install fastprogramming
              </div>
            </div>
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 m-4 lg:mx-32">
              <div className="w-full h-full p-2  lg:p-4">
                5.To use the library.
                <br />
                <br />
                Create the file fast-index.js, at the root of your project, to
                configure the project, follow these steps:
                <br />
                <br />
                a. Create fast-index.js
                <br />
                <br />
                Create a file called fast-index.js, and write the following
                code, and where it says my-new-project, write the name that you
                want your project to have:
                <br />
                <br />
                <span className=" text-[10px] xs:text-[15px]">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  const fastprogramming = require('fastprogramming');
                </span>
                <br />
                <br />
                <span className=" text-[10px] xs:text-[15px]">
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  fastprogramming.initializeProject('my-new-project');
                </span>
                <br />
                <br />
                b. Defines the entry point in the package.json file.
                <br />
                <br />
                Make sure the fast-index.js file is the point of project entry.
                You must edit the package.json file to include:
                <br />
                <br />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "start": "node fast-index.js"
                <br />
                <br />
                copy this code and paste it in the part that says,
                <br />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "scripts":
                <br />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "start": "node fast-index.js"
                <br />
                <br />
                In the part where it says:
                <br />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "main": "index.js",
                <br />
                replace it with:
                <br />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "main": "fast-index.js",
              </div>
            </div>
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 m-4 lg:mx-32">
              <div className="p-4">
                6.Run the script.
                <br />
                <br />
                Finally, you can run the script to initialize your project with
                the files and settings provided by the fastprogramming library,
                in your terminal write:
                <br />
                <br />
                npm start
                <br />
                <br />
                When you press enter, the fast programming library begins to be
                installed.
                <br />
                Check the package.json file, in the dependencies, to Confirm
                that the library is installed.
              </div>
            </div>
            <br />
            <br />
            ------
            <br />
            CONGRATULATIONS
            <br />
            You already have the library installed.
            <br />
            ------
            <br />
            <br />
            Now you have all your backend files installed and your frontend.
            <br />
            But you need to configure them to work and communicate each other,
            follow these steps:
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 m-4 lg:mx-32">
              <div className="p-4">
                To use the backend.
                <br />
                <br />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                In the "backend" folder look for the .env file, if it is not
                there, create a file with that name.
                <br />
                Then go to the .env.template file and copy everything it has and
                paste it into the .env file you just created, and into the file
                .env fills each of the environment variables with your data.
                <br />
                <br />
                Use your JWT (JSON Web Tokens) account credentials to security,
                and your Firebase account (Image storage and authentication
                services), or passwords for your base postgres data port, the
                port you want to use for the backend, in the server.js file port
                3000 is being used, you can use that one or another one you
                prefer, etc.
                <br />
                <br />
                In the terminal write:
                <br />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                cd "name of your project"
                <br />
                cd backend
                <br />
                npm install
                <br />
                npm run start:dev
              </div>
            </div>
            <br />
            <br />
            ------
            <br />
            Ready! You already have the backend.
            <br />
            ------
            <br />
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 m-4 lg:mx-32">
              <div className="p-4 max-w-full">
                To use the frontend.
                <br />
                <br />
                Adjust the files to work with the server you are on using and
                the port you configured in your backend so that the frontend is
                listening on that port. For example, go to posts.slice.js file
                in the store/slices folder and in the what does it say:
                <br />
                <br />
                <span className="text-[10px] xs:text-[15px]">
                  {" "}
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                  axios .get 'http://localhost:3000/api/v1/posts',..{" "}
                </span>
                <br />
                <br />
                are the requests from your frontend to your backend, for default
                the server is used
                <br />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "local localhost"
                <br />
                and port 3000. You will have to adjust it according to the
                server you you want to use and the port you configured in your
                backend.
                <br />
                <br />
                In the terminal write:
                <br />
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                cd "name of your project"
                <br />
                cd frontend
                <br />
                cd library-blog
                <br />
                npm install
                <br />
                npm run dev
              </div>
            </div>
            <br />
            <br />
            ------
            <br />
            READY!
            <br />
            ------
            <br />
            With these steps you should have the fastprogramming library
            installed, and your base project, with the backend and the frontend
            working. If you have any problems with the installation and want
            help with some of these steps, don't hesitate to write to me at:
            <br />
            <br />
            pevallos1965@gmail.com
            <br />
            <br />
            SUCCESSFUL.........
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 m-4 lg:mx-32">
              <div className="p-4">
                💖 <span className="font-bold">Thanks and Donations. </span>
                <br />
                If FastProgramming has been useful to you and you want to
                support us, please consider making a donation. Every
                contribution helps us improve and maintain this project for the
                community.
                <br />
                <br />
                Invite me to a coffee.
                <br />
                <br />
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
          </div>
        </div>
        <div className="flex text-center order-3  mx-2 mb-2 md:mx-2 md:mb-2 lg:ml-0 lg:mr-2 lg:w-1/4">
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
