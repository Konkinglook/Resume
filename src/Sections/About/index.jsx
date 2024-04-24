import {data} from "../../contents/about"

const About = () =>{
    return(
        <div className="space-y-4">
            <div className="text-primaryAccent font-medium">{data.tital}</div>
            <div>{data.desription}</div>
        </div>
    )
}

export default About ;