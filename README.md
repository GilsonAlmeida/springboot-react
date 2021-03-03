Iniciando Back End
docker build -t spring-app .
Start no container
docker run -it -p 8080:8080  spring-app

Iniciando Front End 
docker build -t react-app .
Start no container
docker run -it -p 3001:3000 react-app
acessar no navegador http://localhost:3001/



