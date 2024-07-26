# Fastprogramming

Documentacion de la libreria fastprogramming

PARA INSTALAR Y USAR fastprogramming.

1. Instalar Node.js
   Asegúrate de que tengas instalado Node.js en tu sistema. Pueden descargarlo desde nodejs.org.

2. Crear un nuevo proyecto de Node.js
   Crea una nueva carpeta para tu proyecto y navega hasta ella en la terminal.

Usando estos comandos o de la manera en que estas acostumbrado a crear carpetas.

mkdir my-new-project
cd my-new-project

3. Inicializar el proyecto de Node.js
   Inicializa un nuevo proyecto de Node.js usando npm init o npm init -y para omitir las preguntas y usar los valores predeterminados.

npm init -y

---

4. Instalar la librería.

Para instalar la librería desde npm usa el siguiente comando:

npm install fastprogramming

---

5. Para usar la librería.

Crea un archivo JavaScript (por ejemplo, fast-index.js) en tu proyecto para configurar el proyecto. Aquí tienes un ejemplo de cómo podría ser:

a. Crear fast-index.js
Crea un archivo llamado fast-index.js, y escribe el siguiente código y donde dice my-new-project, escribe el nombre que quieres que tenga tu proyecto:

const fastprogramming = require('fastprogramming');
fastprogramming.initializeProject('my-new-project');

b. Define el punto de entrada en el archivo package.json.

Asegúrate de que el archivo fast-index.js sea el punto de entrada del proyecto. Debes editar el archivo package.json para incluir:

"start": "node fast-index.js"

copia ese codigo y pegalo en la parte que dice,

"scripts": {
"............"
"start": "node fast-index.js"  
 }

En la parte donde dice:

"main": "index.js",

reemplazalo con:

"main": "fast-index.js",

6. Ejecutar el script
   Finalmente, puedes ejecutar el script para inicializar tu proyecto con los archivos y configuraciones proporcionadas por la librería fastprogramming, en tu terminal escribe:

npm start

Al hacer enter, se comenzara a instalar la libreria fastprogramming.
Revisa el archivo package.json en las dependencias para confirmar que esta instalada la libreria.

---

## FELICITACIONES ya tienes instalada la libreria.

Ahora tienes instalada todos los archivos de tu backend y tu frontend.

Pero necesitas configurarlos para que funcionen y se comuniquen entre si, sigue estos pasos:

---

Para usar el backend.

En la carpeta backend busca el archivo .env, sino está, crea un archivo con ese nombre.
Luego ve al archivo .env.template y copia todo lo que tiene y pegalo en el archivo .env que acabas de crear, sino lo tenias, y en el archivo .env llena con tus datos cada una de las variables de entorno.

Usa tus credenciales de tu cuenta de JWT (JSON Web Tokens) para la seguridad, y de tu cuenta de Firebase (Almacenamiento de imagenes y servicios de autenticación). o contrasenas de tu base de datos postgres, el puerto que quieres usar para el backend, en el archivo server.js se está usando el puerto 3000, puedes usar ese u otro que prefieras, etc.

En el terminal escribe:

cd "nombre de tu proyecto"

cd backend

npm install

npm run start:dev

---

Para usar el frontend.

Ajusta los archivos para que funcionen con el servidor que estes usando y el puerto que configuraste en tu backend para que el frontend este escuchando por ese puerto.

Por ejemplo, ve al archivo posts.slice.js en la carpeta store/slices y en la parte que dice:

axios
.get('http://localhost:3000/api/v1/posts', { headers })

son las solicitudes desde tu frontend hacia tu backend, por defecto se usa el servidor local localhost y el puerto 3000. tendras que ajustarlo segun el servidor que quieres usar y el puerto que configuraste en tu backend.

En el terminal escribe:

cd "nombre de tu proyecto"

cd frontend

cd library-blog

npm install

npm run dev

LISTO! Con estos pasos deberias tener la libreria fastprogramming instalada, y tu proyecto base, con el backend y el frontend funcionando.

Si tienes algun problema con la instalacion y deseas ayuda con algunos de estos pasos, no dudes en escribirme a: pevallos1965@gmail.com

EXITOS.........

