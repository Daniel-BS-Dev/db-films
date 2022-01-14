import { ReactComponent as Git } from "../../assets/git.svg";
import "./styles.css";

const Navbar = () => (
    <header className="container-header">
    <nav className="content-header">
      <h1 className="title-header">DBFilms</h1>
      <a href="https://github.com/daniel-BS-dev" title= "github"  target= "_blank" rel="noreferrer" className="info-header">
        <Git />
        <span>/daniel</span>
      </a>
    </nav>
  </header>
);

export default Navbar;
