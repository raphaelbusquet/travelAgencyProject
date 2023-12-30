import Image from "next/image"
import Logo from "/public/Logo.svg"

const Header = () => {
    return (
        <header>
            <div className="w-maxW">
                <Image src={Logo} alt="Logo" width={150} height={150} />
            </div>
        </header>
    )
}
export default Header