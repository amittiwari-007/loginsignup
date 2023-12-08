import DashBoard from "./DashBoard.jsx";
import { Container } from "react-bootstrap";


const PreDashBoard=()=>{
    return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight:"100vh" }}>
        <div className="w-100" style={{maxWidth:"400px"}}>
            <DashBoard/>
        </div>
    </Container>
    )
}

export default PreDashBoard;