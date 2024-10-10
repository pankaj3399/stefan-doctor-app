import Button from "../../atoms/button";
import Logo from "../../../assets/logo.svg";
import { useNavigate } from "react-router-dom";


function TopBar() {

    const navigate = useNavigate();


    return (
        <div className="flex items-center justify-between | bg-[#f7f7f8] | border-b-[1px] border-background-lightest | py-[18px] px-[78px]">
            <div onClick={() => navigate("/")} className="cursor-pointer">
                <img src={Logo} className="object-cover" alt="" />
            </div>
            <div onClick={() => navigate("/roles")} >
                <Button>Sign up</Button>
            </div>

        </div>
    )
}

export default TopBar