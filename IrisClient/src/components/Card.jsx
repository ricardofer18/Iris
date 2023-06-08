const Card = ({ id, nombre }) => {
    return (
        <a href="#">
            <div className="card">
                <h1 className="title">{nombre}</h1>
                <p>{id}</p>
                <p>{nombre}</p>
            </div>
        </a>
    )
  }
  
  export default Card