import { useEffect, useState } from "react"
import { ref, onValue, off } from "firebase/database"
import database from "../firebase.js"
import Card from "./Card"

const Realtime = () => {
  const [humedad, setHumedad] = useState(null)
  const [temperatura, setTemperatura] = useState(null)

  useEffect(() => {
    const dataRef = ref(database, "/Datos")

    const handleDataChange = (snapshot) => {
      const newData = snapshot.val()
      const { humedad, temperatura } = newData
      setHumedad(humedad)
      setTemperatura(temperatura)
      console.log(newData)
    }

    onValue(dataRef, handleDataChange)

    return () => {
      off(dataRef, "value", handleDataChange)
    }
  }, [])

  return (
    <>
      <Card nombre={temperatura}></Card>
      <Card nombre={temperatura}></Card>
      <Card nombre={temperatura}></Card>
      <Card nombre={temperatura}></Card>
      <Card nombre={temperatura}></Card>
    </>
  )
}

export default Realtime
