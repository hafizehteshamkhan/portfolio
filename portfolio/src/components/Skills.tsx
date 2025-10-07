import React from 'react'
import reactLogo from "../assets/images/React-icon.svg.png"
import tailwendLogo from "../assets/images/tailwen-logo-image.png"
import developerImage from '../assets/images/developer-image-two.png'


// interface Data{
//     image = Image,
//     title: 'string'
// }

interface skillBox {
    key:number,
    id:number,
    title:string,
    image:string
}
interface skillsData {
    // key:number,
    id:number,
    title:string,
    image:string
}
interface Skills {
    // key:number,
    id:number,
    title:string,
    image:string
}

const skillsData = [
    { id: 1, image: reactLogo, title: 'Vue js', description: "Skills Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates" },
    { id: 2, image: tailwendLogo, title: 'Vue js', description: "Skills Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates" },
    { id: 3, image: reactLogo, title: 'Vue js', description: "Skills Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates" },
    { id: 4, image: tailwendLogo, title: 'Vue js', description: "Skills Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis voluptates" },
]

const SkillBox = ({ image, title, description }) => {
    return(
    <article className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-lg text-center hover:bg-purple-800 transition-all duration-300">
        <figure className="flex justify-center mb-4">
            <img src={image} alt={title} className='w-16 h-16 sm:w-20 sm:h-20' />
        </figure>
        <header>
            <h3 className='text-lg sm:text-xl font-semibold mb-2'>{title}</h3>
        </header>
        <p className='text-gray-400 text:sm sm:text-base'>{description}</p>
    </article>
    )
}

const Skills = () => {
    return (
        <>
            <section className='relative min-h-screen overflow-hidden flex flex-col items-center justify-center text-white px-4 py-10 bg-black'>
                <div className='absolute z-0 w-72 h-36 sm:w-96 sm:h-44 bg-[#cd3cf5] rounded-full blur-3xl opacity-50 top-10 sm:top-28 left-1/2 transform -translate-x-1/2'></div>
                <img src={developerImage} alt="image of developer" className='absolute z-10 left-2 top-2 sm:left-16 sm:top-32 transform -rotate-12 w-24 h-auto sm:w-32 opacity-70' />
                <div dat-aos='fade-up' data-aos-delay="300" className='relative z-20 text-center space-y-6 sm:space-y-10'>
                    <header>
                        <h1 className='text-3xl sm:text-4xl font-bold'>
                            My Expertise <br /> and <span className='text-purple-400'>Skills</span>
                        </h1>
                        <p className='text-gray-400 mt-2 sm:mt-4 text-sm sm:text-base'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi culpa corporis repellendus minima amet minus praesentium sed suscipit! Quia placeat magnam quae sint dicta deleniti eligendi optio perspiciatis repellendus sit.
                        </p>
                    </header>
                    <section data-aos="fade-up" data-aos-delay='500' className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-4'>
                        {skillsData.map((skill) => (
                            <SkillBox
                                key={skill.id}
                                image={skill.image}
                                description={skill.description}
                                title={skill.title} />
                        ))}
                    </section>
                </div>

                <img src={developerImage}
                    alt="image of developer"
                    className='absolute z-10 right-2 top-2 sm:right-16 sm:top-32 transform rotate-12 w-24 h-auto sm:w-32 opacity-70' />
            </section>
        </>
    )
}

export default Skills