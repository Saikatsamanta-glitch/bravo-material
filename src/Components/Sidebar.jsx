import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

export default function Sidebar({ name, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // options text kr
  const options = ["fql", "ration", "mt"];
  return (
    <>
      <Button variant="info" onClick={handleShow} className="m-2 text-white">
        Sidebar
      </Button>
      <Offcanvas show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Options 🪖</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="flex flex-col">
        {
            options.map(v=> <Link to={v} onClick={handleClose}><div className="p-3 bg-warning mb-2 rounded">
            <h2 className="text-white text-none">{v}</h2>
          </div></Link> )
        }
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
