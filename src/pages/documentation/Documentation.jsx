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
            <div className="bg-white/80 rounded-md p-4 text-center text-[8px] xs:text-[10px] sm:text-[15px] md:text-[18px] lg:text-[18px]">
              <h1 className="font-bold z-10">
                <div className="inline p-2 rounded-md bg-violet-500">
                  <span className="text-black">
                    FAST <span className="text-white">/// </span>
                    <span className="text-amber-400">PROGRAMMING </span>
                  </span>
                </div>
                🚀
                <br />
                <br />
                Para que puedas usar la librería fastprogramming, aquí tienes
                una guía paso a paso que debes seguir.
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
          <p className=" p-8 bg-violet-500 text-white justify-center rounded-md w-full h-full">
            <br />
            🔧
            <span className="font-bold text-[20px]">
              PARA INSTALAR Y USAR
              <br />
              fastprogramming.
            </span>
            <br />
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 mx-32">
              <div className="p-4">
                1. Instalar Node.js
                <br />
                <br />
                Asegúrate de que tengas instalado Node.js en tu sistema.
                <br />
                Pueden descargarlo desde nodejs.org.
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 mx-32">
              <div className="p-4">
                2. Crear un nuevo proyecto de Node.js
                <br />
                <br />
                Crea una nueva carpeta para tu proyecto y navega hasta ella en
                la terminal.
                <br />
                Usando estos comandos o de la manera en que estas acostumbrado a
                crear carpetas:
                <br />
                mkdir my-new-project
                <br />
                cd my-new-project
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 mx-32">
              <div className="p-4">
                3. Inicializar el proyecto de Node.js
                <br />
                <br />
                Inicializa un nuevo proyecto de Node.js usando:
                <br />
                npm init
                <br />
                o para omitir las preguntas y usar los valores predeterminados,
                usa:
                <br />
                npm init -y
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 mx-32">
              <div className="p-4">
                4. Instalar la librería.
                <br />
                <br />
                Para instalar la librería desde npm usa el siguiente comando:
                <br />
                npm install fastprogramming
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 mx-32">
              <div className="p-4">
                5. Para usar la librería.
                <br />
                <br />
                Crea el archivo fast-index.js, en la raiz de tu proyecto, para
                configurar el proyecto, sigue estos pasos:
                <br />
                <br />
                a. Crear fast-index.js
                <br />
                <br />
                Crea un archivo llamado fast-index.js, y escribe el siguiente
                código, y donde dice my-new-project, escribe el nombre que
                quieres que tenga tu proyecto:
                <br />
                <br />
                const fastprogramming = require('fastprogramming');
                fastprogramming.initializeProject('my-new-project');
                <br />
                <br />
                <br />
                b. Define el punto de entrada en el archivo package.json.
                <br />
                <br />
                Asegúrate de que el archivo fast-index.js sea el punto de
                entrada del proyecto. Debes editar el archivo package.json para
                incluir:
                <br />
                <br />
                "start": "node fast-index.js"
                <br />
                <br />
                copia ese codigo y pegalo en la parte que dice,
                <br />
                "scripts":
                <br />
                "start": "node fast-index.js"
                <br />
                <br />
                En la parte donde dice:
                <br />
                "main": "index.js",
                <br />
                reemplazalo con:
                <br />
                "main": "fast-index.js",
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 mx-32">
              <div className="p-4">
                6. Ejecutar el script.
                <br />
                <br />
                Finalmente, puedes ejecutar el script para inicializar tu
                proyecto con los archivos y configuraciones proporcionadas por
                la librería fastprogramming, en tu terminal escribe:
                <br />
                <br />
                npm start
                <br />
                <br />
                Al hacer enter, se comenzara a instalar la libreria
                fastprogramming.
                <br />
                Revisa el archivo package.json, en las dependencias, para
                confirmar que esta instalada la libreria.
              </div>
            </div>
            <br />
            <br />
            <br />
            ------
            <br />
            FELICITACIONES
            <br />
            ya tienes instalada la libreria.
            <br />
            ------
            <br />
            <br />
            <br />
            Ahora tienes instalada todos los archivos de tu backend y tu
            frontend.
            <br />
            Pero necesitas configurarlos para que funcionen y se comuniquen
            entre si, sigue estos pasos:
            <br />
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 mx-32">
              <div className="p-4">
                Para usar el backend.
                <br />
                <br />
                En la carpeta "backend" busca el archivo .env, sino está, crea
                un archivo con ese nombre.
                <br />
                Luego ve al archivo .env.template y copia todo lo que tiene y
                pegalo en el archivo .env que acabas de crear, y en el archivo
                .env llena con tus datos cada una de las variables de entorno.
                <br />
                <br />
                Usa tus credenciales de tu cuenta de JWT (JSON Web Tokens) para
                la seguridad, y de tu cuenta de Firebase (Almacenamiento de
                imagenes y servicios de autenticación), o contrasenas de tu base
                de datos postgres, el puerto que quieres usar para el backend,
                en el archivo server.js se está usando el puerto 3000, puedes
                usar ese u otro que prefieras, etc.
                <br />
                <br />
                En el terminal escribe:
                <br />
                cd "nombre de tu proyecto"
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
            <br />
            ------
            <br />
            Listo! Ya tienes el backend.
            <br />
            ------
            <br />
            <br />
            <br />
            <br />
            <div className="flex justify-center rounded-lg bg-black/80 mx-32">
              <div className="p-4">
                Para usar el frontend.
                <br />
                <br />
                Ajusta los archivos para que funcionen con el servidor que estes
                usando y el puerto que configuraste en tu backend para que el
                frontend este escuchando por ese puerto. Por ejemplo, ve al
                archivo posts.slice.js en la carpeta store/slices y en la parte
                que dice:
                <br />
                <br />
                axios .get 'http://localhost:3000/api/v1/posts',..
                <br />
                <br />
                son las solicitudes desde tu frontend hacia tu backend, por
                defecto se usa el servidor "local localhost" y el puerto 3000.
                tendras que ajustarlo segun el servidor que quieres usar y el
                puerto que configuraste en tu backend.
                <br />
                <br />
                En el terminal escribe:
                <br />
                cd "nombre de tu proyecto"
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
            <br />
            ------
            <br />
            LISTO!
            <br />
            ------
            <br />
            Con estos pasos deberias tener la libreria fastprogramming
            instalada, y tu proyecto base, con el backend y el frontend
            funcionando. Si tienes algun problema con la instalacion y deseas
            ayuda con algunos de estos pasos, no dudes en escribirme a:
            <br />
            <br />
            pevallos1965@gmail.com
            <br />
            <br />
            <br />
            <br />
            EXITOS.........
            <br />
            <br />
          </p>
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
