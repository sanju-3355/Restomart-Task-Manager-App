# Interactive Task Manager Application

### Objective
Build a simple full-stack Task Manager web application with:
- A RESTful API backend using Node.js, Express.js, TypeORM, and MongoDB
- A minimal functional frontend using React.JS.

No authentication or user management is required.

> Demo 
> Link :  https://chaitanya-task-manager.netlify.app/

### Usage 

``` 
git clone <github repository link>  //to clone the github repository
npm install                         //to install all the dependencies required to run the application
npm start                           //to start the application
```  

## Development
### Tech Stack
|**Layer**   |  **Technologies Used**  |
|:-------|:---------------------|
|Backend | Node.js, Express.js, TypeORM, MongoDB|
|Frontend| React.js, Tailwind CSS / plain CSS (no UI library)|
|Optional| Docker Compose (for DB), .env setup for config|

## Functionality
## Task Specification
### 1. Backend (API)
**Database Model (Task Entity)**
| Field | Type | Required  |
|:------|:-----|:----------|
| id | UUID (Primary Key) | Yes |
| title | String | Yes |
| description | Text | No| 
| status | Enum: todo, in_progress, done | Yes |
| dueDate | Date | No |
| createdAt | Timestamp | Yes|
| updatedAt | Timestamp | Yes|


**API Endpoints**

| Method | Endpoint | Description|
|:-------|:---------|:-----------|
| GET | /tasks |List all tasks |
|POST | /tasks | Create a new task |
| PUT |/tasks/:id | Update a task|
| DELETE | /tasks/:id | Delete a task|

 You can use either a local PostgreSQL database or in-memory storage. Seed data optional.

### 2. Frontend (Next.js)
**Pages / Views**
| Page | Functionality|
|:-----|:-------------|
| /home | Display a list of all tasks |
| /add | Form to create a new task |
| /edit/:id | Form (reuse) to update an existing task|
| /delete task | Button or icon on each task card or row |


**UI Requirements:**
- Client-side data fetching using hooks (no SSR)
- State management with React Hooks
- Clean minimal styling using plain CSS or Tailwind
- No use of external component libraries (e.g., MUI, Chakra)

**Actions:**
- Add Task
- Edit Task
- Delete Task

**Optional:**
- Filter tasks by status (todo, in_progress, done)
- Add basic form validations (e.g., required title)
- Responsive layout for mobile and desktop


## Submission Guidelines

* Followed Github Guidelines
  * Made the commits often and made sure the commit messages are concise and specific
  * Included a README file for explaining the project setup, usage instructions, and any additional information
* Followed Clean Code Guidelines
* The repo is well-organized and easy to navigate 
  * Followed the [create-react-app] folder structure
* The Application handled all the errors


## Resources
### Design files
**Pages**: Home, Add Task, Edit Task

## Third-party packages
* React Router (react-router-dom)
* Loader (react-loader-spinner)

## Future Improvements
* Implement User Authentication