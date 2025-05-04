// import AboutServices from "../about/AboutServices"
import ConatctSession from "../contact/ConatctSession"
import ServicesSupport from "./ServicesSupport"
import WhyChoose from "./WhyChoose"
import PrivateService from './privateServices/PrivateService'

const page = () => {
    return (
        <div className="">
            <PrivateService />
            <WhyChoose />
            {/* <AboutServices /> */}
            <ConatctSession />
            <ServicesSupport />
        </div>
    )
}

export default page