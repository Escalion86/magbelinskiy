import Logo from '@components/Logo'
import PulseButton from '@components/PulseButton'
import { H2, H1, H3, H4, P } from '@components/tags'
import loggedUserAtom from '@state/atoms/loggedUserAtom'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import Svg30Plus from 'svg/Svg30Plus'
import ReactPlayer from 'react-player'
import { modalsFuncAtom } from '@state/atoms'

const TitleBlock = () => {
  const userIsLogged = !!useRecoilValue(loggedUserAtom)
  const modalsFunc = useRecoilValue(modalsFuncAtom)
  const router = useRouter()

  return (
    <div
      className="relative min-h-[calc(100vh-72px)] bg-[#000000]"
      // style={{
      //   backgroundImage: `url("/texture_small.jpg")`,
      //   // backgroundRepeat: 'repeat',
      //   // backgroundPosition: 'top 48px right',
      //   // backgroundSize: '',
      // }}
    >
      <div className="tablet:pt-7 min-h-[calc(100vh-72px)] tablet:min-h-[calc(100vh-100px)] h-[calc(100vh-72px)] tablet:h-[calc(100vh-100px)] overflow-hidden relative">
        {/* <video
          className="min-h-[calc(56.25vw)] min-w-[177.77777778vh] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          preload="auto"
          autoplay
          loop
          // controls
          // type="video/mp4"
          // style={{ height: '100%' }}
        >
          <source src="http://localhost:3000/rain.mp4" type="video/mp4" />
        </video> */}
        {/* <ReactPlayer
          className="min-h-[calc(56.25vw)] min-w-[177.77777778vh] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          loop
          muted
          playing
          url="rain2.mp4"
        /> */}
        <img
          className="object-cover w-full h-full min-w-full min-h-[calc(100vh-72px)] tablet:min-h-[calc(100vh-100px)] object-top"
          src="promo.gif"
        />
      </div>
      {/* <ReactPlayer
        style={{
          position: 'absolute',
          top: 0,
          // left: 0,
          // right: 0,
          // bottom: 0,
          // width: '100%',
          height: '100%',
          minWidth: '100%',
          minHeight: '100%',
        }}
        loop
        muted
        playing
        url="rain.mp4"
      /> */}
      {/* <video
        style={{
          position: 'absolute',
          // top: 0,
          // left: 0,
          right: 0,
          bottom: 0,
          minWidth: '100%',
          minHeight: '100%',
        }}
        autoPlay={true}
        loop={true}
        controls={false}
        playsInline
        src="rain.mp4"
      /> */}
      {/* <source src="rain.mp4" type="video/mp4" /> */}
      {/* </video> */}
      {/* <iframe hidden src="rain.mp4" allow="autoplay" type="audio/mpeg"></iframe> */}
      <div className="absolute top-0 flex flex-col items-center justify-center w-full h-full min-h-[calc(100vh-70px)] px-10 pt-5 tablet:pt-12 pb-8 tablet:pb-10 bg-[#000000] bg-opacity-60 laptop:px-20 ">
        {/* <img
          className="absolute w-12 h-12 tablet:w-16 tablet:h-16 top-6 right-6 tablet:top-14 tablet:right-12 laptop:h-20 laptop:w-20"
          src={'/img/other/30-plus.png'}
          alt="30+"
          // width="100%"
          // height="100%"
        /> */}
        {/* <Svg30Plus className="absolute w-12 h-12 tablet:w-16 tablet:h-16 top-6 right-6 tablet:top-14 tablet:right-12 laptop:h-20 laptop:w-20 fill-general" /> */}
        <div className="flex flex-col items-center justify-between mb-10 gap-y-1">
          <Logo />
          {/* <H1
            style={{ textShadow: '1px 1px 2px black' }}
            // style={{ fontSize: '6vw', lineHeight: '5vw' }}
          >
            АЛЕКСЕЙ БЕЛИНСКИЙ
          </H1>
          <H4 style={{ textShadow: '1px 1px 2px black' }} bold={false}>
            ИЛЛЮЗИОНИСТ
          </H4> */}
          <H2
            textStyle="text-base text-center tablet:text-lg"
            bold={false}
            className="text-gray-200 text"
          >
            КРАСНОЯРСК
          </H2>
          <H3
            className="mt-10 text-gray-200"
            // style={{ textShadow: '1px 1px 1px #ffffff' }}
          >
            {'Современное уникальное шоу'}
            <br />
            {'для любого события'}
            <br />
            {'и в любом месте'}
          </H3>
        </div>
        {/* <div className="w-full tablet:w-[80%] laptop:w-[65%]">
          <div className="relative pt-[56.25%] w-full">
            <iframe
              className="absolute top-0 bottom-0 left-0 right-0 w-full h-fulll"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/fAabXGZroCA"
              title="Фокусник иллюзионист на праздник Красноярск Алексей Белинский"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div> */}
        {/* <div className="flex justify-center flex-1 max-h-[350px]">
          <img
            className="object-contain max-w-[90%] laptop:max-w-[100%] h-full"
            src={'/img/logo.webp'}
            alt="polovinka_uspeha"
            // width="100%"
            // height="100%"
          />
        </div>
        <div className="flex flex-col justify-between gap-y-2">
          <H1
            style={{ textShadow: '1px 1px 2px black' }}
            // style={{ fontSize: '6vw', lineHeight: '5vw' }}
          >
            Центр осознанных знакомств
          </H1>
          <H4 style={{ textShadow: '1px 1px 2px black' }} bold={false}>
            г.Красноярск
          </H4>
          <H3
            // className="font-thin"
            style={{ textShadow: '1px 1px 2px black' }}
          >
            Уникальные форматы знакомств
            <br />
            для поиска своей второй половинки
          </H3>
        </div> */}
        {/* {!userIsLogged && (
          <Link
            href={{
              pathname: '/login',
              query: { registration: true },
            }}
            shallow
          >
            <PulseButton
              className="mt-4"
              title="Зарегистрироваться"
              onClick={() =>
                router.push('./login?registration=true', '', { shallow: true })
              }
            />
          </Link>
        )} */}
        <PulseButton
          className="mt-4"
          title="Оставить заявку"
          onClick={() => modalsFunc.request.add()}
        />
      </div>
    </div>
  )
}

export default TitleBlock
