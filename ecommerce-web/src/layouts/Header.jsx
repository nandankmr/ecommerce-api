import { CardImg, Navbar } from 'reactstrap';
import Logo from "../../public/ecomm.svg"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar expand="lg" className="topbar bg-white bottom">
                <div className="d-flex gap-2">
                    <div>
                        <Link to="/">
                            <CardImg src={Logo} alt="logo" width={40} height={40} />
                        </Link>
                    </div>
                    <div className="d-flex align-items-center">
                        <h4 className="flex-grow-1">E-Commerce</h4>
                    </div>
                </div>

            </Navbar>
        </>
    );
};

export default Header;
