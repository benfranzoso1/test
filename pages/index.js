import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'
import surfOne from '../public/surf1.jpg'
import surfTwo from '../public/surf2.jpg'
import treePic from '../public/tree.jpg'
import { SearchIcon } from '@heroicons/react/solid'



export default function Home() {
  return (
    <>
    <NavBar></NavBar>
    <div className="container mx-auto px-4 py-6">
      {/* Section Heading */}
      <div className="pb-4 flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        <h2 className="text-xl font-semibold underline decoration-[#00BBB4] underline-offset-4 decoration-2">News</h2>
      </div>
      {/* Articles */}
      <div className="relative overflow-hidden">
        <div className="relative overflow-auto">
          <div className="relative w-full flex gap-4 snap-x snap-mandatory overflow-x-auto [--card-width:280px] md:[--card-width:380px]">
            <div className="snap-center">
              <div className="relative h-64 md:h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
                <Image
                  src={surfOne}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute w-full h-full bg-black/[.4] p-6 flex flex-col justify-between rounded-lg">
                  <div className="relative text-white">
                    <div className="flex gap-2 items-center text-xs font-medium">
                      <div className="reletive inline-flex rounded-full bg-white p-2">
                        <svg width="auto" height="12" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24.85 12.4967H21.7867V10.4167H26.6033L24.8167 7.91667H26.6033L20.9467 0L15.29 7.91667H17.0767L15.29 10.4167H20.1067V12.4967H16.2C13.65 12.38 11.6133 10.2733 11.6133 7.69661C11.6133 6.78661 11.8733 5.93996 12.3133 5.2133C12.6267 4.69663 13.0367 4.24329 13.5167 3.87663C13.07 3.14996 12.5133 2.51667 11.8667 2C10.5967 0.98 9.00333 0.399984 7.3 0.399984C3.27666 0.399984 0 3.67328 0 7.69661C0 11.7199 3.27333 14.9933 7.3 14.9933L27.3533 15C27.3533 13.6167 26.23 12.4967 24.85 12.4967ZM20.3433 6.23332H18.5567L20.9467 2.88997L23.3367 6.23332H21.55L23.3367 8.73332H18.5567L20.3433 6.23332ZM7.29666 12.5033C4.64666 12.5033 2.49 10.3466 2.49 7.69661C2.49 5.04661 4.64666 2.88997 7.29666 2.88997C8.37666 2.88997 9.38667 3.24329 10.2067 3.86995C9.51667 4.98329 9.12 6.29328 9.12 7.69661C9.12 9.53328 9.80333 11.2133 10.9267 12.4967L7.29666 12.5033Z" fill="#00BBB4"/>
                        </svg>


                      </div>
                      SURF NH
                    </div>
                  </div>
                  <div className="relative text-white">
                    <h1 className="text-2xl font-bold pb-2">Surf NH First Article Will Be Here</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center">
              <div className="relative h-64 md:h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
                <Image
                  src={surfTwo}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute w-full h-full bg-black/[.4] p-6 flex items-end rounded-lg">
                  <div className="relative text-white">
                    <h1 className="text-2xl font-bold pb-2">Surf NH First Article Will Be Here</h1>
                    <span>NEWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center">
              <div className="relative h-64 md:h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
                <Image
                  src={surfOne}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute w-full h-full bg-black/[.4] p-6 flex items-end rounded-lg">
                  <div className="relative text-white">
                    <h1 className="text-2xl font-bold pb-2">Surf NH First Article Will Be Here</h1>
                    <span>NEWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center">
              <div className="relative h-64 md:h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
                <Image
                  src={surfOne}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute w-full h-full bg-black/[.4] p-6 flex items-end rounded-lg">
                  <div className="relative text-white">
                    <h1 className="text-2xl font-bold pb-2">Surf NH First Article Will Be Here</h1>
                    <span>NEWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center">
              <div className="relative h-64 md:h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
                <Image
                  src={surfTwo}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute w-full h-full bg-black/[.4] p-6 flex items-end rounded-lg">
                  <div className="relative text-white">
                    <h1 className="text-2xl font-bold pb-2">Surf NH First Article Will Be Here</h1>
                    <span>NEWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center">
              <div className="relative h-64 md:h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
                <Image
                  src={surfTwo}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute w-full h-full bg-black/[.4] p-6 flex items-end rounded-lg">
                  <div className="relative text-white">
                    <h1 className="text-2xl font-bold pb-2">Surf NH First Article Will Be Here</h1>
                    <span>NEWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center">
              <div className="relative flex flex-col gap-2 justify-center items-center h-64 md:h-80 w-[120px] bg-gray-100 rounded-lg">
                <span className="p-2 rounded-full bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                See All
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl pb-4 font-semibold">Surf</h2>
    </div>
    <Footer></Footer>
    </>
  )
}