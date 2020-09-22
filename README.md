
# **Description**

    • This application was developed with Node js  programming language using the Express Framework, Nedb 
    database and Javascript were implemented. The application is dockerize and running on Roost cluster.
    • The challenge is uploaded on the github folder and the file name is roost-   hackathon.
    • The database was deployed using in memory persistent volume in docker container, This means that the 
    data volume is mounted on a the Docker Container.
    • Roost Desktop was used in deploying the application to Roost Cluster. All the codes used in executing 
    this challenge are all in the github folder. 
    • There are two micrservice developed in this heackathon.
      1. EnrollAPI
      2. UsersAPI
    • UserAPI includes Crud Endpoints for performing insert, update, delete, select all and select by id 
    operation  and healthcheck end point for checking if application is running perfectly or not.
    • EnrollAPI includes register user, deregister users and healthcheck endpoint. EnrollAPI calls usersAPI 
    via http protocol to save users data into the memory.
      
# **Description of the Database  **
    • Nedb database is used for this project
    • There is only one table users.
    • Nedb is Embedded persistent or in memory database for Node.js, nw.js, Electron and browsers, 100% 
    JavaScript, no binary dependency. 
    • API is a subset of MongoDB's and it's plenty fast.



# **Step by Step guide to deploying application**
    1. Do a git clone of the project or download app_clone.sh stored in root github folder and run bash app_clone.sh
    2. install roost desktop into your machine and open roost folder of repository in roost.
    3. Right click on enroll/enroll.dockerfile and click on build. Give name enroll and tag name v1 in dialogue box and click on build. 
    4. Right click on users/users.dockerfile and click on build. Give name users and tag name v1 in dialogue box and click on build.
    5. Right click enroll.yaml file and click on apply to ZKE and after that click on apply. 
    6. Right click users.yaml file and click on apply to ZKE and after that click on apply.
    7. The Roost will deploy the application (Users and Enroll API’s) and database (Nedb).
    8. Now you can hit endpoints.

# **The Following Endpoints were implemented :**

### **UsersAPI**

Name | Method | URL
-----|--------|-----
Insert User | Post | /api/users
Delete User | Delete | /api/users/:id
Update User | Put  | /api/users/:id
Select User by Id | Get | /api/users/:id
Select Users | Get | /api/users
Health Check  | Get |  /api/status

### **EnrollAPI**

Name | Method | URL
-----|--------|-----
Register User | Post | /api/enroll
Deregister User | Delete | /api/enroll/:id
Health Check | Get | /api/status

# **Stack Includes**

    • node js 
    • express framework 
    • axios API (for http call)
    • docker 
    • kubernetes
    • Roost Desktop
    • postman(for testing)
    • git hub

