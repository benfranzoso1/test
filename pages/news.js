import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Image from 'next/image'
import surfOne from '../public/surf1.jpg'
import surfTwo from '../public/surf2.jpg'
import treePic from '../public/tree.jpg'
import { SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'



export default function Home() {
  return (
    <>
    <NavBar></NavBar>
    {/* News Catagory Nav Bar */}
    <div className="bg-slate-100">
        <div className="container relative">
            <nav>
                <ul className="flex flex-row gap-6 justify-center items-center p-4">
                    <li>
                        <Link href="/news">Show All</Link>
                    </li>
                    <li>
                        <Link href="/news/state">State</Link>
                    </li>
                    <li>
                        <Link href="/news/local">Local</Link>
                    </li>
                    <li>
                        <Link href="/news/sports">Sports</Link>
                    </li>
                    <li>
                        <Link href="/news/politics">Politics</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>



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
                      <div className="reletive">
                      <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="14.5" cy="14.5" r="14.5" fill="white"/>
<path d="M23.88 17.9973H21.4293V16.3333H25.2827L23.8533 14.3333H25.2827L20.7573 8L16.232 14.3333H17.6613L16.232 16.3333H20.0853V17.9973H16.96C14.92 17.904 13.2907 16.2186 13.2907 14.1573C13.2907 13.4293 13.4987 12.752 13.8507 12.1706C14.1013 11.7573 14.4293 11.3946 14.8133 11.1013C14.456 10.52 14.0107 10.0133 13.4933 9.6C12.4773 8.784 11.2027 8.31999 9.84 8.31999C6.62133 8.31999 4 10.9386 4 14.1573C4 17.376 6.61866 19.9947 9.84 19.9947L25.8827 20C25.8827 18.8933 24.984 17.9973 23.88 17.9973ZM20.2747 12.9867H18.8453L20.7573 10.312L22.6693 12.9867H21.24L22.6693 14.9867H18.8453L20.2747 12.9867ZM9.83733 18.0027C7.71733 18.0027 5.992 16.2773 5.992 14.1573C5.992 12.0373 7.71733 10.312 9.83733 10.312C10.7013 10.312 11.5093 10.5946 12.1653 11.096C11.6133 11.9866 11.296 13.0346 11.296 14.1573C11.296 15.6266 11.8427 16.9707 12.7413 17.9973L9.83733 18.0027Z" fill="#00BBB4"/>
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