import { Formik, Form, Field, ErrorMessage } from "formik"

const Dialog = ({ isOpen, onClose }) => {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    fetch("http://localhost:5000/api/v1/createLaguna", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta del servidor:", data)
      })
      .catch((error) => {
        console.error("Error al enviar los datos:", error)
      })
      .finally(() => {
        setSubmitting(false)
        resetForm()
      })
  }

  return (
    <dialog open={isOpen}>
      <Formik
        initialValues={{
          laguna: "",
          idOd: "",
          idORP: "",
        }}
        validate={(values) => {
          const errors = {}
          if (!values.laguna) {
            errors.laguna = "Campo requerido"
          }
          if (!values.idOd) {
            errors.idOd = "Campo requerido"
          }
          if (!values.idORP) {
            errors.idORP = "Campo requerido"
          }
          return errors
        }}
        onSubmit={handleSubmit}
      >
        <Form className='dialog-form'>
          <div className='cerrar'>
            <button className='no-bg' onClick={onClose}>
              <img
                src='https://img.icons8.com/?size=512&id=bq2p5JPmCrjK&format=png'
                width='40px'
                draggable='false'
              />
            </button>
          </div>

          <h1>Crear Laguna</h1>
          <p>Rellena todos los campos</p>
          <div>
            <Field type='text' name='laguna' placeholder='Nombre Laguna' />
            <ErrorMessage name='laguna' component='div' className='error' />
          </div>
          <div>
            <Field type='number' name='idOd' placeholder='ID Od' />
            <ErrorMessage name='idOd' component='div' className='error' />
          </div>
          <div>
            <Field type='number' name='idORP' placeholder='ID ORD' />
            <ErrorMessage name='idORP' component='div' className='error' />
          </div>
          <button type='button'>Enviar</button>
        </Form>
      </Formik>
    </dialog>
  )
}

export default Dialog
