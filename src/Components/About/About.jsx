import React from 'react'
import Lottie from 'lottie-react'
import boy from '../../assets/boy.json'










export default function About() {
    return <>
<section id='About' className="min-h-screen scroll-m-30">
  <div className="container mx-auto frist-color">
    <h2 className="text-center text-white font-bold text-4xl md:text-5xl mb-10">
      About Me
    </h2>

    <div className="grid grid-cols-12 gap-10 items-center">
      <div className="col-span-12 md:col-span-6">
        <Lottie animationData={boy} />
      </div>

      <div className="col-span-12 md:col-span-6 flex items-center md:items-end justify-center">
        <p className="font-semibold text-lg md:text-2xl max-w-xl text-center md:text-left">
          I am a <span className="text-3xl text-white">front-end developer</span> with a strong foundation in web development. My expertise include JavaScript, React.js, HTML, CSS And Problem-solving skills, I have a proven ability to deliver scalable web solutions and a passion for designing e-commerce websites, with a strong focus on UI/UX. I am committed to continuously enhancing my skills and staying updated with the latest technologies. My goal is to contribute to company growth and achieve impactful results.
        </p>
      </div>
    </div>
  </div>
</section>



    </>
}
