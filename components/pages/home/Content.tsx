import type { NextPage } from "next"
import Image from "next/image"
import MainLogo from "../../svg/MainLogo"
import { AiFillLinkedin, AiFillFacebook, AiFillYoutube } from "react-icons/ai"
import Link from "next/link"

const Content: NextPage = () => {
  return (
    <>
      <div>
        <div
          className="container mx-auto px-6 lg:px-40 py-24 md:py-48"
          id="home-section"
        >
          <div className="flex flex-col lg:flex-row md:items-center gap-9">
            <div className="flex-1 flex flex-col gap-3">
              <h1 className="font-bold text-4xl md:text-7xl leading-10 md:leading-tight">
                Start building amazing and reliable Software with us.
              </h1>
              <h2 className="text-lg md:text-2xl font-bold">
                Website, web application, mobile application, desktop
                application,{" "}
                <span className="text-[#b3b3b3]">
                  you name it, we can build it for you.
                </span>
              </h2>
              <h4 className="text-[#3c5ccf] font-medium text-sm md:text-lg mt-2 md:mt-7">
                *Software development is what we eat every breakfast
              </h4>
            </div>
            <div className="hidden lg:block lg:w-1/3">
              <Image
                src="/software-development-zkript.jpg"
                alt="Picture of the author"
                width={600}
                height={901}
              />
            </div>
            <div className="w-full lg:hidden">
              <Image
                src="/software-engineer-zkript.jpg"
                alt="Picture of the author"
                width={2000}
                height={1333}
              />
            </div>
          </div>
        </div>
        <div className="bg-[#111111]" id="projects-section">
          <div className="container mx-auto px-6 lg:px-40 py-20 md:py-40">
            <h4 className="text-xl text-[#b3b3b3] font-bold text-center">
              Featured Projects
            </h4>
            <h2 className="text-4xl hidden md:block font-bold text-center mt-5">
              We work closely to our clients to provide
              <br />
              the best possible results
            </h2>
            <h2 className="text-2xl block md:hidden font-bold text-center mt-5">
              We work closely to our clients to provide the best possible
              results
            </h2>
            <div id="category">
              <div id="website">
                <div className="mt-20">
                  <h4 className="text-xl text-[#b3b3b3] font-bold">Websites</h4>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4">
                  <div className="md:flex-1">
                    <Link
                      href="https://filinvestland.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="relative">
                        <Image
                          width="1916"
                          height="330"
                          src="/zkript-img/filinvest.png"
                          alt="img of FillInvestland"
                          className="cursor-pointer"
                        />
                        <div className="flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-900">
                          <Image
                            src="/favicon.png"
                            width="400"
                            height="400"
                            alt=""
                            className="rounded-full w-[9%] h-[9%] md:w-[8%] md:h-[8%] lg:w-[7%] lg:h-[7%]"
                          />
                          <h4 className="ml-3 drop-shadow-md">
                            Filinvest Land, Incorporated
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="md:flex-1">
                    <Link
                      href="https://www.couriersandfreight.com.au/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="relative">
                        <Image
                          width="1916"
                          height="330"
                          src="/zkript-img/courier.png"
                          alt="img of FillInvestland"
                          className="cursor-pointer"
                        />
                        <div className="flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-900">
                          <Image
                            src="/favicon.png"
                            width="400"
                            height="400"
                            alt="Zkript Icon"
                            className="rounded-full w-[9%] h-[9%] md:w-[8%] md:h-[8%] lg:w-[7%] lg:h-[7%]"
                          />
                          <h4 className="ml-3 drop-shadow-md">
                            Couriers & Freight
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4">
                  <div className="flex-1 w-full">
                    <Link
                      href="https://showcase.yahshuapayroll.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="relative">
                        <Image
                          width="1916"
                          height="330"
                          src="/zkript-img/yashua_payroll.png"
                          alt="img of FillInvestland"
                          className="cursor-pointer"
                        />
                        <div className="flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-900">
                          <Image
                            src="/favicon.png"
                            width="400"
                            height="400"
                            alt="Zkript Icon"
                            className="rounded-full w-[9%] h-[9%] md:w-[8%] md:h-[8%] lg:w-[7%] lg:h-[7%]"
                          />
                          <h4 className="ml-3 drop-shadow-md">
                            Yashua Payroll System
                          </h4>
                        </div>
                      </div>{" "}
                    </Link>
                  </div>
                  <div className="flex-1">
                    <Link
                      href="https://iampsbc.com/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="relative">
                        <Image
                          width="1916"
                          height="330"
                          src="/zkript-img/psbc.png"
                          alt="img of FillInvestland"
                          className="cursor-pointer"
                        />
                        <div className="flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-900">
                          <Image
                            src="/favicon.png"
                            width="400"
                            height="400"
                            alt="Zkript Icon"
                            className="rounded-full w-[9%] h-[9%] md:w-[8%] md:h-[8%] lg:w-[7%] lg:h-[7%]"
                          />
                          <h4 className="ml-3 drop-shadow-md">
                            Paete Science Business College Inc.
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4">
                  <div className="flex-1 w-full">
                    <Link
                      href="https://freemont-sign-company.vercel.app/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="relative">
                        <Image
                          width="1916"
                          height="330"
                          src="/zkript-img/fremont.png"
                          alt="img of FillInvestland"
                          className="cursor-pointer"
                        />
                        <div className="flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-900">
                          <Image
                            src="/favicon.png"
                            width="400"
                            height="400"
                            alt="Zkript Icon"
                            className="rounded-full w-[9%] h-[9%] md:w-[8%] md:h-[8%] lg:w-[7%] lg:h-[7%]"
                          />
                          <h4 className="ml-3 drop-shadow-md">
                            Fremont Sign Company
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex-1">
                    <Link
                      href="https://app.saleskits.io/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="relative">
                        <Image
                          width="1916"
                          height="330"
                          src="/zkript-img/saleskits.png"
                          alt="img of FillInvestland"
                          className="cursor-pointer"
                        />
                        <div className="flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-900">
                          <Image
                            src="/favicon.png"
                            width="400"
                            height="400"
                            alt="Zkript Icon"
                            className="rounded-full w-[9%] h-[9%] md:w-[8%] md:h-[8%] lg:w-[7%] lg:h-[7%]"
                          />
                          <h4 className="ml-3 drop-shadow-md">Saleskits</h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <div id="webapp">
                <div className="mt-20">
                  <h4 className="text-xl text-[#b3b3b3] font-bold">
                    Web Applications
                  </h4>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4 items-center">
                  <div className="flex-1 w-full">
                    <Link
                      href="https://shorturl.at/bsGV0 "
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <div className="relative">
                        <Image
                          width="1916"
                          height="330"
                          src="/zkript-img/enrollment.png"
                          alt="img of FillInvestland"
                          className="cursor-pointer"
                        />
                        <div className="flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-900">
                          <Image
                            src="/favicon.png"
                            width="400"
                            height="400"
                            alt="Zkript Icon"
                            className="rounded-full w-[9%] h-[9%] md:w-[8%] md:h-[8%] lg:w-[7%] lg:h-[7%]"
                          />
                          <h4 className="ml-3 drop-shadow-md">
                            PSBC Enrollment
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                  <div className="flex-1">
                    <div className="flex-1 w-full">
                      <Link
                        href="https://youtu.be/WD2jE8xYjy8"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="relative">
                          <Image
                            width="1916"
                            height="330"
                            src="/zkript-img/mail.png"
                            alt="img of FillInvestland"
                            className="cursor-pointer"
                          />
                          <div className="flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-900">
                            <Image
                              src="/favicon.png"
                              width="400"
                              height="400"
                              alt="Zkript Icon"
                              className="rounded-full w-[9%] h-[9%] md:w-[8%] md:h-[8%] lg:w-[7%] lg:h-[7%]"
                            />
                            <h4 className="ml-3 drop-shadow-md">
                              Mail Management System (PPBMS)
                            </h4>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4">
                  <div className="flex-1">
                    <div className="flex-1 w-full">
                      <Link
                        href="https://youtu.be/LXFjSQBonDw"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="relative">
                          <Image
                            width="1916"
                            height="330"
                            src="/zkript-img/payroll.png"
                            alt="img of FillInvestland"
                            className="cursor-pointer"
                          />
                          <div className="flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-900">
                            <Image
                              src="/favicon.png"
                              width="400"
                              height="400"
                              alt="Zkript Icon"
                              className="rounded-full w-[9%] h-[9%] md:w-[8%] md:h-[8%] lg:w-[7%] lg:h-[7%]"
                            />
                            <h4 className="ml-3 drop-shadow-md">
                              Payroll Management System (HurtJ Admin)
                            </h4>
                          </div>
                        </div>
                      </Link>
                    </div>{" "}
                  </div>
                  <div className="flex-1">
                    <div className="flex-1 w-full">
                      <Link
                        href="https://youtu.be/byeLygjh2ng"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="relative">
                          <Image
                            width="1916"
                            height="330"
                            src="/zkript-img/investment.png"
                            alt="img of FillInvestland"
                            className="cursor-pointer"
                          />
                          <div className="flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-900">
                            <Image
                              src="/favicon.png"
                              width="400"
                              height="400"
                              alt="Zkript Icon"
                              className="rounded-full w-[9%] h-[9%] md:w-[8%] md:h-[8%] lg:w-[7%] lg:h-[7%]"
                            />
                            <h4 className="ml-3 drop-shadow-md">
                              Investment and Points Management System (Lyradig)
                              2022
                            </h4>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4">
                  {/* {//} */}
                </div>
              </div>
              <div id="mobileapp">
                <div className="mt-20">
                  <h4 className="text-xl text-[#b3b3b3] font-bold">
                    Mobile Application
                  </h4>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4">
                  <div className="flex-1">
                    <div className="flex-1 w-full">
                      <Link
                        href="https://youtu.be/_6MqfJqoKz8"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <div className="relative">
                          <Image
                            width="1916"
                            height="330"
                            src="/zkript-img/attendance.png"
                            alt="img of FillInvestland"
                            className="cursor-pointer"
                          />
                          <div className="flex justify-start items-center absolute text-md text-white top-0 px-2 py-3 bg-opacity-70 bg-gradient-to-t from-transparent to-gray-900">
                            <Image
                              src="/favicon.png"
                              width="400"
                              height="400"
                              alt="Zkript Icon"
                              className="rounded-full w-[9%] h-[9%] md:w-[8%] md:h-[8%] lg:w-[7%] lg:h-[7%]"
                            />
                            <h4 className="ml-3 drop-shadow-md">
                              Student Attendance Manager Mobile App (uLog) 2022
                            </h4>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container mx-auto px-6 lg:px-40 py-20 md:py-40"
          id="contact-section"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-center mt-5 px-0 md:px-40">
            Interested in building a software?
          </h2>
          <h4 className="text-center font-bold text-lg mt-5 text-[#b3b3b3]">
            You can talk to us, inquire and get a quote for{" "}
            <span className="text-[#ff6996] font-extrabold">FREE</span>!
          </h4>
          <div className="flex flex-col md:flex-row justify-center mt-16 items-center gap-4">
            <Link
              href="mailto:inquire@zkript.dev"
              className="bg-[#3ccf91] py-3 px-6 rounded-md font-extrabold hover:bg-[#222222]"
            >
              Inquire Now
            </Link>
            <h4 className="font-bold">
              <span className="text-[#b3b3b3]">or you can call us at</span>
              <a className="underline ml-3" href="tel:+639505765709">
                +63 950 576 5709
              </a>
            </h4>
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
                    <Link
                      href="https://www.linkedin.com/company/zkript/"
                      passHref
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="group-hover:hidden">
                        <AiFillLinkedin size="25" color="#b3b3b3" />
                      </div>
                      <div className="hidden group-hover:block">
                        <AiFillLinkedin size="25" color="#ffffff" />
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer group">
                    <Link
                      href="https://www.facebook.com/zkriptofficial/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="group-hover:hidden">
                        <AiFillFacebook size="25" color="#b3b3b3" />
                      </div>
                      <div className="hidden group-hover:block">
                        <AiFillFacebook size="25" color="#ffffff" />
                      </div>
                    </Link>
                  </li>
                  <li className="cursor-pointer group">
                    <Link
                      href="https://www.youtube.com/channel/UCk6sHVZ6sbPsQdrtEyYKdIQ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="group-hover:hidden">
                        <AiFillYoutube size="25" color="#b3b3b3" />
                      </div>
                      <div className="hidden group-hover:block">
                        <AiFillYoutube size="25" color="#ffffff" />
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:gap-0 md:flex-row md:px-20 mt-4">
              <div className="flex-1">
                <h4 className="text-[#b3b3b3] font-bold w-full md:w-2/3 text-md md:text-lg">
                  Zkript, legally known as ZKRIPT SOLUTIONS OPC, is a software
                  development company and a group of fiery individuals who
                  dedicated their lives to help others by creating modern
                  technology such as Mobile Applications, Desktop Application,
                  Web Application and Websites.
                </h4>
              </div>
              <div>
                <Link
                  href="mailto:inquire@zkript.dev"
                  className="text-[#b3b3b3] font-bold text-md md:text-lg underline hover:text-white"
                >
                  inquire@zkript.dev
                </Link>
              </div>
            </div>
            <div className="md:px-20 mt-4">
              <h4 className="font-bold text-md md:text-lg">
                Copyright © {new Date().getFullYear()} Zkript Solutions OPC
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
