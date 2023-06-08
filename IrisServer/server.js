const express = require("express")
const app = express()
const cors = require("cors")
const { v4: uuidv4 } = require("uuid")

app.use(express.json())

app.use(
  cors({
    origin: "http://localhost:5173",
  })
)

const { Laguna } = require("./models/index")
const { Aireador } = require("./models/index")

const listAllLagunas = () => {
  const list = Laguna.findAll()
  if (list.length === 0) {
    return false
  }
  return list
}

const listAllAireadores = async () => {
  const list = await Aireador.findAll()
  if (list.length === 0) {
    return false
  }
  return list
}

// AQUI ES PARA ENVIAR LA LISTA CON TODAS LAS LAGUNAS
app.get("/api/v1/getLagunas", async (req, res) => {
  const list = await listAllLagunas()

  !list
    ? res.status(404).json("No hay lagunas disponibles")
    : res.status(200).json(list)
})

// AQUI ES PARA ENVIAR LA LISTA CON TODAS LOS AIREADORES
app.get("/api/v1/getAireadores", async (req, res) => {
  const list = await listAllAireadores()

  !list
    ? res.status(404).json("No hay aireadores disponibles")
    : res.status(200).json(list)
})

// AQUI PARA CREAR AIREADOR
app.post("/api/createAireador", (req, res) => {
  const { idAireador, nombre, idVDF } = req.body

  Aireador.create({
    idAireador,
    nombre,
    idVDF,
  })
    .then(() => {
      res.status(200).json("Aireador creado satisfactoriamente!")
    })
    .catch((e) => {
      res.status(400).json({ error: e })
    })
})

app.post("/api/v1/createLaguna", (req, res) => {
  const { laguna, idOd, idORP } = req.body

  const idLaguna = uuidv4()

  if (laguna === "" || !idOd || !idORP) {
    res.status(400).json("Alguno de los campos estaba vacío")
    console.log("Alguno de los campos estaba vacío")
  } else {
    Laguna.create({
      idLaguna,
      laguna,
      idOd: parseInt(idOd),
      idORP: parseInt(idORP),
    })
      .then(() => {
        res.status(200).json("Laguna creada satisfactoriamente!")
      })
      .catch((e) => {
        res.status(400).json({ error: e })
        console.log(req.body)
      })
  }
})

app.listen(5000, () => console.log("Servidor corriendo en el puerto 5000"))
