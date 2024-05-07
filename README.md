## Project Description:

This project consists of a REST API developed using Node.js and Express. The API provides endpoints for managing medical appointments, allowing users to perform CRUD (Create, Read, Update, Delete) operations on appointments stored in a database.
<br>
LIVE: https://api-rest-clinica.onrender.com

### EndPoints Medical appointments:

GET https://api-rest-clinica.onrender.com/medicalAppointments/search/Doe
<br>
GET https://api-rest-clinica.onrender.com/medicalAppointments
<br>
GET https://api-rest-clinica.onrender.com/medicalAppointments/2
<br>
POST https://api-rest-clinica.onrender.com/medicalAppointments
<br>
PUT https://api-rest-clinica.onrender.com/medicalAppointments/11
<br>
DELETE https://api-rest-clinica.onrender.com/medicalAppointments/11
<br>

### EndPoints Patients:

GET https://api-rest-clinica.onrender.com/patients
<br>
GET https://api-rest-clinica.onrender.com/patients/search/Smith

### EndPoints Doctores:

GET https://api-rest-clinica.onrender.com/doctors
<br>
GET https://api-rest-clinica.onrender.com/doctors/search/Johnson

## Key Features:

- Implementation of endpoints for CRUD operations on medical appointments.
- Utilization of Express for routing and handling HTTP requests.
- Integration with a database (e.g., MySQL, MongoDB) for persistent data storage.
- Use of middlewares for authentication, data validation, and error handling.
- Documentation of the API using tools like Swagger or Postman to facilitate understanding and usage by other developers.
- Implementation of unit and integration tests to ensure code quality and API functionality.

## Project Objective:

The main objective of this project is to provide a robust and secure REST API for managing medical appointments, thereby facilitating interoperability with client applications (e.g., web applications, mobile applications) that need to access and manipulate this information.
