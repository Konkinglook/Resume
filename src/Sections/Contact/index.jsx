import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {
    return (
        <div className="flex gap-4 text-2xl items-end pb-5" >
            <FontAwesomeIcon className="hover:scale-125 hover:text-primaryTitle transition-all" icon={faGithub} />
            <FontAwesomeIcon className="hover:scale-125 hover:text-primaryTitle transition-all" icon={faLinkedin} />
            <FontAwesomeIcon className="hover:scale-125 hover:text-primaryTitle transition-all" icon={faFacebook} />
        </div >
    )
}

export default Contact;