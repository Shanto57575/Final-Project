import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Navbar from "../Shared/Navbar/Navbar";

const Main = () => {
	const location = useLocation();
	console.log(location);
	const isLogin = location.pathname.includes("login");
	return (
		<div>
			{isLogin || <Navbar></Navbar>}
			<Outlet></Outlet>
			{isLogin || <Footer></Footer>}
		</div>
	);
};

export default Main;
