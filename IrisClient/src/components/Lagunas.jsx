import Navbar from "./Navbar"
import "./css/main.css"
import Card from "./Card"
import Dialog from "./Dialog"
import AddCard from "./AddCard"
import { useState, useEffect } from "react"

const Lagunas = () => {
  const [lagunasList, setLagunasList] = useState([])

  const [dialogOpen, setDialogOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://localhost:5000/api/v1/getLagunas")
        .then((res) => res.json())
        .then((data) => {
          setLagunasList(data)
        })
        .catch((error) => {
          console.error("Error fetching data:", error)
        })
    }
    fetchData()
  }, [dialogOpen])

  const handleOpenDialog = () => {
    setDialogOpen(true)
  }

  const handleCloseDialog = () => {
    setDialogOpen(false)
  }

  return (
    <>
      <Dialog isOpen={dialogOpen} onClose={handleCloseDialog}></Dialog>
      <Navbar></Navbar>
      <main>
        {lagunasList.map((laguna) => (
          <Card
            key={laguna.idLaguna}
            id={laguna.idLaguna}
            nombre={laguna.laguna}
          ></Card>
        ))}
        <AddCard onClick={handleOpenDialog}></AddCard>
      </main>
    </>
  )
}

export default Lagunas
