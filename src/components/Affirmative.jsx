import React from "react";

function Affirmative() {
  return (
    <div className='h-screen flex flex-col justify-center items-center text-white'>
      <p className='text-5xl md:text-7xl'>Get in Touch</p>
      <p className='font-light w-3/4 md:w-1/2 my-8 text-center'>
        {" "}
        Whether you have a question, want to discuss potential opportunities, or just want to say hello,  I’ll try my best to get back to
        you! 
      </p>{" "}
      <div className="flex">
      <a href="mailto:amulyad99@gmail.com">

      <button
        className='text-pink-300 shadow-sm duration-75 ease-in-out hover:bg-white hover:text-black hover:shadow-pink-300 shadow-blue-300 border-2 rounded p-4 w-fit mr-9'
        name='Say Hello to me'>
        Say Hello to Me
      </button>
      </a>
      <a href="https://drive.google.com/file/d/1U2k6YE7_4hleCp_crq3UTRb9PjHZkpjB/view?usp=sharing" target="_blank" download>
    <button
      className='text-pink-300 shadow-sm duration-75 ease-in-out hover:bg-white hover:text-black hover:shadow-pink-300 shadow-blue-300 border-2 rounded p-4 w-fit'
      name='Download CV'
    >
      Download CV
    </button>
  </a>
    </div>
    </div>
  );
}

export default Affirmative;
