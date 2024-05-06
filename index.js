import express from "express";
import fs, { read } from "fs";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());

const readData = () => {
  try {
    const data = fs.readFileSync("./db.json");
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

const writeData = (data) => {
  try {
    fs.writeFileSync("./db.json", JSON.stringify(data));
  } catch (error) {
    console.log(error);
  }
};

readData();

app.get("/", (req, res) => {
  res.send("Api Rest for clinical appointment development by Angelo Gomez :D");
});

app.get("/medicalAppointments", (req, res) => {
  const data = readData();
  res.json(data.medicalAppointments);
});

app.get("/medicalAppointments/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const appointment = data.medicalAppointments.find(
    (appointment) => appointment.id === id
  );
  res.json(appointment);
});

app.get("/medicalAppointments/search/:patientName", (req, res) => {
  const data = readData();
  const { patientName } = req.params;
  const appointments = data.medicalAppointments.filter((appointment) =>
    appointment.patientName.toLowerCase().includes(patientName.toLowerCase())
  );
  res.json(appointments);
});

app.post("/medicalAppointments", (req, res) => {
  const data = readData();
  const body = req.body;
  const newAppointment = {
    id: data.medicalAppointments.length + 1,
    ...body,
  };
  data.medicalAppointments.push(newAppointment);
  writeData(data);
  res.json(newAppointment);
});

app.put("/medicalAppointments/:id", (req, res) => {
  const data = readData();
  const body = req.body;
  const id = parseInt(req.params.id);
  const appointmentIndex = data.medicalAppointments.findIndex(
    (appointment) => appointment.id === id
  );
  data.medicalAppointments[appointmentIndex] = {
    ...data.medicalAppointments[appointmentIndex],
    ...body,
  };
  writeData(data);
  res.json({ message: "Medical appointment updated successfully" });
});

app.delete("/medicalAppointments/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);
  const appointmentIndex = data.medicalAppointments.findIndex(
    (appointment) => appointment.id === id
  );
  data.medicalAppointments.splice(appointmentIndex, 1);
  writeData(data);
  res.json({ message: "Medical appointment deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
