import DropDown from "./DropDown";
import { useNavigate } from "react-router-dom";

function NavbarBig() {
  const navigate = useNavigate();

  return (
    <>
      <div className="nav-bg-blue">
        <div className="navbar-top-container">
          <ul className="navbar-top-left ">
            <li onClick={() => navigate("/")}>
              หน้าแรก
              <div className="white-line" />
            </li>
            <li onClick={() => navigate("/system")}>
              BTS E-Libray
              <div className="white-line" />
            </li>
            <li onClick={() => navigate("/information")}>
              ข่าวสารและกิจกรรม
              <div className="white-line" />
            </li>
            <li>ข้อแนะนำเพื่อความปลอดภัย</li>
          </ul>

          <ul className="navbar-top-right ">
            <li>
              ร่วมงานกับบีทีเอส
              <div className="white-line" />
            </li>
            <li>
              ติดต่อเรา
              <div className="white-line" />
            </li>
            <li>
              <DropDown />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavbarBig;
