## API MVC - con inyeccion de dependencias
# Requisitos
---instala nvm para las versiones de node (opcional): (https://github.com/coreybutler/nvm-windows/releases)
---instala NODE js (LTS): (https://nodejs.org/en)
---Clonar el repositorio acceder al proyecto y hacer:
```
npm install
```
O
```
pnpm install
```
---Levantar el servidor con:
```
pnpm run dev o pnpm run dev
```
# Inyeccion de dependencias
```
La inyección de dependencias es un patrón de diseño y un concepto importante en el desarrollo de software, particularmente en la programación orientada a objetos y el diseño de sistemas modulares.

En términos simples, la inyección de dependencias es un patrón que se utiliza para proporcionar a un objeto las dependencias que necesita (objetos, datos, servicios, etc.) desde el exterior, en lugar de que el propio objeto cree esas dependencias. Esto se hace con el propósito de reducir el acoplamiento entre componentes y hacer que el código sea más mantenible, flexible y reutilizable.

El patrón de inyección de dependencias se basa en la inversión del control. En lugar de que un componente controle la creación o la obtención de sus propias dependencias, estas se proporcionan desde el exterior.
```

#CONSEJO

--crea un archivo .env agrega y completa
```
PORT=

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_PORT=
DB_DATABASE=
```
ya sea base de datos en la nube o de prueba
