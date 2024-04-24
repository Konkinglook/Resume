import { faGithub, faMedium, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Experience = () => {
    const [isMouseEnter,setIsMouseEnter] = useState(false)

    return (
    <div>
        <div className="text-primaryAccent font-medium" >Experience</div>
        <div 
            className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter['exp1']? "bg-primaryBase":""} `}
            onMouseEnter={()=> setIsMouseEnter({'exp1':true})}
            onMouseLeave={()=> setIsMouseEnter({'exp1':false})}
        >
            <div>
                <div><span className={`text-sm ${isMouseEnter['exp1']? "text-primaryAccent":""}`}>2022-2023</span></div>
                <div>
                    <img className="w-5/6" src="https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kZXxlbnwwfHwwfHx8MA%3D%3D"/>
                </div>
            </div>
            <div className="grid gap-y-4">
                <div className={`text-primaryAccent ${isMouseEnter['exp1']? "text-primaryTitle":""}`}>
                    Title
                    <FontAwesomeIcon className={`text-xs -rotate-45 ml-1 duration-300 ease-out ${isMouseEnter['exp1'] ? "translate-x-1 -translate-y-1" :""}`} icon={faArrowRight}/>
                </div>
                <div className="flex gap-4 text-xl">
                    <a className="hover:scale-125" href="https://github.com/Konkinglook" target="_blank"><FontAwesomeIcon className="hover:text-black"icon={faGithub}/></a>
                    <a className="hover:scale-125" href="https://www.youtube.com/" target="_blank"><FontAwesomeIcon className="hover:text-red-600"icon={faYoutube}/></a>
                </div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fugiat neque beatae ab consequatur ut et cupiditate autem pariatur nam.</div>
                <div>
                    <div className="flex gap-4">
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter['exp2']? "text-black" : ""}`}>React</div>
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter['exp2']? "text-black" : ""}`}>Tailwind</div>
                    </div>
                </div>  
            </div>
        </div>

        <div className="text-primaryAccent font-medium" >Experience 2</div>
        <div 
            className={`grid grid-cols-[25%_75%] rounded-md px-2 py-6 transition-all ${isMouseEnter['exp2']? "bg-primaryBase":""} `}
            onMouseEnter={()=> setIsMouseEnter({'exp2':true})}
            onMouseLeave={()=> setIsMouseEnter({'exp2':false})}
        >
            <div>
                <div><span className={`text-sm ${isMouseEnter['exp2']? "text-primaryAccent":""}`}>2022-2023</span></div>
                <div>
                    <img className="w-5/6" src="https://images.unsplash.com/photo-1566837945700-30057527ade0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvZGV8ZW58MHx8MHx8fDA%3D"/>
                </div>
            </div>
            <div className="grid gap-y-4">
                <div className={`text-primaryAccent ${isMouseEnter['exp2']? "text-primaryTitle":""}`}>
                    Title
                    <FontAwesomeIcon className={`text-xs -rotate-45 ml-1 duration-300 ease-out ${isMouseEnter['exp2'] ? "translate-x-1 -translate-y-1" :""}`} icon={faArrowRight}/>
                </div>
                <div className="flex gap-4 text-xl">
                    <a className="hover:scale-125" href="https://github.com/Konkinglook" target="_blank"><FontAwesomeIcon className="hover:text-black"icon={faGithub}/></a>
                    <a className="hover:scale-125" href="https://www.youtube.com/" target="_blank"><FontAwesomeIcon className="hover:text-red-600"icon={faYoutube}/></a>
                </div>
                <div>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil fugiat neque beatae ab consequatur ut et cupiditate autem pariatur nam.</div>
                <div>
                    <div className="flex gap-4">
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter['exp2']? "text-black" : ""}`}>React</div>
                        <div className={`bg-primarySubcontent px-2 py-1 rounded-md ${isMouseEnter['exp2']? "text-black" : ""}`}>Tailwind</div>
                    </div>
                </div>    
            </div>
        </div>
    </div>
    )
}

export default Experience;