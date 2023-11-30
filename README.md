# University Students Details Project
This project is a Node.js application that manages university students' details using PostgreSQL as the database, Docker for containerization, and Swagger for API documentation.

## Project Overview

- **Tech Stack**: JavaScript, Node.js
- **Database**: PostgreSQL
- **Documentation**: Swagger
- **Containerization**: Docker

## How to Run

1. Clone the project from Git:

   ```bash
   git clone 
   ```
2. Navigate to the project directory.
    ```bash
    cd 
    ```
3. Build and start the project using Docker Compose:
    ```bash
    docker-compose up -d --build
    ```
This command will build the project and start the containers in detached mode.

## Access the Documentation
You can access the API documentation using Swagger at the following URL:
http://localhost:3000/api-docs

## API Testing Guide
To test the University Students API, you can use tools like Postman, or any other API testing tool of your choice.

*Postman*
1. Create a new request.
2. Set the request type to `POST`.
3. Enter the URL: http://localhost:3000/universities.
4. Set the request body to a JSON array of universities such as:
    ```bash
    {
        'university_name': 'KKU'
    }
    ```
5. Click "Send" to execute the request.

## Access PostgreSQL via Command Line
To access PostgreSQL using the command line, follow these steps:

1. Identify your PostgreSQL container name:
    ```bash
    docker ps
    ```
Look for the container running your PostgreSQL instance and note its name or ID.

2. Use the following command to access PostgreSQL through the command line:
    ```bash
    docker exec -it <container_name_or_id> psql -U postgres
    ```
Replace <container_name_or_id> with the actual name or ID of your PostgreSQL container.

3. You will be prompted to enter the password for the 'postgres' user.

4. Once connected, you can interact with PostgreSQL using SQL commands. Refer to the [PostgreSQL Command Line documentation](https://www.commandprompt.com/education/postgresql-basic-psql-commands/) for a guide on using psql commands.

Example:
```bash
docker exec -it my_postgres_container psql -U postgres
```
This will open a PostgreSQL command line interface where you can execute SQL commands and manage your database.

## Shutdown and Cleanup
Once you have completed testing or using the University Students project, you can shut down and clean up the associated Docker containers and volumes. Depending on your needs, you can choose to remove the volumes or keep them intact.

### Full Cleanup
To stop and remove the containers along with their volumes, use the following command:

```bash
docker-compose down -v
```
This will gracefully shut down the Docker containers and delete associated volumes.

### Shutdown Only
If you only want to stop the containers without removing the volumes, you can use:

```bash
docker-compose down
```
This command will stop the running containers, but the volumes will be preserved for future use.

Make sure to choose the appropriate command based on your cleanup requirements.