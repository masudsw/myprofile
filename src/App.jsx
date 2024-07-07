
import './App.css'
import myImage from '../src/assets/mustafa.png'
import myCV from '../src/assets/cv_mustafa.pdf'
import communication_skills from '../src/assets/communication_skills.jpg'
import english_profeciency from '../src/assets/english_profeciency.png'
import problem_solving from '../src/assets/problem_solving.jpg'
import team_work from '../src/assets/team_work.webp'
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import Typewriter from "typewriter-effect";
import { FaHtml5 } from 'react-icons/fa'
import { IoLogoCss3 } from 'react-icons/io'
import { RiTailwindCssFill } from 'react-icons/ri'
import { GrReactjs } from 'react-icons/gr'
import { SiExpress, SiMongodb } from 'react-icons/si'
import { useRef, useState } from 'react'

function App() {
  const form = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ds2uwsj',
        'template_pu5jbcc',

        form.current, {
        publicKey: "jyyY1vkDZVLT9wM7z",
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.success('Message sent successfully!')
          form.current.reset();  // Reset the form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <>
      <Toaster />
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">GOLAM<span className='text-orange-800 uppercase'> Mustafa</span></span>
          </a>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="#myskills" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">My Skills</a>
              </li>
              <li>
                <a href="#myworks" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Work</a>
              </li>
              <li>
                <a href="#education" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">My Education</a>
              </li>
              <li>
                <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* about me */}
      <section id='about'>
        <div className='lg:flex md:flex  mx-auto py-12'>
          <div className='lg:w-1/3 pb-8 mx-auto'>
            <img src={myImage} alt="" />
            <div className='text-3xl'>
              <h1 className='text-orange-800 font-extrabold'>I'm a</h1>
              <span className='text-orange-800 font-bold'>
                <Typewriter
                  options={{
                    strings: ['Web Developer', 'React Develper', 'Computer Science Educator'],
                    autoStart: true,
                    loop: true,
                  }}
                />

              </span>


            </div>

          </div>
          <div className='text-2xl pl-8  font-bold lg:w-2/3'>

            {/* <p className='text-left'>I'm a</p>
            <p className='text-left text-orange-800'>Web developer</p> */}
            <div className='space-y-3'>
              <p className=' text-xl font-thin text-left'>My name is <span className='font-bold'>Golam Mustafa. </span>
                I have both bachelor and masters degree in Computer Science.
                I have worked as software develpment for 2 years
                and computer science educator for more then 6 years.
              </p>
              <p className='text-xl font-thin text-left'>
                Currently, I am expanding my skill set by working as a communicative English teacher,
                which has further enhanced my communication abilities and adaptability.
                Alongside this, I am immersed in a comprehensive web development course,
                gaining hands-on experience with technologies such as JavaScript, HTML, CSS,
                TailwindCSS, Node.js, Express.js, and MongoDB.
              </p>
              <p className='font-thin text-xl  text-left'>
                My goal is to transition into a front-end React developer role,
                where I can combine my passion for web development with my extensive
                teaching and problem-solving skills.
                I am particularly excited about creating dynamic and user-friendly
                web applications that can make a meaningful impact.</p>

            </div>

            <p className='text-left py-4'>
              <a href={myCV} download="Golam_Mustafa_CV" target='_blank'>
                <button class="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold py-2 px-4 rounded ">
                  Download CV
                </button>

              </a>

            </p>
          </div>

        </div>
      </section>
      {/* skill set */}
      <section id='myskills'>

        <div class="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-700 text-4xl mx-auto uppercase font-bold my-4">My Skills</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div>
          <h1 className='text-center font-bold uppercase my-8'>Hard Skills</h1>
          <div className='flex'>

            <div className='flex text-3xl lg:text-6xl md:text-5xl space-x-2 lg:space-x-5 md:space-x-4 text-yellow-700 lg:pl-6 mx-auto'>

              <FaHtml5 />
              <IoLogoCss3 />
              <RiTailwindCssFill />
              <GrReactjs />
              <SiExpress />
              <SiMongodb />

            </div>
          </div>
          {/* ------------------------- */}
          <h1 className='text-center font-bold uppercase my-8 pt-8'>Soft Skills</h1>
          <div className='flex my-8 py-8'>

            <div className='flex text-6xl space-x-5 text-yellow-700 pl-6 mx-auto'>
              <img className='w-20 lg:w-24 h-20 lg:h-24' src={communication_skills} alt="" />
              <img className='w-20 lg:w-24 h-20 lg:h-24' src={problem_solving} alt="" />
              <img className='w-20 lg:w-24 h-20 lg:h-24' src={team_work} alt="" />
              <img className='w-20 lg:w-24 h-20 lg:h-24' src={english_profeciency} alt="" />


            </div>

          </div>
          {/* ------------------------------- */}
        </div>
      </section>
      <section id='myworks'>
        {/* -------------------- */}
        <div class="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-700 text-4xl mx-auto uppercase font-bold my-4">My Works</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        {/* -------------------------- */}
        <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4'>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-48 overflow-hidden'>
              <img className="w-full h-full object-cover" src="https://i.ibb.co/Wk2mcDK/event-plan.jpg" alt="Event Management System" />
            </div>
            <div class="p-5 space-y-9">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Event Management System</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <ul className='list-disc text-left'>
                  <li>Event management provider can provide detail information.</li>
                  <li>Service taker can search event management provider and book an event.</li>
                  <li>Excelent user interface.</li>
                </ul>
              </p>
              <h1 className='text-left font-bold'>Technologies used:</h1>
              <p className='my-4'>*Reactjs, *mongodb, *expressjs, *tailwindcss</p>
              <div className='flex space-x-6 pb-4'>
                <h1 className='text-left font-bold'>Github Repository </h1>
                <a className='text-blue-500' href='https://github.com/Porgramming-Hero-web-course/b9a11-client-side-masudsw'>Client</a>
                <a className='text-blue-500' href='https://github.com/Porgramming-Hero-web-course/b9a11-server-side-masudsw'>Server</a>
              </div>
              <a href="https://event-managment-service.web.app" target='_blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Explore more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-48 overflow-hidden'>
              <img class="rounded-t-lg w-full h-full object-cover" src="https://i.ibb.co/yBMQnv5/Pyramids-of-Giza-Egypt.webp" alt="" />
            </div>
            <div class="p-5 space-y-10">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Explore Hub- A tourism</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <ul className='list-disc text-left'>
                  <li>Tourist service provider can provide information about torist spots for the custor.</li>
                  <li>Customer can view, search and book the tourist spots.</li>
                </ul>

              </p>
              <h1 className='text-left font-bold'>Technologies used:</h1>
              <p className='my-4'>*Reactjs, *mongodb, *expressjs, *tailwindcss</p>
              <div className='flex space-x-6 pb-4'>
                <h1 className='text-left font-bold'>Github Repository </h1>
                <a className='text-blue-500' href='https://github.com/programming-hero-web-course-4/B9A10-client-side-masudsw'>Client</a>
                <a className='text-blue-500' href='https://github.com/programming-hero-web-course-4/B9A10-server-side-masudsw'>Server</a>
              </div>
              <a href="https://explore-hub-80823.web.app/" target='_blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Explore more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className='h-48 overflow-hidden'>
              <img class="rounded-t-lg w-full h-full object-cover" src="https://i.ibb.co/bN9XG2H/micro-task.png" alt="" />
            </div>
            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Quick Coin--A micro-task outsourcing platform</h5>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                <ul className='list-disc text-left'>
                  <li>Job Creator: Post micro jobs and assign coin rewards. Purchase coins via Stripe and review/accept workers' submissions.</li>
                  <li>Worker: Browse and complete jobs, submit work, and communicate with job creators. Earn coins upon job approval.</li>
                  <li>Admin: Manage users, monitor transactions, and ensure platform compliance and smooth operation.</li>
                </ul>



              </p>
              <h1 className='text-left font-bold'>Technologies used:</h1>
              <p className='my-4'>*Reactjs, *mongodb, *expressjs, *tailwindcss</p>
              <div className='flex space-x-6 pb-4'>
                <h1 className='text-left font-bold'>Github Repository </h1>
                <a className='text-blue-500' href='https://github.com/programming-hero-web-course1/b9a12-client-side-masudsw'>Client</a>
                <a className='text-blue-500' href='https://github.com/programming-hero-web-course1/b9a12-server-side-masudsw'>Server</a>
              </div>
              <a href="https://quickcoin-2d7f6.web.app/" target='_blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Explore more
                <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id='education'>
        <div class="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-700 text-4xl mx-auto uppercase font-bold my-4">My Education</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div>
          <h1 className='text-2xl font-bold text-orange-800'>Master in Computer Science from Dalarna University, Sweden</h1>
          <div className='flex justify-center items-center'>
            <img src="https://i.ibb.co/ssKRTQD/dalarna-university.png" alt="" />
          </div>
        </div>
      </section>
      <section id='contact'>
        <div class="relative flex py-5 items-center">
          <div className="flex-grow border-t border-gray-400"></div>
          <span className="flex-shrink mx-4 text-gray-700 text-4xl mx-auto uppercase font-bold my-4">Contact with me</span>
          <div className="flex-grow border-t border-gray-400"></div>
        </div>
        <div className='lg:flex justify-between my-8'>

          <div className='w-1/2'>

            <h1 className='text-2xl my-5'>Please send me a message:</h1>
            <form ref={form} id="contactForm" onSubmit={sendEmail}>
              <div class="mb-6">
                <div class="mx-0 mb-1 sm:mb-4">
                  <div class="mx-0 mb-1 sm:mb-4">
                    <label for="name" class="pb-1 text-xs uppercase tracking-wider"></label>
                    <input type="text" id="name" autocomplete="given-name"
                      placeholder="Your name"
                      class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      name="user_name" />

                  </div>
                  <div class="mx-0 mb-1 sm:mb-4">
                    <label for="email" class="pb-1 text-xs uppercase tracking-wider"></label>
                    <input type="email" id="email" autocomplete="email"
                      placeholder="Your email address"
                      class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0"
                      name="user_email" />
                  </div>
                </div>
                <div class="mx-0 mb-1 sm:mb-4">
                  <label for="textarea" class="pb-1 text-xs uppercase tracking-wider"></label>
                  <textarea id="message" name="message" cols="30" rows="5"
                    placeholder="Write your message..."
                    class="mb-2 w-full rounded-md border border-gray-400 py-2 pl-2 pr-4 shadow-md dark:text-gray-300 sm:mb-0">
                  </textarea>
                </div>
              </div>
              <div class="text-center">
                <button type="submit" class="w-full bg-blue-800 text-white px-6 py-3 font-xl rounded-md sm:mb-0">Send Message</button>
              </div>
            </form>
          </div>
          <div className='w-1/2'>

            <h1>My phone number:<span className='text-orange-900 font-extrabold tracking-wider '>+880 1856316525</span> </h1>
            <h1>My email address:<span className='text-orange-900 font-extrabold tracking-widest'> GolamMustafa@gmail.com</span></h1>
            <h1>My address</h1>
            <address className='tracking-widest text-orange-800'>
              Daudkandi,
              Cumilla,
              Bangladesh.
            </address>

          </div>
        </div>

      </section>
      <section>
        <footer class="bg-white dark:bg-gray-900">
          <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">

            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
              <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" class="hover:underline">Golam Mustafa™</a>. All Rights Reserved.
              </span>
              <div class="flex mt-4 sm:justify-center sm:mt-0">
                <a href="https://web.facebook.com/mustafa.golam.90" target='_blank' class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Facebook page</span>
                </a>

                <a href="https://x.com/masudsw" target='_blank' class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Twitter page</span>
                </a>
                <a href="https://github.com/masudsw" target='_blank' class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">GitHub account</span>
                </a>
                <a href="https://www.linkedin.com/in/golam-mustafa-masud" target='_blank' class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M 6 3 C 4.3489059 3 3 4.3489059 3 6 L 3 18 C 3 19.651094 4.3489059 21 6 21 L 18 21 C 19.651094 21 21 19.651094 21 18 L 21 6 C 21 4.3489059 19.651094 3 18 3 L 6 3 z M 6 4 L 18 4 C 19.110906 4 20 4.8890941 20 6 L 20 18 C 20 19.110906 19.110906 20 18 20 L 6 20 C 4.8890941 20 4 19.110906 4 18 L 4 6 C 4 4.8890941 4.8890941 4 6 4 z M 8.1855469 6.7851562 C 7.4445469 6.7851563 7 7.2293594 7 7.8183594 C 7 8.4113594 7.444375 8.8574219 8.109375 8.8574219 C 8.850375 8.8574219 9.2910156 8.4113594 9.2910156 7.8183594 C 9.2910156 7.2303594 8.8505469 6.7851562 8.1855469 6.7851562 z M 7.0625 9.9628906 L 7.0625 16 L 9.2363281 16 L 9.2363281 9.9628906 L 7.0625 9.9628906 z M 11.033203 9.9628906 L 11.033203 16 L 13.207031 16 L 13.207031 12.697266 C 13.207031 11.718266 13.908141 11.574219 14.119141 11.574219 C 14.330141 11.574219 14.892578 11.785266 14.892578 12.697266 L 14.892578 16 L 17 16 L 17 12.697266 C 17 10.806266 16.154516 9.9628906 15.103516 9.9628906 C 14.052516 9.9628906 13.490031 10.312641 13.207031 10.806641 L 13.207031 9.9628906 L 11.033203 9.9628906 z" clip-rule="evenodd" />
                  </svg>
                  <span class="sr-only">Linkedin account</span>
                </a>
              </div>
            </div>
          </div>
        </footer>

      </section>
    </>
  )
}

export default App
