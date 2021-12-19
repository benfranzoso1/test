import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Link from 'next/link'
import Image from 'next/image'
import surfOne from '../public/surf1.jpg'
import surfTwo from '../public/surf2.jpg'
import treePic from '../public/tree.jpg'
import { SearchIcon } from '@heroicons/react/solid'
import Card from '../components/card'
import CardMeta from '../components/cardmeta'
import CardCarousel from '../components/cardcarousel'
import CardCarouselItem from '../components/cardcarouselitem'




export default function Home() {
  return (
    <>
    <NavBar></NavBar>
    <div className="container mx-auto px-4 py-6">
      {/* Section Heading */}
      <div className="pb-6 flex gap-2 items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
        <Link href="/news">
          <a className="text-xl font-semibold underline decoration-[#00BBB4] underline-offset-4 decoration-2">News</a>
        </Link>
      </div>
      {/* Articles */}
      <div className="relative overflow-hidden">
        <div className="relative overflow-auto after:absolute after:h-full after:w-16 after:top-0 after:right-0 after:will-change-[opacity] after:opacity-100 after:pointer-events-none after:bg-gradient-to-r after:from-transparent after:to-white after:transition-opacity">

          <CardCarousel>

            <CardCarouselItem>
              <Card>
                <Image
                  src={surfOne}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <CardMeta></CardMeta>
              </Card>
            </CardCarouselItem>

            <CardCarouselItem>
              <Card>
                <Image
                  src={surfOne}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <CardMeta></CardMeta>
              </Card>
            </CardCarouselItem>

            <CardCarouselItem>
              <Card>
                <Image
                  src={surfOne}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <CardMeta></CardMeta>
              </Card>
            </CardCarouselItem>

            <CardCarouselItem>
              <Card>
                <Image
                  src={surfOne}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <CardMeta></CardMeta>
              </Card>
            </CardCarouselItem>

            <CardCarouselItem>
              <Card>
                <Image
                  src={surfOne}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <CardMeta></CardMeta>
              </Card>
            </CardCarouselItem>

            <CardCarouselItem>
              <Card>
                <Image
                  src={surfOne}
                  placeholder="blur"
                  alt="Picture of the author"
                  layout='fill'
                  className="w-full h-full object-cover rounded-lg"
                />
                <CardMeta></CardMeta>
              </Card>
            </CardCarouselItem>

      
            <div className="snap-center">
              <Link href="/news">
                <a className="rounded-lg">
                <div className="relative flex flex-col gap-2 justify-center items-center h-96 w-[120px] bg-gray-50 hover:bg-gray-100 rounded-lg">
                <span className="p-2 rounded-full bg-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                See All
                </div>
                </a>
              </Link>
            </div>
          </CardCarousel>

        </div>
      </div>
    </div>

    <div className="container mx-auto px-4 py-6">
      <h2 className="text-xl pb-4 font-semibold">Surf</h2>
      <div className="flex gap-6">

        <div className="relative bg-slate-200 overflow-hidden shadow rounded-lg h-96 w-72">
          <Image
            src={surfTwo}
            placeholder="blur"
            alt="Picture of the author"
            layout='fill'
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="relative bg-slate-200 overflow-hidden shadow rounded-lg h-96 w-72">
          <Image
            src={surfTwo}
            placeholder="blur"
            alt="Picture of the author"
            layout='fill'
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="relative bg-slate-200 overflow-hidden shadow rounded-lg h-96 w-72">
          <Image
            src={surfTwo}
            placeholder="blur"
            alt="Picture of the author"
            layout='fill'
            className="w-full h-full object-center object-cover"
          />
        </div>

        <div className="relative bg-slate-200 overflow-hidden shadow rounded-lg h-96 w-72">
          <Image
            src={surfTwo}
            placeholder="blur"
            alt="Picture of the author"
            layout='fill'
            className="w-full h-full object-center object-cover"
          />
        </div>
  
      </div>

    </div>
    <Footer></Footer>
    </>
  )
}