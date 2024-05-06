## Project Description:

This project consists of a REST API developed using Node.js and Express. The API provides endpoints for managing medical appointments, allowing users to perform CRUD (Create, Read, Update, Delete) operations on appointments stored in a database.
<br>
LIVE: https://api-rest-clinica.onrender.com

### EndPoints Medical appointments:

GET http://localhost:3000/medicalAppointments/search/Doe
<br>
GET http://localhost:3000/medicalAppointments
<br>
GET http://localhost:3000/medicalAppointments/2
<br>
POST http://localhost:3000/medicalAppointments
<br>
PUT http://localhost:3000/medicalAppointments/11
<br>
DELETE http://localhost:3000/medicalAppointments/11
<br>

### EndPoints Patients:

GET http://localhost:3000/patients
<br>
GET http://localhost:3000/patients/search/Smith

### EndPoints Doctores:

GET http://localhost:3000/doctors
<br>
GET http://localhost:3000/doctors/search/Johnson

## Key Features:

- Implementation of endpoints for CRUD operations on medical appointments.
- Utilization of Express for routing and handling HTTP requests.
- Integration with a database (e.g., MySQL, MongoDB) for persistent data storage.
- Use of middlewares for authentication, data validation, and error handling.
- Documentation of the API using tools like Swagger or Postman to facilitate understanding and usage by other developers.
- Implementation of unit and integration tests to ensure code quality and API functionality.

## Project Objective:

The main objective of this project is to provide a robust and secure REST API for managing medical appointments, thereby facilitating interoperability with client applications (e.g., web applications, mobile applications) that need to access and manipulate this information.
