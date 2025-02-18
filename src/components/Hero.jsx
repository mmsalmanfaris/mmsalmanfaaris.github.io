import { FaGithub, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"
import Profile from "../assets/profile.png"
import { HERO_CONTENT } from "../constants"


const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <img src={Profile} alt="Ravi Kumar" className="border border-stone-900 rounded-3xl" />
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mt-10">
                        <h2 className="pb-2 text-4xl tracking-tighter lg:text-7xl">MM Salman Faris</h2>
                        <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tigh text-transparent">DevOps Engineer</span>
                        <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">{HERO_CONTENT}</p>

                        <div className="wrapper">
                            <div className="button">
                                <div className="icon">
                                    <a href="https://www.linkedin.com/in/mmsalmanfaris/" target="_blank"><FaLinkedin /></a>
                                </div>
                                <span>Linkedin</span>
                            </div>
                            <div className="button">
                                <div className="icon">
                                    <a href="https://github.com/mmsalmanfaris" target="_blank"><FaGithub /></a>
                                </div>
                                <span>Github</span>
                            </div>
                            <div className="button">
                                <div className="icon">
                                    <a href="https://www.instagram.com/mmsalmanfaris/" target="_blank"><FaInstagram /></a>
                                </div>
                                <span>Instagram</span>
                            </div>

                            <div className="button">
                                <div className="icon">
                                    <a href="https://youtube.com/@mmsalmanfaris" target="_blank"><FaYoutube /></a>
                                </div>
                                <span>YouTube</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero