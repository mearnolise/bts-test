import React, { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { AiOutlineMenu } from "react-icons/ai";
import DropDownSmall from "./DropDownSmall";
import { useNavigate } from "react-router-dom";

function NavbarSmall() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="nav-bg-blues-small">
      <div className="nav-small">
        <AiOutlineMenu
          className="nav-small-icon"
          variant="primary"
          onClick={handleShow}
        />
        <img
          src="https://www.bts.co.th/files/uploads/home-page2/img/BTS_LOGO_RGB_600.png"
          alt="bts-icon"
          className="nav-small-bts-pic"
        />

        <Offcanvas style={{ width: "300px" }} show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>ฟังก์ชัน</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <ul className="nav-small-ul">
              <li onClick={() => navigate("/")}>หน้าแรก</li>
              <li onClick={() => navigate("/system")}>BTS E-Libray</li>
              <li onClick={() => navigate("/information")}>
                ข่าวสารและกิจกรรม
              </li>
              <li>ข้อแนะนำเพื่อความปลอดภัย</li>
              <li>ร่วมงานกับบีทีเอส</li>
              <li>ติดต่อเรา</li>
              <li>
                <DropDownSmall />
              </li>
            </ul>
          </Offcanvas.Body>
        </Offcanvas>
      </div>
    </div>
  );
}

export default NavbarSmall;
