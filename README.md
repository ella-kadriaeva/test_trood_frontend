### Project Management System

Description
This project is a system for managing projects and vacancies. It allows users to create, edit, and delete both projects and job openings. The system includes functionality for filtering projects by status (active/completed) and adding vacancies to each project.
All data is stored locally in LocalStorage, which ensures persistence even after the page is reloaded.

### Core Functionality

Project Management:
The Projects tab displays a list of all projects, divided into active and completed based on their deadline.
Each project includes the following fields:

Title

Field (e.g., design, development, marketing)

Required experience

Deadline

Description

Project Creation:
A separate page opens with a form to enter project details.

Project Deletion:
It is possible to delete a project.

Vacancy Management:

Adding Vacancies to a Project:
Fields include:

Title

Field

Experience

Country

Description

Vacancy Editing:
A separate page opens to edit the selected vacancy.

Vacancy Deletion:
It is possible to delete a vacancy.

Displaying the List of Vacancies on the Project Page:
All created vacancies for the selected project are shown in the "Hired people" section.

#### Technologies
The project was developed using the following technologies:

React – for building components and managing application state.

React Hook Form – for handling form logic and validation.

CSS – for styling components.

LocalStorage – for storing data on the client side.

React Router – for navigating between pages.

React-Toastify – for displaying notifications (e.g., creation, deletion, etc.).

#### Installation and Launch
Requirements:
For the frontend:

Node.js

npm

For the backend:
Requirements are listed in the README.md of the backend project.

#### Steps to Run the Project
Clone the repositories:
_FRONTEND_PROJECT_
git clone https://github.com/ella-kadriaeva/test_trood_frontend
cd front-app
npm install
npm run dev

_BACKEND_PROJECT_
git clone https://github.com/ella-kadriaeva/test_trood_backend
cм. README.md

#### Deployment

[Project](https://test-trood-frontend.vercel.app)

The backend is deployed on Render.com and is available at:
[BACKEND_PROJECT](https://test-trood-backend.onrender.com)

The frontend is deployed on Vercel and is available at:
[FRONTEND_PROJECT] (https://test-trood-frontend.vercel.app)

#### Project Structure
src/ — The source code of the application.

components/ — Components such as forms, project and vacancy cards.

pages/ — Pages, including the project and vacancy creation/editing pages.

utils/ — Utilities for data processing (e.g., date normalization).

App.js — The main application component that handles routing.

README.md — Project documentation.

Notes
All data is stored locally in LocalStorage and is not saved on the server.

To check the data handling, open the Developer Tools, go to the "Application" tab, where the data will be visible in LocalStorage.

#### Testing Instructions
To test the project, please follow these steps:

1. Testing the project creation functionality:

Go to the Create Project page by clicking the Create Project button.

Fill in the form with the following fields: Project Title, Field, Experience, Deadline, Description.

Click the Create Project button.

Verify that the project appears in the list on the Projects page with the correct data.

2. Testing project editing:

Go to the project page from the Projects tab by clicking on the project card.

Click the Edit button.

Modify at least one field in the project edit form.

Save the changes.

Verify that the project is updated in the list on the Projects page.

3. Testing project deletion:

On the Projects page, go to the project you want to delete by clicking on the project card.

Click the Delete Project button.

Verify that the project no longer appears in the list on the Projects page.

4. Testing the vacancies functionality:

Go to the project page by clicking on the project card.

Click the Add Vacancy button.

Add a vacancy with the following fields: Vacancy Title, Field, Experience, Country, Description.

Verify that the vacancy appears on the project page under the Hired People and Vacancies sections.

5. Testing vacancy editing:

Go to the vacancy page by clicking on the More button →.

Click the Edit Vacancy button.

Modify at least one field in the vacancy edit form.

Save the changes.

Verify that the vacancy data is updated in the list on the project page and the Vacancies page.

Try deleting the vacancy and verify that the changes are saved and displayed correctly.

6. Testing project sorting:

Go to the Projects main page.

Verify that projects with past deadlines are shown as completed, while projects with future deadlines are shown as active.
For this, the base comparison date is set to "2025-07-01", so a project with a deadline of 30.06 will appear as completed.
To ensure the correct functioning, uncomment line 21 in the utils/checkData.js file and comment out line 22. This way, project dates will be compared with the current date.

Checking local data storage:

Open the browser's Developer Tools.

Go to the Application tab.

Verify that the project and vacancy data is stored in LocalStorage.