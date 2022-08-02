import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function PageName({ text1 }) {
  const navigate = useNavigate();

  return (
    <div className="page-name-div">
      <div className="container">
        <FaHome onClick={() => navigate("/")} />
        <p className="page-name-text"> / {text1}</p>
      </div>
    </div>
  );
}

export default PageName;
