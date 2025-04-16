# FrontEnd_Sistema_de_Aprendizaje_Adaptativo
FrontEnd para proyecto de Sistema de Aprendizaje Adaptativo, el cuál mostrará todo el apartado visual que consuma del proyecto BackEnd en .NET y el módulo de optimización con 2 algoritmos como propuesta de solución.


# Pasos para poder trabajar el FrontEnd con backend desde MacOS

1. Tener instalado el SDK de .net (de preferencia la versión 8)
2. Tener Rider, por parte de JetBrains para poder trabajar en un entorno parecido a visual studio 2022.
3. Descargar el repositorio y trabajar en la rama PruebasUnitarias (de preferencia)
4. Una vez bajado el repositorio, teniendo docker instalado, realizar un Docker compose-up --build teniendo la carpeta SistemadeAA.Server seleccionada. 
5. Tener instalado MySQL, puede ser cualquier version(de preferencia version 8)
6. Conectarse al contenedor docker por medio del comando:

docker exec -it mysql_dev mysql -u root -p your_root_password

6. Una vez dentro de la base de datos, crear el usuario otorgando todos los privilegios 
# Frameworks para estilos CSS

Tailwind CSS, ya está instalada toda la configuración para los estilos. Actualmente en el proyecto ya se puede hacer uso en cualquier parte del código ya que esta configurado de manera global y utilizando un ClassName="".


# Consumo de backend 

En el punto .env (el cual al subir cambios no está dentro del gitignore), está configurado el puerto que escucha el BackEnd y pasamos la variable al archivo apiConfiguration dentro de la carpeta config para poder hacer uso de la variable API_URL, que nos permite realizar peticiones con axios. 


# Estructura del proyecto

- componentes: modales para CRUD (separado por cada elemento de control y acción de menú)de menú de control, Alertas, Footer, Header y Sidebar para el menú de elementos para el profesor. 

- pages: carpetas divididas por usuario y elementos, por ejemplo, elementos del menú (Unidad, modulos, temas, preguntas, respuestas, evaluaciones) y usuario (profesor y alumno). Cada carpeta menaje su page y sus componentes por separado ya que cambian las entradas de datos dependiendo lo que se quiera controlar por medio del CRUD. 

-  App.jsx: En el app.jsx ya están los enrutamientos correspondientes y separados por sección, ya sea que es para alumno o profesor. 


# Inicio de proyecto 

Se recomienda que al descargar un proyecto, hacer un npm i para descargar todas las dependencias y elementos necesarios del proyecto. 

# Puerto

Actualmente el proyecto corre en el puerto 5173 y teniendo como URL (http://localhost:5173/)

# Script de ejecución

Actualmente solo con realizar un npm run dev corre el proyecto en su totalidad. 

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
