# Md-links

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado ligero muy popular entre developers. Es usado en muchísimas plataformas que manejan texto plano (GitHub, foros, blogs, ...), y es muy común encontrar varios archivos en ese formato en cualquier tipo de repositorio (empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de la información que se quiere compartir.

Dentro de una comunidad de código abierto, nos han propuesto crear una herramienta usando [Node.js](https://nodejs.org/), que lea y analice archivos en formato `Markdown`, para verificar los links que contengan y reportar algunas estadísticas.

## Proceso

Para comenzar se comenzó por crear el flujo el cual tuvo varias iteraciones durante el proyecto.
![FlUJO](https://i.ibb.co/vcZdF3h/flujo-mdlinks.png)  

## Modo de uso

Para acceder se debe ingresar al sitio de npm y buscar md-links-cami-martinez" .

Ingrese  npm i md-links-cami-martinez para instalar

Para usar copie el código que se encuentra en el archivo md-links.js

Para ejecutar ingrese en la terminal  : node  ,nombre de carpeta , ruta del archivo donde se encuentran los links MD

Ejemplo : node index.js ./README.md

Al "apretar enter" se imprimira un listado con el link del archivo , su texto y ruta. 

Además de el estado del link

![Terminal](https://i.ibb.co/3rMZn5J/terminal.png)




