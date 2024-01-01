import Image from "next/image"
import Link from "next/link"

// Assets
import Logo from "/public//images/logo.svg"
import Arrow from "/public/images/arrow-down.svg"

// Components
import MaxContainer from "./max-width-container"

const navItem = ["Destinations",
    "Hotels", "Flights", "Bookings", "login"]

const Header = () => {
    return (
        <header>
            <MaxContainer className="flex justify-between py-[56px]">
                <div>
                    <Image src={Logo} alt="Logo" width={150} height={150} />
                </div>
                <div className="flex gap-[55px] items-center">
                    <nav className="flex gap-[55px]">
                        {navItem.map((item, i) => <Link key={i} href={""}>{item}</Link>)}
                    </nav>
                    <button className="border rounded-[5px] border-color-secondary py-2 px-5"><span>Sign-up</span></button>
                    <div className="flex gap-2">
                        <p className="uppercase">En</p>
                        <Image src={Arrow} alt="Arrow-down" />
                    </div>
                </div>
            </MaxContainer>
        </header>
    )
}
export default Header