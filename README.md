#Movies Database

    Front End:
        Angular 6

    Back End: 
        NodeJS
        MongoDB

    Read the docs for more info.

Setting up development environment:

    1.Install docker.
    2.Check to make sure docker is working
        docker --version
        docker-compose --version

Running the application:

    After cloning the repository, open docker-compose.yml file and replace the 'dockerfile' value at both the places with your systems relative path for that file location.

    (eg): replace '/home/cc/Documents/DeltaX/web/DockerFile' 
            with '<your system folder path>/'/DeltaX/web/DockerFile.

    RUN the Following commands:
        docker-compose build
        docker-compose up

Once the application starts running, in the browser open http://localhost:4200