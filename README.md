vite: https://vitejs.dev/
react: https://react.dev/
Eslint: https://eslint.org/docs/latest/use/getting-started
loaders: https://uiball.com/loaders/

Descripción

El enfoque fue resolver el problema de la prueba Front de la forma más sencilla sin utilizar CustomHook, módulos como Axios, framework de CSS etc. Quería tener un tiempo para revisar eh intentar resolver la prueba de back. Al final no pude completar los requerimientos totales de esa prueba por falta de tiempo y conocimiento, tenía que echar una repasada a relaciones entre tablas (muy interesante la prueba…).
Volviendo a la resolución de la prueba de Front, la aplicación hace peticiones a https://www.omdbapi.com/ con el objetivo de mostrar títulos de películas en el frontend, por medio un useffect y su array de dependencia ejecuto nuevamente la petición si se ingresa un nuevo titulo o si cambia estado de page.
La función handleSubmit actualiza el estado donde se almacena el título de la película, si el estado movieTitle cambia, entonces se vuelve hacer un Fetch a la API con el nuevo nombre de la película. El valor por defecto es Avengers
La función handlePagination actualiza el número de página, si el estado de page cambia, se vuelve a renderizar el Fetch y hace una nueva petición solicitando una nueva página.
Math.ceil(movies.totalResults / 10) -> redondea al entero mas cercano hacia arriba, si nada mas hay 6 registros, 6 se divide en 10 = 0.6, se redondea a 1, es decir una sola página.
Es cierto que 4 condiciones es demasiado, seguramente con una sola es suficiente, no quise probar :D.
Por último el Loading muestra un incono mientras carga la pagina
GRACIAS :D.

aproveche un tiempo que tenia para mejorarlo un poco, los arreglos estan dentro de las 24 hora :D
