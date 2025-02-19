import aboutImage from "../assets/about.webp"
const About = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2 mt-20" id="about">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mb-12 mx-4">About</h2>
        <div className="flex flex-col items-center lg:space-x-8 mx-4 mb-20">
            <div className="mb-8 lg:mb-0">
                <img src={aboutImage} alt="About Image" className="w-full h-auto"/>
            </div>
            <p className="text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quis atque cupiditate sunt earum consequuntur voluptate quas, nemo dicta obcaecati, ab tempore,Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quis atque cupiditate sunt earum consequuntur voluptate quas, nemo dicta obcaecati, ab tempore, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis quis atque cupiditate sunt earum consequuntur voluptate quas, nemo dicta obcaecati, ab tempore.</p>
        </div>
    </section>
  )
}

export default About