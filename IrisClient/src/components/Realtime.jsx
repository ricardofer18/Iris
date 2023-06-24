import { useEffect, useState } from "react";
import { ref, onValue, off } from "firebase/database";
import database from "../firebase.js";

const Realtime = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const dataRef = ref(database, "Vertientes/Vertiente1");

    const handleDataChange = (snapshot) => {
      const newData = snapshot.val();
      setData(newData);
      console.log(newData)
    };

    onValue(dataRef, handleDataChange);

    return () => {
      off(dataRef, "value", handleDataChange);
    };
  }, []);

  return (
    <div>
      {data &&
        Object.keys(data).map((key) => (
          <div key={key}>
            <span>{key}: </span>
            <span>{JSON.stringify(data[key])}</span>
          </div>
        ))}
    </div>
  );
};

export default Realtime;

