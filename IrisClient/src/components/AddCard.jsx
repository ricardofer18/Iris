const AddCard = ({ onClick }) => {
    return (
        <button onClick={onClick} className="no-bg">
            <div className="card-add">
            <img src="https://img.icons8.com/pulsar-line/256/add.png" draggable="false"/>
            </div>
        </button>
    )
  }
  
  export default AddCard