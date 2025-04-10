import AboutServices from "../about/AboutServices"
import ConatctSession from "../contact/ConatctSession"
import ServicesSupport from "./ServicesSupport"
import WhyChoose from "./WhyChoose"

const page = () => {
    return (
        <div className="">
            <ServicesSupport />
            <AboutServices />
            <ConatctSession />
            <WhyChoose />
        </div>
    )
}

export default page