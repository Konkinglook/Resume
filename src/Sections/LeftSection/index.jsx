import Header from "../Header"
import Navbar from "../Navber"
import Contact from "../Contact"

const LeftSection = () => {
    return (
        <div className="px-5">
            <div className="sticky top-14 lg:h-[90vh] grid gap-y-5 lg:grid-rows-[35%_45%_20%]">
                <Header />
                <Navbar />
                <Contact />
            </div>
        </div>
    )
}

export default LeftSection;