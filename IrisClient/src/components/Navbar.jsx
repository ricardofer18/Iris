import logo from '../assets/images/logo_agrosuper.png';

const Navbar = () => {
    return (
      <nav className="navbar">
        <a href="/">
            <img className="logo" src={logo} draggable="false"/>
        </a>
        {/* <h1 className="center">Home</h1> */}
        <a className="right" href="/config">
            <img className="icon" src="https://img.icons8.com/pulsar-line/256/settings.png" draggable="false"/>
        </a>
        <a className="right" href="/user">
            <img className="icon" src="https://img.icons8.com/pulsar-line/256/name.png" draggable="false"/>
        </a>
      </nav>
    )
  }
  
  export default Navbar