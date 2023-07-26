import type { NextPage } from 'next'
import Image from 'next/image'
import MainLogo from '../components/svg/MainLogo'
import { AiFillLinkedin, AiFillFacebook, AiFillYoutube } from 'react-icons/ai'
import Link from 'next/link'
import Head from 'next/head'
import favIcon from '../public/favicon.png'

const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title>Zkript - Software Development Company based in the Philippines</title>
      <link rel="icon" type="image/x-icon" href="https://zkript.dev/favicon.png"/>
      <meta
        name="description"
        content="Zkript, legally known as ZKRIPT SOLUTIONS OPC, is a software development company based in the Philippines. Start building amazing and reliable Software with us. Website, web application, mobile application, desktop application, you name it, we can build it for you."
      />
      <meta property="og:title" content="Zkript - Software Development Company based in the Philippines" />
      <meta
        property="og:description"
        content="Zkript, legally known as ZKRIPT SOLUTIONS OPC, is a software development company based in the Philippines. Start building amazing and reliable Software with us. Website, web application, mobile application, desktop application, you name it, we can build it for you."
      />
      <meta
        property="og:image"
        content="https://zkript.dev/og-img-zkript-software-development.png"
      />
    </Head>
    <div>
      <div className="container mx-auto px-6 lg:px-40 py-24 md:py-48" id="home-section">
        <div className="flex flex-col lg:flex-row md:items-center gap-9">
          <div className="flex-1 flex flex-col gap-3">
            <h1 className="font-bold text-4xl md:text-7xl leading-10 md:leading-tight">
              Start building amazing and reliable Software with us.
            </h1>
            <h2 className="text-lg md:text-2xl font-bold">Website, web application, mobile application, desktop application, <span className="text-[#b3b3b3]">you name it, we can build it for you.</span></h2>
            <h4 className="text-[#3c5ccf] font-medium text-sm md:text-lg mt-2 md:mt-7">*Software development is what we eat every breakfast</h4>
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <Image
              src="https://zkript.dev/software-development-zkript.jpg"
              alt="Picture of the author"
              width={600}
              height={901}
              layout="responsive"
            />
          </div>
          <div className="w-full lg:hidden">
            <Image
              src="https://zkript.dev/software-engineer-zkript.jpg"
              alt="Picture of the author"
              width={2000}
              height={1333}
              layout="responsive"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#111111]" id="projects-section">
        <div className="container mx-auto px-6 lg:px-40 py-20 md:py-40">
          <h4 className="text-xl text-[#b3b3b3] font-bold text-center">Featured Projects</h4>
          <h2 className="text-4xl hidden md:block font-bold text-center mt-5">We work closely to our clients to provide<br />the best possible results</h2>
          <h2 className="text-2xl block md:hidden font-bold text-center mt-5">We work closely to our clients to provide the best possible results</h2>
            <div id='category'>
            <div id='website'>
            <div className='mt-20'>
            <h4 className="text-xl text-[#b3b3b3] font-bold">Websites</h4>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-4">
            <div className="flex-1">
            <a href="https://filinvestland.stagingurls.com/">
              <div className='relative'>
             <img width="100%" height="330px" src="zkript-img/filinvest.png"  alt='img of FillInvestland' className='cursor-pointer' />
             <div className='flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-500'>
              <img src="favicon.png" width="7%" height="7%" alt=""  className='rounded-full'/>
             <h4 className="ml-3 shadow">Filinvest Land, Incorporated</h4>
             </div>
             </div>
             </a>
            </div>
            <div className="flex-1">
            <a href="https://www.couriersandfreight.com.au/">
            <div className='relative'>
             <img width="100%" height="330" src="zkript-img/courier.png"  alt='img of FillInvestland' className='cursor-pointer' />
             <div className='flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-500'>
              <img src="favicon.png" width="7%" height="7%" alt=""  className='rounded-full'/>
             <h4 className="ml-3 shadow">Couriers & Freight</h4>
             </div>
             </div>             
             </a>           
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-4">
            <div className="flex-1 w-full">
            <a href="https://showcase.yahshuapayroll.com/">
            <div className='relative'>
             <img width="100%" height="330" src="zkript-img/yashua_payroll.png"  alt='img of FillInvestland' className='cursor-pointer' />
             <div className='flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-500'>
              <img src="favicon.png" width="7%" height="7%" alt=""  className='rounded-full'/>
             <h4 className="ml-3 shadow">Yashua Payroll System</h4>
             </div>
             </div>             </a>
            </div>
            <div className="flex-1">
            <a href="https://iampsbc.com/">
            <div className='relative'>
             <img width="100%" height="330" src="zkript-img/psbc.png"  alt='img of FillInvestland' className='cursor-pointer' />
             <div className='flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-500'>
              <img src="favicon.png" width="7%" height="7%" alt=""  className='rounded-full'/>
             <h4 className="ml-3 shadow">Paete Science Business College Inc.</h4>
             </div>
             </div>             
             </a>           
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-4">
            <div className="flex-1 w-full">
            <a href="https://freemont-sign-company.vercel.app/">
            <div className='relative'>
             <img width="100%" height="330" src="zkript-img/fremont.png"  alt='img of FillInvestland' className='cursor-pointer' />
             <div className='flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-500'>
              <img src="favicon.png" width="7%" height="7%" alt=""  className='rounded-full'/>
             <h4 className="ml-3 shadow">Fremont Sign Company</h4>
             </div>
             </div>
              </a>
            </div>
            <div className="flex-1">
            <a href="https://app.saleskits.io/">
            <div className='relative'>
             <img width="100%" height="330" src="zkript-img/saleskits.png"  alt='img of FillInvestland' className='cursor-pointer' />
             <div className='flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-500'>
             <img src="favicon.png" width="7%" height="7%" alt=""  className='rounded-full '/>
             <h4 className="ml-3 shadow">Saleskits</h4>
             </div>
             </div>             
             </a>           
              </div>
            </div>
            </div>
            <div id='webapp'>
            <div className='mt-20'>
            <h4 className="text-xl text-[#b3b3b3] font-bold">Web Applications</h4>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-4 items-center">
            <div className="flex-1 w-full">
            <iframe width="100%" height="330" src="https://www.youtube.com/embed/_6MqfJqoKz8" title="Student Attendance Manager Mobile App (uLog) 2022" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="flex-1">
            <iframe width="100%" height="330" src="https://www.youtube.com/embed/WD2jE8xYjy8" title="Mail Management System (PPBMS)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>       
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-4">
            <div className="flex-1 w-full">
            <iframe width="100%" height="330" src="https://www.youtube.com/embed/LXFjSQBonDw" title="Payroll Management System (HurtAJ Admin)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            <div className="flex-1">
            <iframe width="100%" height="330" src="https://www.youtube.com/embed/byeLygjh2ng" title="Investment and Points Management System (Lyradig) 2022" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>           
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-4">
            <div className="flex-1 w-full">
            <a href="https://shorturl.at/bsGV0 ">
            <div className='relative'>
             <img width="100%" height="330" src="zkript-img/enrollment.png"  alt='img of FillInvestland' className='cursor-pointer' />
             <div className='flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-500'>
              <img src="favicon.png" width="7%" height="7%" alt=""  className='rounded-full'/>
             <h4 className="ml-3 shadow">PSBC Enrollment</h4>
             </div>
             </div>             
             </a>
            </div>
            <div className="flex-1 w-full"></div>
            </div>
            </div>
            <div id='mobileapp'>
            <div className='mt-20'>
            <h4 className="text-xl text-[#b3b3b3] font-bold">Mobile Application</h4>
            </div>
            <div className="flex flex-col md:flex-row gap-10 mt-4">
            <div className="flex-1">
              <iframe width="100%" height="330" src="https://www.youtube.com/embed/_6MqfJqoKz8" title="Student Attendance Manager Mobile App (uLog) 2022" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="flex-1">
            </div>
            </div>
            </div>
           
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 lg:px-40 py-20 md:py-40" id="contact-section">
        <h2 className="text-4xl md:text-6xl font-bold text-center mt-5 px-0 md:px-40">Interested in building a software?</h2>
        <h4 className="text-center font-bold text-lg mt-5 text-[#b3b3b3]">You can talk to us, inquire and get a quote for <span className="text-[#ff6996] font-extrabold">FREE</span>!</h4>
        <div className="flex flex-col md:flex-row justify-center mt-16 items-center gap-4">
          <a href="mailto:inquire@zkript.dev" className="bg-[#3ccf91] py-3 px-6 rounded-md font-extrabold hover:bg-[#222222]">Inquire Now</a>
          <h4 className="font-bold"><span className="text-[#b3b3b3]">or you can call us at</span><a className="underline ml-3" href="tel:+639505765709">+63 950 576 5709</a></h4>
        </div>
      </div>
      <div className="bg-[#111111]">
      <div className="container mx-auto px-6 lg:px-40 py-20">
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:px-20">
          <div className="flex-1">
            <MainLogo />
          </div>
          <div>
            <ul className="flex gap-4">
              <li className="cursor-pointer group">
                <Link href="https://www.linkedin.com/company/zkript/" passHref>
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="group-hover:hidden">
                      <AiFillLinkedin size="25px" color="#b3b3b3" />
                    </div>
                    <div className="hidden group-hover:block">
                      <AiFillLinkedin size="25px" color="#ffffff" />
                    </div>
                  </a>
                </Link>
              </li>
              <li className="cursor-pointer group">
                <Link href="https://www.facebook.com/zkriptofficial/">
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="group-hover:hidden">
                      <AiFillFacebook size="25px" color="#b3b3b3" />
                    </div>
                    <div className="hidden group-hover:block">
                      <AiFillFacebook size="25px" color="#ffffff" />
                    </div>
                  </a>
                </Link>
              </li>
              <li className="cursor-pointer group">
                <Link href="https://www.youtube.com/channel/UCk6sHVZ6sbPsQdrtEyYKdIQ">
                  <a target="_blank" rel="noopener noreferrer">
                    <div className="group-hover:hidden">
                      <AiFillYoutube size="25px" color="#b3b3b3" />
                    </div>
                    <div className="hidden group-hover:block">
                      <AiFillYoutube size="25px" color="#ffffff" />
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:px-20 mt-4">
          <div className="flex-1">
            <h4 className="text-[#b3b3b3] font-bold w-full md:w-2/3 text-md md:text-lg">Zkript, legally known as ZKRIPT SOLUTIONS OPC, is a software development company and a group of fiery individuals who dedicated their lives to help others by creating modern technology such as Mobile Applications, Desktop Application, Web Application and Websites.</h4>
          </div>
          <div>
            <a href="mailto:inquire@zkript.dev" className="text-[#b3b3b3] font-bold text-md md:text-lg underline hover:text-white">inquire@zkript.dev</a>
          </div>
        </div>
        <div className="md:px-20 mt-4">
          <h4 className="font-bold text-md md:text-lg">Copyright © {new Date().getFullYear()} Zkript Solutions OPC</h4>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}

export default Home
