import Link from "next/link"
import Image from "next/image"
import MaxContainer from "./max-width-container"

//Assets
import PlayButton from "/public/images/play-button.svg"
import Traveller from "/public/images/Traveller.png"

export default function SectionHero(){
    return(
        <section>
            <MaxContainer>
                <div>
                    <h3 className="uppercase">Best Destinations around the world</h3>
                    <h1>Travel, enjoy and live a new full life</h1>
                    <p>uilt Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
                    <div>
                        <Link href="#">Find out more</Link>
                        <button>
                            <Image src={PlayButton} alt="Play Demo" />
                            <span>Play Demo</span>
                        </button>
                    </div>
                </div>
                <div>
                    <Image src={Traveller} alt="Traveller" />
                </div>
            </MaxContainer>
        </section>
    )
} 