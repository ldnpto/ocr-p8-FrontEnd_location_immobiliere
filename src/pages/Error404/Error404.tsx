
import "./Error404.scss";
import { Link } from "react-router-dom";

export default function Error404 () {
  return (
    <div className="error">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/">Retour sur la page d'accueil</Link>
      <hr/>  
    </div>
  );
};
