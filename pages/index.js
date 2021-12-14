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
                      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="12.5" cy="12.5" r="12.5" fill="white"/>
<path d="M21.88 15.9973H19.4293V14.3333H23.2827L21.8533 12.3333H23.2827L18.7573 6L14.232 12.3333H15.6613L14.232 14.3333H18.0853V15.9973H14.96C12.92 15.904 11.2907 14.2186 11.2907 12.1573C11.2907 11.4293 11.4987 10.752 11.8507 10.1706C12.1013 9.7573 12.4293 9.39464 12.8133 9.1013C12.456 8.51997 12.0107 8.01333 11.4933 7.6C10.4773 6.784 9.20266 6.31999 7.84 6.31999C4.62133 6.31999 2 8.93863 2 12.1573C2 15.376 4.61866 17.9947 7.84 17.9947L23.8827 18C23.8827 16.8933 22.984 15.9973 21.88 15.9973ZM18.2747 10.9867H16.8453L18.7573 8.31198L20.6693 10.9867H19.24L20.6693 12.9867H16.8453L18.2747 10.9867ZM7.83733 16.0027C5.71733 16.0027 3.992 14.2773 3.992 12.1573C3.992 10.0373 5.71733 8.31198 7.83733 8.31198C8.70133 8.31198 9.50933 8.59463 10.1653 9.09596C9.61333 9.98663 9.296 11.0346 9.296 12.1573C9.296 13.6266 9.84267 14.9707 10.7413 15.9973L7.83733 16.0027Z" fill="#00BBB4"/>
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