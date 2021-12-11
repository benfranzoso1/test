import Image from 'next/image'
import santaPic from '../public/santa.jpg'
import girlPic from '../public/girl.jpg'
import treePic from '../public/tree.jpg'


export default function Home() {
  return (
    <div className="container mx-auto px-6 py-6">


      <div className="relative bg-gray-50 overflow-hidden">
        <div className="relative overflow-auto">
          <div className="relative w-full flex gap-6 snap-x snap-mandatory overflow-x-auto [--card-width:320px] md:[--card-width:420px]">
            <div className="snap-center">
              <div className="relative h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
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
              <div className="relative h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
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
              <div className="relative h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
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
              <div className="relative h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
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
              <div className="relative h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
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
              <div className="relative h-80 w-[var(--card-width)] bg-gray-400 rounded-lg">
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
          </div>
        </div>
      </div>


    </div>
  )
}