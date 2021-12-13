import NavBar from '../components/navbar'
import Image from 'next/image'
import santaPic from '../public/santa.jpg'
import girlPic from '../public/girl.jpg'
import treePic from '../public/tree.jpg'
import { SearchIcon } from '@heroicons/react/solid'



export default function Home() {
  return (
    <>
    <NavBar></NavBar>
    <div className="container mx-auto px-4 py-6">
      {/* Section Heading */}
      <div className="flex justify-between items-center gap-4 pb-4">
        <h2 className="text-xl font-semibold">News</h2>
        <span className="underline decoration-[#00BBB4] underline-offset-4 decoration-2">See All</span>
      </div>
      {/* Articles */}
      <div className="relative overflow-hidden">
        <div className="relative overflow-auto">
          <div className="relative w-full flex gap-4 snap-x snap-mandatory overflow-x-auto [--card-width:280px] md:[--card-width:420px]">
            <div className="snap-center">
              <div className="relative h-64 md:h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
                <Image
                  src={santaPic}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute w-full h-full bg-black/[.4] p-6 flex items-end rounded-lg">
                  <div className="relative text-white">
                    <h1 className="text-2xl font-bold pb-2">Gov. Sunnunu rolls up his sleeve for COVID</h1>
                    <span>NEWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center">
              <div className="relative h-64 md:h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
                <Image
                  src={girlPic}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute w-full h-full bg-black/[.4] p-6 flex items-end rounded-lg">
                  <div className="relative text-white">
                    <h1 className="text-2xl font-bold pb-2">Gov. Sunnunu rolls up his sleeve for COVID</h1>
                    <span>NEWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center">
              <div className="relative h-64 md:h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
                <Image
                  src={treePic}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute w-full h-full bg-black/[.4] p-6 flex items-end rounded-lg">
                  <div className="relative text-white">
                    <h1 className="text-2xl font-bold pb-2">Gov. Sunnunu rolls up his sleeve for COVID</h1>
                    <span>NEWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center">
              <div className="relative h-64 md:h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
                <Image
                  src={santaPic}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute w-full h-full bg-black/[.4] p-6 flex items-end rounded-lg">
                  <div className="relative text-white">
                    <h1 className="text-2xl font-bold pb-2">Gov. Sunnunu rolls up his sleeve for COVID</h1>
                    <span>NEWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center">
              <div className="relative h-64 md:h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
                <Image
                  src={santaPic}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute w-full h-full bg-black/[.4] p-6 flex items-end rounded-lg">
                  <div className="relative text-white">
                    <h1 className="text-2xl font-bold pb-2">Gov. Sunnunu rolls up his sleeve for COVID</h1>
                    <span>NEWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center">
              <div className="relative h-64 md:h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
                <Image
                  src={santaPic}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute w-full h-full bg-black/[.4] p-6 flex items-end rounded-lg">
                  <div className="relative text-white">
                    <h1 className="text-2xl font-bold pb-2">Gov. Sunnunu rolls up his sleeve for COVID</h1>
                    <span>NEWS</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="snap-center">
              <div className="relative flex flex-col gap-2 justify-center items-center h-64 md:h-80 w-[120px] bg-gray-100 rounded-lg">
                <span className="p-2 rounded-full bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
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
    </>
  )
}