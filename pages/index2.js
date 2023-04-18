// import dbConnect from '@utils/dbConnect'
// import DeviceCheck from '@components/DeviceCheck'
// import { H1, H2, H3, H4, P } from '@components/tags'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {
//   fetchingAdditionalBlocks,
//   fetchingDirections,
//   fetchingEvents,
//   fetchingEventsUsers,
//   fetchingPayments,
//   fetchingReviews,
//   fetchingSiteSettings,
//   fetchingUsers,
// } from '@helpers/fetchers'
import Header from '@layouts/Header'
// import { getSession } from 'next-auth/react'
import Head from 'next/head'
// import DirectionsBlock from '@blocks/DirectionsBlock'
import ContactsBlock from '@blocks/ContactsBlock'
// import ReviewsBlock from '@blocks/ReviewsBlock'
// import AdditionalBlocks from '@blocks/AdditionalBlocks'
// import EventsBlock from '@blocks/EventsBlock'
import AboutBlock from '@blocks/AboutBlock'
import TitleBlock from '@blocks/TitleBlock'
// import fetchProps from '@server/fetchProps'
import StateLoader from '@components/StateLoader'
// import getServerSidePropsFunc from '@server/getServerSidePropsFunc'
import ProductionBlock from '@blocks/ProductionBlock'
import GalleryBlock from '@blocks/GalleryBlock'
import { H1 } from '@components/tags'
import { Button } from '@mui/material'
// import ModalsPortal from '@layouts/modals/ModalsPortal'
// import Script from 'next/script'
// import filteredEventsSelector from '@state/selectors/filteredEventsSelector'
// import { useRecoilValue } from 'recoil'
// import filteredDirectionsSelector from '@state/selectors/filteredDirectionsSelector'
// import Modal from '@mui/material/Modal'
// import { useState } from 'react'

// const ZakazModal = () => {
//   const [isShowing, setIsShowing] = useState(false)

//   return (
//     <Modal
//       open={isShowing}
//       onClose={() => setIsShowing(false)}
//       aria-labelledby="modal-modal-title"
//       aria-describedby="modal-modal-description"
//     >
//       <div
//         style={{
//           position: 'absolute',
//           top: '50%',
//           left: '50%',
//           transform: 'translate(-50%, -50%)',
//           width: 400,
//           backgroundColor: 'white',
//           border: '2px solid #000',
//           boxShadow: 24,
//           padding: 4,
//         }}
//       >
//         <div>Text in a modal</div>
//         <div>
//           Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//         </div>
//       </div>
//     </Modal>
//   )
// }

export default function Home(props) {
  // const filteredEvents = useRecoilValue(filteredEventsSelector)
  // const filteredDirections = useRecoilValue(filteredDirectionsSelector)

  // const directionsBlocksInverse = filteredEvents.length > 0
  // const additionalBlocksInverse =
  //   ((directionsBlocksInverse ? 1 : 0) + filteredDirections.length) % 2 === 0

  return (
    <>
      <Head>
        <title>{`Иллюзионист Алексей Белинский"`}</title>
        <meta
          name="description"
          content="Современное уникальное иллюзионное шоу на любом событии"
        />
        {/* <Script
          dangerouslySetInnerHTML={{
            __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(92601771, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true
                });`,
          }}
        />
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/92601771"
              style="position:absolute; left:-9999px;"
              alt=""
            />
          </div>
        </noscript> */}
      </Head>
      {/* <StateLoader className="max-h-screen" {...props}> */}
      <StateLoader noLoader className="max-h-screen text-white" {...props}>
        <div
          className="flex px-12 py-4"
          style={{
            backgroundRepeat: 'repeat',
            backgroundImage: 'url("/images/dark_embroidery.jpg")',
          }}
        >
          <div className="flex flex-col flex-1">
            <h1 className="text-2xl">Фокусник-иллюзионист Красноярск</h1>
            <p className="text-6xl font-bold">Алексей</p>
            <p className="text-6xl font-bold">Белинский</p>
          </div>
          <div className="flex flex-col items-end justify-between flex-1 text-5xl">
            <a
              className="mt-3 text-4xl text-white no-underline duration-300 hover:text-general"
              href="tel:+79138370020"
            >
              8-913-837-00-20
            </a>
            <h1 className="px-5 py-1 text-lg border border-white w-fit rounded-xl">
              выезд в любой город
            </h1>
          </div>
        </div>
        <div className="sticky top-0 z-50">
          <div
            className="flex items-center px-12 py-2 gap-x-2"
            style={{
              backgroundRepeat: 'repeat',
              backgroundImage: 'url("/images/mochagrunge.jpg")',
            }}
          >
            <img
              src="/images/logo.png"
              className="h-[40px] text-shadow-2xl drop-shadow-2xl"
            />
            <div className="flex flex-col -mt-1 leading-3 text-shadow-2xl">
              <span className="text-2xl font-bold">cigam.ru</span>
              <span>современное шоу</span>
            </div>
            <div className="flex flex-1">
              <div className="flex items-center flex-1 justify-evenly">
                <div className="text-lg font-bold text-shadow-2xl">
                  Для взрослых
                </div>
                <div className="text-lg font-bold text-shadow-2xl">
                  Для детей
                </div>
                <div className="text-lg font-bold text-shadow-2xl">
                  Обучение фокусам
                </div>
              </div>
              <button className="font-bold px-6 py-2 text-xl duration-300 border-2 rounded-3xl hover:bg-[#F0C343] border-[#F0C343] hover:text-black">
                Оставить заявку
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center px-12 py-5"
          style={{
            backgroundRepeat: 'repeat',
            backgroundImage: 'url("/images/squared_metal.jpg")',
          }}
        >
          <iframe
            class="actAsDiv"
            width="656"
            height="369"
            src="//www.youtube.com/embed/fAabXGZroCA?autoplay=1&loop=0&showinfo=0&theme=light&color=white&controls=1&modestbranding=0&start=0&fs=1&iv_load_policy=3&wmode=transparent&rel=0"
            frameborder="0"
            allowfullscreen
          />
        </div>
        <div className="flex w-11/12 px-12 pt-2 text-xl text-black">
          <div className="flex flex-col flex-1 mt-12 leading-5 gap-y-4">
            <p className="text-5xl">Опыт работы более 18 лет</p>
            <div className="flex items-center gap-x-4">
              <img
                src="/images/merlin.png"
                // className="h-[40px] text-shadow-2xl drop-shadow-2xl"
              />
              <div className="font-bold">
                {
                  'Стал обладателем Высшей международной награды в области иллюзионного искусства - кубка Мерлина (подробнее про кубок)'
                }
              </div>
            </div>
            <div>
              Провел более 1500 выступлений разного масштаба: от семейного
              формата до больших шоу-программ
            </div>

            <div>Участник телевизионного шоу "Все, кроме обычного" на ТВ3</div>

            <div>
              Стал двукратным победителем Всероссийского конкурса "Micromagic"
            </div>

            <div>Долгое время успешно гастролировал за границей</div>

            <div>
              Открыл школу по фокусам и сценическому искусству для детей
              -Академию Юных Волшебников
            </div>

            <div>Член закрытого клуба фокусников России и СНГ</div>
          </div>
          <div>
            <img
              src="/images/foto_vko.png"
              // className="h-[40px] text-shadow-2xl drop-shadow-2xl"
            />
          </div>
        </div>
        <div className="z-0">
          <div class="clearfix borderbox" id="page">
            {/* <!-- group --> */}
            <div class="clearfix grpelem" id="pu41263">
              {/* <!-- column --> */}
              <div
                class="size_fixed colelem"
                id="u41263"
                data-sizePolicy="fixed"
                data-pintopage="page_fixedLeft"
              >
                {/* <!-- custom html --> */}
              </div>
              <div
                class="size_fixed colelem"
                id="u41258"
                data-sizePolicy="fixed"
                data-pintopage="page_fixedLeft"
              >
                {/* <!-- custom html --> */}
              </div>
            </div>
            <div class="clearfix grpelem" id="pu15647">
              {/* <!-- column --> */}
              <div class="browser_width colelem" id="u15647-bw">
                <div id="u15647">
                  {/* <!-- column --> */}
                  <div class="clearfix" id="u15647_align_to_page">
                    <a
                      class="anchor_item colelem"
                      id="home"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    ></a>
                    <div class="clearfix colelem" id="pu15671-4">
                      {/* <!-- group --> */}
                      <a
                        class="clearfix nonblock nontext grpelem"
                        id="u15671-4"
                        href="http://cigam.ru"
                        data-IBE-flags="txtStyleSrc"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- content --> */}
                        <h1>Фокусник - иллюзионист Красноярск</h1>
                      </a>
                      <a
                        class="nonblock nontext clip_frame grpelem"
                        id="u21912"
                        href="http://t.me/escalion"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u21912_img"
                          src="images/87413%20%d0%ba%d0%be%d0%bf%d0%b8%d1%8f.png?crc=4152229393"
                          alt=""
                          width="35"
                          height="35"
                        />
                      </a>
                      <a
                        class="nonblock nontext clip_frame grpelem"
                        id="u21892"
                        href="https://api.whatsapp.com/send?phone=+79138370020"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u21892_img"
                          src="images/whatsapp_png14%20%d0%ba%d0%be%d0%bf%d0%b8%d1%8f.png?crc=3826714409"
                          alt=""
                          width="35"
                          height="35"
                        />
                      </a>
                      <a
                        class="nonblock nontext clip_frame grpelem"
                        id="u21902"
                        href="viber://chat:+79138370020"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u21902_img"
                          src="images/1485969384-vibersocialnetworkbrandlogo_78890%20%d0%ba%d0%be%d0%bf%d0%b8%d1%8f.png?crc=451936327"
                          alt=""
                          width="32"
                          height="35"
                        />
                      </a>
                      <a
                        class="clearfix nonblock nontext grpelem"
                        id="u21922-4"
                        href="tel:+79138370020"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- content --> */}
                        <p>
                          <span id="u21922">8-913-837-00-20</span>
                        </p>
                      </a>
                    </div>
                    <div class="clearfix colelem" id="ppu15669-6">
                      {/* <!-- group --> */}
                      <div class="clearfix grpelem" id="pu15669-6">
                        {/* <!-- column --> */}
                        <a
                          class="clearfix shadow nonblock nontext rounded-corners popup-form colelem"
                          id="u15669-6"
                          href="http://cigam.ru"
                          data-sizePolicy="fixed"
                          data-pintopage="page_fixedLeft"
                        >
                          {/* <!-- content --> */}
                          <p>Алексей</p>
                          <p>Белинский</p>
                        </a>
                        <div
                          class="clearfix shadow popup-form rounded-corners colelem"
                          id="u32869-4"
                          data-IBE-flags="txtStyleSrc"
                          data-sizePolicy="fixed"
                          data-pintopage="page_fixedLeft"
                        >
                          {/* <!-- content --> */}
                          <h2>выезд на мероприятие в любой город</h2>
                        </div>
                      </div>
                      <div class="clearfix grpelem" id="pu15670-4">
                        {/* <!-- column --> */}
                        <a
                          class="clearfix nonblock nontext colelem"
                          id="u15670-4"
                          href="tel:+73912562020"
                          data-sizePolicy="fixed"
                          data-pintopage="page_fixedLeft"
                        >
                          {/* <!-- content --> */}
                          <p>8(391)256-20-20</p>
                        </a>
                        <div
                          class="clearfix PamphletWidget allow_click_through colelem"
                          id="pamphletu15648"
                          data-visibility="changed"
                          style={{ visibility: 'hidden' }}
                          data-sizePolicy="fluidWidth"
                          data-pintopage="page_fixedLeft"
                        >
                          {/* <!-- none box --> */}
                          <div
                            class="popup_anchor allow_click_through grpelem"
                            data-col-pos="0"
                            id="u15659popup"
                          >
                            <div
                              class="clearfix ContainerGroup"
                              data-col-pos="0"
                              id="u15659"
                              data-sizePolicy="fixed"
                              data-pintopage="page_fixedLeft"
                            >
                              {/* <!-- stack box --> */}
                              <div
                                class="clearfix Container grpelem"
                                data-col-pos="0"
                                id="u15666"
                                data-sizePolicy="fixed"
                                data-pintopage="page_fixedLeft"
                              >
                                {/* <!-- group --> */}
                                <div
                                  class="clearfix grpelem"
                                  id="u15667-4"
                                  data-IBE-flags="txtStyleSrc"
                                  data-sizePolicy="fixed"
                                  data-pintopage="page_fixedLeft"
                                >
                                  {/* <!-- content --> */}
                                  <p>
                                    «Удивлю вас и ваших гостей, до глубины души
                                    и ярких порывов сердца!»
                                  </p>
                                </div>
                              </div>
                              <div
                                class="clearfix Container invi grpelem"
                                data-col-pos="1"
                                id="u15664"
                                data-sizePolicy="fixed"
                                data-pintopage="page_fixedLeft"
                              >
                                {/* <!-- group --> */}
                                <div
                                  class="clearfix grpelem"
                                  id="u15665-4"
                                  data-IBE-flags="txtStyleSrc"
                                  data-sizePolicy="fixed"
                                  data-pintopage="page_fixedLeft"
                                >
                                  {/* <!-- content --> */}
                                  <p>
                                    «Покажу знаменитый фокус с исчезновением
                                    скверного настроения.»
                                  </p>
                                </div>
                              </div>
                              <div
                                class="clearfix Container invi grpelem"
                                data-col-pos="2"
                                id="u15662"
                                data-sizePolicy="fixed"
                                data-pintopage="page_fixedLeft"
                              >
                                {/* <!-- group --> */}
                                <div
                                  class="clearfix grpelem"
                                  id="u15663-4"
                                  data-IBE-flags="txtStyleSrc"
                                  data-sizePolicy="fixed"
                                  data-pintopage="page_fixedLeft"
                                >
                                  {/* <!-- content --> */}
                                  <p>
                                    «Удивлю вас трюками которых все еще никогда
                                    не видели.»
                                  </p>
                                </div>
                              </div>
                              <div
                                class="clearfix Container invi grpelem"
                                data-col-pos="3"
                                id="u15660"
                                data-sizePolicy="fixed"
                                data-pintopage="page_fixedLeft"
                              >
                                {/* <!-- group --> */}
                                <div
                                  class="clearfix grpelem"
                                  id="u15661-4"
                                  data-IBE-flags="txtStyleSrc"
                                  data-sizePolicy="fixed"
                                  data-pintopage="page_fixedLeft"
                                >
                                  {/* <!-- content --> */}
                                  <p>
                                    «Разожгу эмоции на празднике с помощью
                                    фокусов, трюков и настоящей магии.»
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            class="clearfix ThumbGroup grpelem"
                            data-col-pos="1"
                            id="u15652"
                            data-sizePolicy="fluidWidth"
                            data-pintopage="page_fixedLeft"
                          >
                            {/* <!-- none box --> */}
                            <div
                              class="popup_anchor allow_click_through grpelem"
                              data-col-pos="0"
                              id="u15655popup"
                            >
                              <div
                                class="Thumb popup_element rounded-corners"
                                data-col-pos="0"
                                id="u15655"
                                data-sizePolicy="fixed"
                                data-pintopage="page_fixedLeft"
                              >
                                {/* <!-- simple frame --> */}
                              </div>
                            </div>
                            <div
                              class="popup_anchor allow_click_through grpelem"
                              data-col-pos="1"
                              id="u15656popup"
                            >
                              <div
                                class="Thumb popup_element rounded-corners"
                                data-col-pos="1"
                                id="u15656"
                                data-sizePolicy="fixed"
                                data-pintopage="page_fixedLeft"
                              >
                                {/* <!-- simple frame --> */}
                              </div>
                            </div>
                            <div
                              class="popup_anchor allow_click_through grpelem"
                              data-col-pos="2"
                              id="u15653popup"
                            >
                              <div
                                class="Thumb popup_element rounded-corners"
                                data-col-pos="2"
                                id="u15653"
                                data-sizePolicy="fixed"
                                data-pintopage="page_fixedLeft"
                              >
                                {/* <!-- simple frame --> */}
                              </div>
                            </div>
                            <div
                              class="popup_anchor allow_click_through grpelem"
                              data-col-pos="3"
                              id="u15654popup"
                            >
                              <div
                                class="Thumb popup_element rounded-corners"
                                data-col-pos="3"
                                id="u15654"
                                data-sizePolicy="fixed"
                                data-pintopage="page_fixedLeft"
                              >
                                {/* <!-- simple frame --> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="browser_width colelem" id="u15550-bw">
                <div id="u15550">
                  {/* <!-- group --> */}
                  <div class="clearfix" id="u15550_align_to_page">
                    <a
                      class="nonblock nontext grpelem"
                      id="u15552"
                      href="http://cigam.ru"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- rasterized frame --> */}
                      <img
                        id="u15552_img"
                        alt=""
                        width="56"
                        height="56"
                        src="images/3-u15552.png?crc=234910582"
                      />
                    </a>
                    <a
                      class="clearfix nonblock nontext grpelem"
                      id="u15551-6"
                      href="http://cigam.ru"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p id="u15551-2">cigam.ru</p>
                      <p id="u15551-4">обратная сторона магии</p>
                    </a>
                    <div class="clearfix grpelem" id="u15580">
                      {/* <!-- group --> */}
                      <nav
                        class="clearfix MenuBar grpelem"
                        id="menuu15581"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- horizontal box --> */}
                        <div
                          class="clearfix MenuItemContainer grpelem"
                          id="u15582"
                        >
                          {/* <!-- vertical box --> */}
                          <a
                            class="clearfix nonblock nontext MenuItem MenuItemWithSubMenu colelem"
                            id="u15583"
                            href="show_dlya_vzroslih.html"
                            data-href="page:U3441"
                          >
                            {/* <!-- horizontal box --> */}
                            <div
                              class="clearfix MenuItemLabel NoWrap grpelem"
                              id="u15585-4"
                              data-IBE-flags="txtStyleSrc"
                              data-sizePolicy="fixed"
                              data-pintopage="page_fixedLeft"
                            >
                              {/* <!-- content --> */}
                              <p>Для взрослых</p>
                            </div>
                          </a>
                          <div class="clearfix SubMenu MenuLevel1" id="u15587">
                            {/* <!-- vertical box --> */}
                            <div
                              class="clearfix SubMenuView colelem"
                              id="u15588"
                            >
                              {/* <!-- vertical box --> */}
                              <div
                                class="position_content"
                                id="u15588_position_content"
                              >
                                <div
                                  class="clearfix MenuItemContainer colelem"
                                  id="u15589"
                                >
                                  {/* <!-- horizontal box --> */}
                                  <a
                                    class="clearfix nonblock nontext MenuItem MenuItemWithSubMenu grpelem"
                                    id="u15590"
                                    href="fokusnik_na_svadbu.html"
                                    data-href="page:U7366"
                                  >
                                    {/* <!-- horizontal box --> */}
                                    <div
                                      class="clearfix MenuItemLabel NoWrap grpelem"
                                      id="u15592-4"
                                      data-IBE-flags="txtStyleSrc"
                                      data-sizePolicy="fixed"
                                      data-pintopage="page_fixedLeft"
                                    >
                                      {/* <!-- content --> */}
                                      <p>Фокусник на свадьбу</p>
                                    </div>
                                  </a>
                                </div>
                                <div
                                  class="clearfix MenuItemContainer colelem"
                                  id="u15610"
                                >
                                  {/* <!-- horizontal box --> */}
                                  <a
                                    class="clearfix nonblock nontext MenuItem MenuItemWithSubMenu grpelem"
                                    id="u15611"
                                    href="fokusnik_na_ubilei.html"
                                    data-href="page:U7781"
                                  >
                                    {/* <!-- horizontal box --> */}
                                    <div
                                      class="clearfix MenuItemLabel NoWrap grpelem"
                                      id="u15612-4"
                                      data-IBE-flags="txtStyleSrc"
                                      data-sizePolicy="fixed"
                                      data-pintopage="page_fixedLeft"
                                    >
                                      {/* <!-- content --> */}
                                      <p>Фокусник на юбилей</p>
                                    </div>
                                  </a>
                                </div>
                                <div
                                  class="clearfix MenuItemContainer colelem"
                                  id="u15596"
                                >
                                  {/* <!-- horizontal box --> */}
                                  <a
                                    class="clearfix nonblock nontext MenuItem MenuItemWithSubMenu grpelem"
                                    id="u15599"
                                    href="fokusnik_na_den_rozhdeniya_vzroslym.html"
                                    data-href="page:U8193"
                                  >
                                    {/* <!-- horizontal box --> */}
                                    <div
                                      class="clearfix MenuItemLabel NoWrap grpelem"
                                      id="u15602-4"
                                      data-IBE-flags="txtStyleSrc"
                                      data-sizePolicy="fixed"
                                      data-pintopage="page_fixedLeft"
                                    >
                                      {/* <!-- content --> */}
                                      <p>Фокусник на день рождения</p>
                                    </div>
                                  </a>
                                </div>
                                <div
                                  class="clearfix MenuItemContainer colelem"
                                  id="u15603"
                                >
                                  {/* <!-- horizontal box --> */}
                                  <a
                                    class="clearfix nonblock nontext MenuItem MenuItemWithSubMenu grpelem"
                                    id="u15606"
                                    href="fokusnik_na_korporativ.html"
                                    data-href="page:U8605"
                                  >
                                    {/* <!-- horizontal box --> */}
                                    <div
                                      class="clearfix MenuItemLabel NoWrap grpelem"
                                      id="u15609-4"
                                      data-IBE-flags="txtStyleSrc"
                                      data-sizePolicy="fixed"
                                      data-pintopage="page_fixedLeft"
                                    >
                                      {/* <!-- content --> */}
                                      <p>Фокусник на корпоратив</p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                      <nav
                        class="clearfix MenuBar grpelem"
                        id="menuu15617"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- horizontal box --> */}
                        <div
                          class="clearfix MenuItemContainer grpelem"
                          id="u15618"
                        >
                          {/* <!-- vertical box --> */}
                          <a
                            class="clearfix nonblock nontext MenuItem MenuItemWithSubMenu colelem"
                            id="u15619"
                            href="detskiy_prazdnik.html"
                            data-href="page:U6327"
                          >
                            {/* <!-- horizontal box --> */}
                            <div
                              class="clearfix MenuItemLabel NoWrap grpelem"
                              id="u15621-4"
                              data-IBE-flags="txtStyleSrc"
                              data-sizePolicy="fixed"
                              data-pintopage="page_fixedLeft"
                            >
                              {/* <!-- content --> */}
                              <p>Для детей</p>
                            </div>
                          </a>
                          <div class="clearfix SubMenu MenuLevel1" id="u15623">
                            {/* <!-- vertical box --> */}
                            <div
                              class="clearfix SubMenuView colelem"
                              id="u15624"
                            >
                              {/* <!-- vertical box --> */}
                              <div
                                class="position_content"
                                id="u15624_position_content"
                              >
                                <div
                                  class="clearfix MenuItemContainer colelem"
                                  id="u15625"
                                >
                                  {/* <!-- horizontal box --> */}
                                  <a
                                    class="clearfix nonblock nontext MenuItem MenuItemWithSubMenu grpelem"
                                    id="u15628"
                                    href="fokusnik_na_den_rozhdeniya_rebenka.html"
                                    data-href="page:U9008"
                                  >
                                    {/* <!-- horizontal box --> */}
                                    <div
                                      class="clearfix MenuItemLabel NoWrap grpelem"
                                      id="u15631-4"
                                      data-IBE-flags="txtStyleSrc"
                                      data-sizePolicy="fixed"
                                      data-pintopage="page_fixedLeft"
                                    >
                                      {/* <!-- content --> */}
                                      <p>Фокусник на день рождения</p>
                                    </div>
                                  </a>
                                </div>
                                <div
                                  class="clearfix MenuItemContainer colelem"
                                  id="u15632"
                                >
                                  {/* <!-- horizontal box --> */}
                                  <a
                                    class="clearfix nonblock nontext MenuItem MenuItemWithSubMenu grpelem"
                                    id="u15635"
                                    href="fokusnik_na_vipusknoi.html"
                                    data-href="page:U9411"
                                  >
                                    {/* <!-- horizontal box --> */}
                                    <div
                                      class="clearfix MenuItemLabel NoWrap grpelem"
                                      id="u15637-4"
                                      data-IBE-flags="txtStyleSrc"
                                      data-sizePolicy="fixed"
                                      data-pintopage="page_fixedLeft"
                                    >
                                      {/* <!-- content --> */}
                                      <p>Фокусник на выпускной</p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                      <nav
                        class="clearfix MenuBar grpelem"
                        id="menuu15639"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- horizontal box --> */}
                        <div
                          class="clearfix MenuItemContainer grpelem"
                          id="u15640"
                        >
                          {/* <!-- vertical box --> */}
                          <a
                            class="clearfix nonblock nontext MenuItem MenuItemWithSubMenu colelem"
                            id="u15643"
                            href="obuchenie_fokusam.html"
                            data-href="page:U6738"
                          >
                            {/* <!-- horizontal box --> */}
                            <div
                              class="clearfix MenuItemLabel NoWrap grpelem"
                              id="u15645-4"
                              data-IBE-flags="txtStyleSrc"
                              data-sizePolicy="fixed"
                              data-pintopage="page_fixedLeft"
                            >
                              {/* <!-- content --> */}
                              <p>Обучение фокусам</p>
                            </div>
                          </a>
                          <div class="clearfix SubMenu MenuLevel1" id="u15641">
                            {/* <!-- vertical box --> */}
                            <div
                              class="clearfix SubMenuView colelem"
                              id="u15642"
                            >
                              {/* <!-- vertical box --> */}
                              <div
                                class="position_content"
                                id="u15642_position_content"
                              >
                                <div
                                  class="clearfix MenuItemContainer colelem"
                                  id="u22510"
                                >
                                  {/* <!-- horizontal box --> */}
                                  <a
                                    class="clearfix nonblock nontext MenuItem MenuItemWithSubMenu grpelem"
                                    id="u22512"
                                    href="master_klass.html"
                                    data-href="page:U22508"
                                  >
                                    {/* <!-- horizontal box --> */}
                                    <div
                                      class="clearfix MenuItemLabel NoWrap grpelem"
                                      id="u22516-4"
                                      data-IBE-flags="txtStyleSrc"
                                      data-sizePolicy="fixed"
                                      data-pintopage="page_fixedLeft"
                                    >
                                      {/* <!-- content --> */}
                                      <p>Мастер-Класс</p>
                                    </div>
                                  </a>
                                </div>
                                <div
                                  class="clearfix MenuItemContainer colelem"
                                  id="u22576"
                                >
                                  {/* <!-- horizontal box --> */}
                                  <a
                                    class="clearfix nonblock nontext MenuItem MenuItemWithSubMenu grpelem"
                                    id="u22579"
                                    href="shkola_volshebstva.html"
                                    data-href="page:U22290"
                                  >
                                    {/* <!-- horizontal box --> */}
                                    <div
                                      class="clearfix MenuItemLabel NoWrap grpelem"
                                      id="u22581-4"
                                      data-IBE-flags="txtStyleSrc"
                                      data-sizePolicy="fixed"
                                      data-pintopage="page_fixedLeft"
                                    >
                                      {/* <!-- content --> */}
                                      <p>Школа Волшебства</p>
                                    </div>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </nav>
                    </div>
                    <div
                      class="clearfix shadow popup-form grpelem"
                      id="u39509-4"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>Оставить заявку</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="clearfix colelem" id="pu18192">
                {/* <!-- group --> */}
                <div class="browser_width grpelem" id="u18192-bw">
                  <div id="u18192">
                    {/* <!-- group --> */}
                    <div class="clearfix" id="u18192_align_to_page">
                      {/* <!-- m_editable region-id="editable-static-tag-U18205-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u18205"
                        data-muse-uid="U18205"
                        data-muse-type="img_frame"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u18205_img"
                          src="images/bg_separator.png?crc=111615973"
                          alt=""
                          width="920"
                          height="115"
                          data-muse-src="images/bg_separator.png?crc=111615973"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                      <div class="clearfix shadow grpelem" id="u35380">
                        {/* <!-- group --> */}
                        <div
                          class="size_fixed grpelem"
                          id="u18179"
                          data-sizePolicy="fixed"
                          data-pintopage="page_fixedLeft"
                        >
                          {/* <!-- custom html --> */}

                          <iframe
                            class="actAsDiv"
                            width="656"
                            height="369"
                            src="//www.youtube.com/embed/fAabXGZroCA?autoplay=1&loop=0&showinfo=0&theme=light&color=white&controls=1&modestbranding=0&start=0&fs=1&iv_load_policy=3&wmode=transparent&rel=0"
                            frameborder="0"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                      <div class="grpelem" id="u15547">
                        {/* <!-- custom html --> */}
                        <a
                          class="nonblock nontext grpelem"
                          rel="nofollow"
                          href="https://www.facebook.com/MagBelinskiy"
                        >
                          <img width="40" height="80" src="images/FB.png" />
                        </a>
                      </div>
                      <div class="grpelem" id="u15548">
                        {/* <!-- custom html --> */}
                        <a
                          class="nonblock nontext grpelem"
                          rel="nofollow"
                          href="https://www.youtube.com/channel/UCDIc8uwywRYyYpdgzbW1CQw"
                        >
                          <img
                            width="40"
                            height="80"
                            src="images/YouTube.png"
                          />
                        </a>
                      </div>
                      <div class="grpelem" id="u15549">
                        {/* <!-- custom html --> */}
                        <a
                          class="nonblock nontext grpelem"
                          rel="nofollow"
                          href="https://www.instagram.com/magbelinskiy"
                        >
                          <img
                            width="40"
                            height="80"
                            src="images/Instagramm.png"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="grpelem" id="u18131">
                  {/* <!-- custom html --> */}
                  <a
                    class="nonblock nontext grpelem"
                    rel="nofollow"
                    href="https://www.ok.ru/escalion"
                  >
                    <img width="40" height="80" src="images/OK.png" />
                  </a>
                </div>
                <div class="grpelem" id="u18589">
                  {/* <!-- custom html --> */}
                  <a
                    class="nonblock nontext grpelem"
                    rel="nofollow"
                    href="https://vk.com/magbelinskiy"
                  >
                    <img width="40" height="80" src="images/VK.png" />
                  </a>
                </div>
              </div>
              <div class="browser_width colelem" id="u407-bw">
                <div id="u407">
                  {/* <!-- group --> */}
                  <div class="clearfix" id="u407_align_to_page">
                    {/* <!-- m_editable region-id="editable-static-tag-U295-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,txtStyleTarget" --> */}
                    <div
                      class="clearfix grpelem"
                      id="u295-6"
                      data-muse-uid="U295"
                      data-muse-type="txt_frame"
                      data-IBE-flags="txtStyleSrc"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p id="u295-2">Опыт работы более 16 лет.</p>
                      <p id="u295-4">За это время:</p>
                    </div>
                    {/* <!-- /m_editable --> */}
                    {/* <!-- m_editable region-id="editable-static-tag-U296-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,txtStyleTarget" --> */}
                    <div
                      class="clearfix grpelem"
                      id="u296-24"
                      data-muse-uid="U296"
                      data-muse-type="txt_frame"
                      data-IBE-flags="txtStyleSrc"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>Провел более 1500 выступлений разного масштаба:</p>
                      <p>от семейного формата до больших шоу-программ</p>
                      <p>&nbsp;</p>
                      <p>
                        Участник&nbsp; телевизионного шоу &quot;Все, кроме
                        обычного&quot; на ТВ3
                      </p>
                      <p>&nbsp;</p>
                      <p>
                        Стал двукратным победителем Всероссийского
                        конкурса&nbsp; &quot;Micromagic
                        <span id="u296-10">&quot;</span>
                      </p>
                      <p>&nbsp;</p>
                      <p>Долгое время успешно гастролировал за границей</p>
                      <p>&nbsp;</p>
                      <p>
                        Открыл школу по фокусам и сценическому искусству для
                        детей -
                        <a class="nonblock" href="http://MagicAcademyKrsk.ru">
                          Академию Юных Волшебников
                        </a>
                      </p>
                      <p>&nbsp;</p>
                      <p>Член закрытого клуба фокусников России и СНГ</p>
                    </div>
                    {/* <!-- /m_editable --> */}
                    {/* <!-- m_editable region-id="editable-static-tag-U18195-BP_infinity" template="index.html" data-type="image" --> */}
                    <div
                      class="clip_frame grpelem"
                      id="u18195"
                      data-muse-uid="U18195"
                      data-muse-type="img_frame"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- image --> */}
                      <img
                        class="block"
                        id="u18195_img"
                        src="images/bg_separator.png?crc=111615973"
                        alt=""
                        width="920"
                        height="115"
                        data-muse-src="images/bg_separator.png?crc=111615973"
                      />
                    </div>
                    {/* <!-- /m_editable --> */}
                    {/* <!-- m_editable region-id="editable-static-tag-U21951-BP_infinity" template="index.html" data-type="image" --> */}
                    <div
                      class="clip_frame grpelem"
                      id="u21951"
                      data-muse-uid="U21951"
                      data-muse-type="img_frame"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- image --> */}
                      <img
                        class="block"
                        id="u21951_img"
                        src="images/foto1.png?crc=3961708167"
                        alt=""
                        width="315"
                        height="620"
                        data-muse-src="images/foto1.png?crc=3961708167"
                      />
                    </div>
                    {/* <!-- /m_editable --> */}
                    <div class="clearfix shadow grpelem" id="u34899">
                      {/* <!-- group --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U441-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,txtStyleTarget" --> */}
                      <div
                        class="clearfix grpelem"
                        id="u441-10"
                        data-muse-uid="U441"
                        data-muse-type="txt_frame"
                        data-IBE-flags="txtStyleSrc"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- content --> */}
                        <p id="u441-2">«</p>
                        <p id="u441-4">
                          Меня завораживают удивленные лица зрителей.
                        </p>
                        <p id="u441-6">
                          В этот момент их эмоции самые настоящие!
                        </p>
                        <p id="u441-8">»</p>
                      </div>
                      {/* <!-- /m_editable --> */}
                    </div>
                    {/* <!-- m_editable region-id="editable-static-tag-U41693-BP_infinity" template="index.html" data-type="image" --> */}
                    <div
                      class="clip_frame grpelem"
                      id="u41693"
                      data-muse-uid="U41693"
                      data-muse-type="img_frame"
                    >
                      {/* <!-- image --> */}
                      <img
                        class="block"
                        id="u41693_img"
                        src="images/planet-earth.png?crc=4050472591"
                        alt=""
                        data-muse-src="images/planet-earth.png?crc=4050472591"
                        data-heightwidthratio="1"
                        data-image-width="32"
                        data-image-height="32"
                      />
                    </div>
                    {/* <!-- /m_editable --> */}
                    {/* <!-- m_editable region-id="editable-static-tag-U41703-BP_infinity" template="index.html" data-type="image" --> */}
                    <div
                      class="clip_frame grpelem"
                      id="u41703"
                      data-muse-uid="U41703"
                      data-muse-type="img_frame"
                    >
                      {/* <!-- image --> */}
                      <img
                        class="block"
                        id="u41703_img"
                        src="images/loudspeaker.png?crc=19214351"
                        alt=""
                        data-muse-src="images/loudspeaker.png?crc=19214351"
                        data-heightwidthratio="1"
                        data-image-width="32"
                        data-image-height="32"
                      />
                    </div>
                    {/* <!-- /m_editable --> */}
                    {/* <!-- m_editable region-id="editable-static-tag-U41711-BP_infinity" template="index.html" data-type="image" --> */}
                    <div
                      class="clip_frame grpelem"
                      id="u41711"
                      data-muse-uid="U41711"
                      data-muse-type="img_frame"
                    >
                      {/* <!-- image --> */}
                      <img
                        class="block"
                        id="u41711_img"
                        src="images/mortarboard.png?crc=145511092"
                        alt=""
                        data-muse-src="images/mortarboard.png?crc=145511092"
                        data-heightwidthratio="1"
                        data-image-width="32"
                        data-image-height="32"
                      />
                    </div>
                    {/* <!-- /m_editable --> */}
                    {/* <!-- m_editable region-id="editable-static-tag-U41718-BP_infinity" template="index.html" data-type="image" --> */}
                    <div
                      class="clip_frame grpelem"
                      id="u41718"
                      data-muse-uid="U41718"
                      data-muse-type="img_frame"
                    >
                      {/* <!-- image --> */}
                      <img
                        class="block"
                        id="u41718_img"
                        src="images/support.png?crc=3992175400"
                        alt=""
                        data-muse-src="images/support.png?crc=3992175400"
                        data-heightwidthratio="1"
                        data-image-width="32"
                        data-image-height="32"
                      />
                    </div>
                    {/* <!-- /m_editable --> */}
                    {/* <!-- m_editable region-id="editable-static-tag-U41725-BP_infinity" template="index.html" data-type="image" --> */}
                    <div
                      class="clip_frame grpelem"
                      id="u41725"
                      data-muse-uid="U41725"
                      data-muse-type="img_frame"
                    >
                      {/* <!-- image --> */}
                      <img
                        class="block"
                        id="u41725_img"
                        src="images/trophy.png?crc=282925292"
                        alt=""
                        data-muse-src="images/trophy.png?crc=282925292"
                        data-heightwidthratio="1"
                        data-image-width="32"
                        data-image-height="32"
                      />
                    </div>
                    {/* <!-- /m_editable --> */}
                    {/* <!-- m_editable region-id="editable-static-tag-U41743-BP_infinity" template="index.html" data-type="image" --> */}
                    <div
                      class="clip_frame grpelem"
                      id="u41743"
                      data-muse-uid="U41743"
                      data-muse-type="img_frame"
                    >
                      {/* <!-- image --> */}
                      <img
                        class="block"
                        id="u41743_img"
                        src="images/tv.png?crc=47924356"
                        alt=""
                        data-muse-src="images/tv.png?crc=47924356"
                        data-heightwidthratio="1"
                        data-image-width="32"
                        data-image-height="32"
                      />
                    </div>
                    {/* <!-- /m_editable --> */}
                    {/* <!-- m_editable region-id="editable-static-tag-U42063-BP_infinity" template="index.html" data-type="image" --> */}
                    <div
                      class="clip_frame grpelem"
                      id="u42063"
                      data-muse-uid="U42063"
                      data-muse-type="img_frame"
                    >
                      {/* <!-- image --> */}
                      <img
                        class="block"
                        id="u42063_img"
                        src="images/vse_krome_obi4nogo.png?crc=22158051"
                        alt=""
                        data-muse-src="images/vse_krome_obi4nogo.png?crc=22158051"
                        data-heightwidthratio="1.0598290598290598"
                        data-image-width="234"
                        data-image-height="248"
                      />
                    </div>
                    {/* <!-- /m_editable --> */}
                    {/* <!-- m_editable region-id="editable-static-tag-U42487-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,txtStyleTarget" --> */}
                    <div
                      class="clearfix grpelem"
                      id="u42487-7"
                      data-muse-uid="U42487"
                      data-muse-type="txt_frame"
                      data-IBE-flags="txtStyleSrc"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>
                        <span id="u42487">
                          Стал обладателем Высшей международной награды в
                          области иллюзионного искусства - кубка Мерлина (
                        </span>
                        <a
                          class="nonblock"
                          href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%80%D0%BB%D0%B8%D0%BD_(%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%8F)"
                        >
                          <span id="u42487-2">подробнее про кубок</span>
                        </a>
                        <span id="u42487-4">)</span>
                      </p>
                    </div>
                    {/* <!-- /m_editable --> */}
                    {/* <!-- m_editable region-id="editable-static-tag-U42490-BP_infinity" template="index.html" data-type="image" --> */}
                    <div
                      class="clip_frame grpelem"
                      id="u42490"
                      data-muse-uid="U42490"
                      data-muse-type="img_frame"
                    >
                      {/* <!-- image --> */}
                      <img
                        class="block"
                        id="u42490_img"
                        src="images/merlin.png?crc=4282560408"
                        alt=""
                        data-muse-src="images/merlin.png?crc=4282560408"
                        data-heightwidthratio="2.902439024390244"
                        data-image-width="41"
                        data-image-height="119"
                      />
                    </div>
                    {/* <!-- /m_editable --> */}
                  </div>
                </div>
              </div>
              <div class="browser_width colelem" id="u414-bw">
                <div id="u414">
                  {/* <!-- column --> */}
                  <div class="clearfix" id="u414_align_to_page">
                    <div class="clearfix colelem" id="pu299-20">
                      {/* <!-- group --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U299-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,txtStyleTarget" --> */}
                      <div
                        class="clearfix grpelem"
                        id="u299-20"
                        data-muse-uid="U299"
                        data-muse-type="txt_frame"
                        data-IBE-flags="txtStyleSrc"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- content --> */}
                        <h2 id="u299-2">Выступления для взрослых</h2>
                        <h2 id="u299-3">&nbsp;</h2>
                        <h2 id="u299-4">&nbsp;</h2>
                        <h2 id="u299-6">Фокусник на свадьбу</h2>
                        <h2 id="u299-7">&nbsp;</h2>
                        <h2 id="u299-9">Факир на юбилей</h2>
                        <h2 id="u299-10">&nbsp;</h2>
                        <h2 id="u299-14">
                          Маг на день рождения
                          <br />
                          <br />
                        </h2>
                        <h2 id="u299-16">Престидижитатор</h2>
                        <h2 id="u299-18">на корпоратив</h2>
                      </div>
                      {/* <!-- /m_editable --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U495-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u495"
                        data-muse-uid="U495"
                        data-muse-type="img_frame"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u495_img"
                          src="images/bg_separator.png?crc=111615973"
                          alt=""
                          width="920"
                          height="115"
                          data-muse-src="images/bg_separator.png?crc=111615973"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                      <a
                        class="anchor_item grpelem"
                        id="zx"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      ></a>
                      <div class="clearfix shadow grpelem" id="u35396">
                        {/* <!-- group --> */}
                        <div class="grpelem" id="u5011">
                          {/* <!-- custom html --> */}
                          <iframe
                            src="https://player.vimeo.com/video/166707975"
                            width="501"
                            height="281"
                            frameborder="0"
                            webkitallowfullscreen
                            mozallowfullscreen
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                      {/* <!-- m_editable region-id="editable-static-tag-U41753-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u41753"
                        data-muse-uid="U41753"
                        data-muse-type="img_frame"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u41753_img"
                          src="images/marriage.png?crc=141963180"
                          alt=""
                          data-muse-src="images/marriage.png?crc=141963180"
                          data-heightwidthratio="1"
                          data-image-width="32"
                          data-image-height="32"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U41763-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u41763"
                        data-muse-uid="U41763"
                        data-muse-type="img_frame"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u41763_img"
                          src="images/birthday-cake.png?crc=172015027"
                          alt=""
                          data-muse-src="images/birthday-cake.png?crc=172015027"
                          data-heightwidthratio="1"
                          data-image-width="32"
                          data-image-height="32"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U41827-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u41827"
                        data-muse-uid="U41827"
                        data-muse-type="img_frame"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u41827_img"
                          src="images/crown.png?crc=323651341"
                          alt=""
                          data-muse-src="images/crown.png?crc=323651341"
                          data-heightwidthratio="1"
                          data-image-width="32"
                          data-image-height="32"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U41837-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u41837"
                        data-muse-uid="U41837"
                        data-muse-type="img_frame"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u41837_img"
                          src="images/portfolio.png?crc=3804483601"
                          alt=""
                          data-muse-src="images/portfolio.png?crc=3804483601"
                          data-heightwidthratio="1"
                          data-image-width="32"
                          data-image-height="32"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                    </div>
                    {/* <!-- m_editable region-id="editable-static-tag-U4839-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,clickable" data-ice-editable="link" --> */}
                    <a
                      class="clearfix shadow nonblock nontext rounded-corners colelem"
                      id="u4839-4"
                      href="show_dlya_vzroslih.html"
                      data-href="page:U3441"
                      data-muse-uid="U4839"
                      data-muse-type="txt_frame"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>Подробнее про выступления</p>
                    </a>
                    {/* <!-- /m_editable --> */}
                  </div>
                </div>
              </div>
              <div class="browser_width colelem" id="u420-bw">
                <div id="u420">
                  {/* <!-- column --> */}
                  <div class="clearfix" id="u420_align_to_page">
                    <div class="clearfix colelem" id="pu518-21">
                      {/* <!-- group --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U518-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,txtStyleTarget" --> */}
                      <div
                        class="clearfix grpelem"
                        id="u518-21"
                        data-muse-uid="U518"
                        data-muse-type="txt_frame"
                        data-IBE-flags="txtStyleSrc"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- content --> */}
                        <h2 id="u518-2">Выступления для детей</h2>
                        <h2 id="u518-3">&nbsp;</h2>
                        <h2 id="u518-4">&nbsp;</h2>
                        <h2 id="u518-6">Фокусник на утренник</h2>
                        <h2 id="u518-7">&nbsp;</h2>
                        <h2 id="u518-9">Маг на день рождения</h2>
                        <h2 id="u518-10">&nbsp;</h2>
                        <h2 id="u518-12">Иллюзионист</h2>
                        <h2 id="u518-14">на выпускной</h2>
                        <h2 id="u518-15">&nbsp;</h2>
                        <h2 id="u518-17">Мастер-класс от</h2>
                        <h2 id="u518-19">волшебника</h2>
                      </div>
                      {/* <!-- /m_editable --> */}
                      <a
                        class="anchor_item grpelem"
                        id="zc"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      ></a>
                      {/* <!-- m_editable region-id="editable-static-tag-U4438-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u4438"
                        data-muse-uid="U4438"
                        data-muse-type="img_frame"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u4438_img"
                          src="images/bg_separator.png?crc=111615973"
                          alt=""
                          width="920"
                          height="115"
                          data-muse-src="images/bg_separator.png?crc=111615973"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                      <div
                        class="grpelem"
                        id="u4457"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- simple frame --> */}
                      </div>
                      {/* <!-- m_editable region-id="editable-static-tag-U41793-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u41793"
                        data-muse-uid="U41793"
                        data-muse-type="img_frame"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u41793_img"
                          src="images/mortarboard.png?crc=145511092"
                          alt=""
                          data-muse-src="images/mortarboard.png?crc=145511092"
                          data-heightwidthratio="1"
                          data-image-width="32"
                          data-image-height="32"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U41810-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u41810"
                        data-muse-uid="U41810"
                        data-muse-type="img_frame"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u41810_img"
                          src="images/birthday-cake.png?crc=172015027"
                          alt=""
                          data-muse-src="images/birthday-cake.png?crc=172015027"
                          data-heightwidthratio="1"
                          data-image-width="32"
                          data-image-height="32"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U41857-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u41857"
                        data-muse-uid="U41857"
                        data-muse-type="img_frame"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u41857_img"
                          src="images/magician.png?crc=454304293"
                          alt=""
                          data-muse-src="images/magician.png?crc=454304293"
                          data-heightwidthratio="1"
                          data-image-width="32"
                          data-image-height="32"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U41869-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u41869"
                        data-muse-uid="U41869"
                        data-muse-type="img_frame"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u41869_img"
                          src="images/saint-patrick.png?crc=491168886"
                          alt=""
                          data-muse-src="images/saint-patrick.png?crc=491168886"
                          data-heightwidthratio="1"
                          data-image-width="32"
                          data-image-height="32"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                    </div>
                    {/* <!-- m_editable region-id="editable-static-tag-U6332-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,clickable" data-ice-editable="link" --> */}
                    <a
                      class="clearfix shadow nonblock nontext rounded-corners colelem"
                      id="u6332-4"
                      href="detskiy_prazdnik.html"
                      data-href="page:U6327"
                      data-muse-uid="U6332"
                      data-muse-type="txt_frame"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>Подробнее про детское шоу</p>
                    </a>
                    {/* <!-- /m_editable --> */}
                  </div>
                </div>
              </div>
              <div class="browser_width colelem" id="u528-bw">
                <div id="u528">
                  {/* <!-- column --> */}
                  <div class="clearfix" id="u528_align_to_page">
                    <div class="clearfix colelem" id="pu531-23">
                      {/* <!-- group --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U531-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,txtStyleTarget" --> */}
                      <div
                        class="clearfix grpelem"
                        id="u531-23"
                        data-muse-uid="U531"
                        data-muse-type="txt_frame"
                        data-IBE-flags="txtStyleSrc"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- content --> */}
                        <h2 id="u531-2">Обучение и мастер-классы</h2>
                        <h2 id="u531-4">Как для детей так и для взрослых</h2>
                        <h2 id="u531-5">&nbsp;</h2>
                        <h2 id="u531-7">Порадовать близких</h2>
                        <h2 id="u531-8">&nbsp;</h2>
                        <h2 id="u531-10">Удивить девушку</h2>
                        <h2 id="u531-11">&nbsp;</h2>
                        <h2 id="u531-15">
                          Развитие моторики
                          <br />
                          <br />
                        </h2>
                        <h2 id="u531-17">Да и вообще уметь</h2>
                        <h2 id="u531-19">показывать фокусы</h2>
                        <h2 id="u531-21">это невероятно круто</h2>
                      </div>
                      {/* <!-- /m_editable --> */}
                      <a
                        class="anchor_item grpelem"
                        id="zv"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      ></a>
                      {/* <!-- m_editable region-id="editable-static-tag-U29678-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u29678"
                        data-muse-uid="U29678"
                        data-muse-type="img_frame"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u29678_img"
                          src="images/bg_separator.png?crc=111615973"
                          alt=""
                          width="920"
                          height="115"
                          data-muse-src="images/bg_separator.png?crc=111615973"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                      <div class="clearfix shadow grpelem" id="u35383">
                        {/* <!-- group --> */}
                        <div
                          class="size_fixed grpelem"
                          id="u4452"
                          data-sizePolicy="fixed"
                          data-pintopage="page_fixedLeft"
                        >
                          {/* <!-- custom html --> */}

                          <iframe
                            class="actAsDiv"
                            width="501"
                            height="281"
                            src="//www.youtube.com/embed/ZI24dBQaIZE?autoplay=0&loop=0&showinfo=0&theme=light&color=white&controls=1&modestbranding=0&start=0&fs=0&iv_load_policy=3&wmode=transparent&rel=0"
                            frameborder="0"
                            allowfullscreen
                          ></iframe>
                        </div>
                      </div>
                      {/* <!-- m_editable region-id="editable-static-tag-U41817-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u41817"
                        data-muse-uid="U41817"
                        data-muse-type="img_frame"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u41817_img"
                          src="images/balloon.png?crc=3878713472"
                          alt=""
                          data-muse-src="images/balloon.png?crc=3878713472"
                          data-heightwidthratio="1"
                          data-image-width="32"
                          data-image-height="32"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U41847-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u41847"
                        data-muse-uid="U41847"
                        data-muse-type="img_frame"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u41847_img"
                          src="images/playing-cards.png?crc=4137681957"
                          alt=""
                          data-muse-src="images/playing-cards.png?crc=4137681957"
                          data-heightwidthratio="1"
                          data-image-width="32"
                          data-image-height="32"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U41879-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u41879"
                        data-muse-uid="U41879"
                        data-muse-type="img_frame"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u41879_img"
                          src="images/support.png?crc=3992175400"
                          alt=""
                          data-muse-src="images/support.png?crc=3992175400"
                          data-heightwidthratio="1"
                          data-image-width="32"
                          data-image-height="32"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U41896-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u41896"
                        data-muse-uid="U41896"
                        data-muse-type="img_frame"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u41896_img"
                          src="images/victory.png?crc=210797640"
                          alt=""
                          data-muse-src="images/victory.png?crc=210797640"
                          data-heightwidthratio="1"
                          data-image-width="32"
                          data-image-height="32"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                    </div>
                    {/* <!-- m_editable region-id="editable-static-tag-U6903-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,clickable" data-ice-editable="link" --> */}
                    <a
                      class="clearfix shadow nonblock nontext rounded-corners colelem"
                      id="u6903-4"
                      href="obuchenie_fokusam.html"
                      data-href="page:U6738"
                      data-muse-uid="U6903"
                      data-muse-type="txt_frame"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>Подробнее про обучение</p>
                    </a>
                    {/* <!-- /m_editable --> */}
                    {/* <!-- m_editable region-id="editable-static-tag-U32862-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,txtStyleTarget" --> */}
                    <div
                      class="clearfix colelem"
                      id="u32862-8"
                      data-muse-uid="U32862"
                      data-muse-type="txt_frame"
                      data-IBE-flags="txtStyleSrc"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <h2 id="u32862-6">
                        В<span id="u32862-2"> Красноярске</span> открылась
                        уникальная
                        <span id="u32862-4">Школа Волшебства</span> для детей от
                        5 до 14 лет, которая седлает из Вашего ребенка самого
                        настоящего волшебника!
                      </h2>
                    </div>
                    {/* <!-- /m_editable --> */}
                    {/* <!-- m_editable region-id="editable-static-tag-U32865-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,clickable" data-ice-editable="link" --> */}
                    <a
                      class="clearfix shadow nonblock nontext rounded-corners colelem"
                      id="u32865-4"
                      href="shkola_volshebstva.html"
                      data-href="page:U22290"
                      data-muse-uid="U32865"
                      data-muse-type="txt_frame"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>Подробнее про Школу Волшебства</p>
                    </a>
                    {/* <!-- /m_editable --> */}
                  </div>
                </div>
              </div>
              <div class="browser_width colelem" id="u13771-bw">
                <div id="u13771">
                  {/* <!-- group --> */}
                  <div class="clearfix" id="u13771_align_to_page">
                    <div class="clearfix shadow grpelem" id="u35390">
                      {/* <!-- group --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U35393-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,txtStyleTarget" --> */}
                      <div
                        class="clearfix grpelem"
                        id="u35393-23"
                        data-muse-uid="U35393"
                        data-muse-type="txt_frame"
                        data-IBE-flags="txtStyleSrc"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- content --> */}
                        <h2>
                          Торжественное событие – повод организовать что-то
                          незаурядное. На праздник все, независимо от возраста,
                          ждут чудес. Хотите разнообразить торжество, создать
                          магическую атмосферу? Хорошая идея – пригласить
                          фокусника-иллюзиониста на праздник.
                          <br />
                          <br />
                        </h2>
                        <h2>
                          Опытный маг, победитель Всероссийских конкурсов
                          превратит обычный праздник в сказочное веселье.
                          Взмахом волшебной палочки он перенесет взрослых гостей
                          в детство, подарит восхищенную улыбку, а детей научит
                          показывать удивительные фокусы самостоятельно.
                          <br />
                          <br />
                        </h2>
                        <h2>
                          Решение заказать выступление фокусника имеет свои
                          преимущества:
                        </h2>
                        <ul class="list0 nls-None" id="u35393-19">
                          <li>
                            Иллюзионист подберет необычное выступление для
                            любого события: свадьба, корпоратив, юбилей, детский
                            утренник;
                          </li>
                          <li>
                            Удобная форма заказа, доступная цена. Организаторы
                            учтут все ваши пожелания;
                          </li>
                          <li>
                            Активное участие зрителей. Помимо просмотра, можно
                            заказать занимательный мастер-класс и научиться
                            творить чудеса самому.
                            <br />
                            <br />
                          </li>
                        </ul>
                        <h2>
                          Увлекательное выступление покажет обратную сторону
                          магии. Удивите гостей, насладитесь захватывающими
                          фокусами и сами станьте волшебником.
                        </h2>
                      </div>
                      {/* <!-- /m_editable --> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="browser_width colelem" id="u18629-bw">
                <div id="u18629">
                  {/* <!-- column --> */}
                  <div class="clearfix" id="u18629_align_to_page">
                    <div class="clearfix colelem" id="ppu18682-21">
                      {/* <!-- group --> */}
                      <div class="clearfix grpelem" id="pu18682-21">
                        {/* <!-- group --> */}
                        {/* <!-- m_editable region-id="editable-static-tag-U18682-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,txtStyleTarget" --> */}
                        <div
                          class="clearfix grpelem"
                          id="u18682-21"
                          data-muse-uid="U18682"
                          data-muse-type="txt_frame"
                          data-IBE-flags="txtStyleSrc"
                          data-sizePolicy="fixed"
                          data-pintopage="page_fixedLeft"
                        >
                          {/* <!-- content --> */}
                          <h2 id="u18682-2">
                            <span id="u18682">Есть сомнения?</span>
                          </h2>
                          <h2 id="u18682-3">&nbsp;</h2>
                          <h2 id="u18682-4">&nbsp;</h2>
                          <h2 id="u18682-5">&nbsp;</h2>
                          <h2 id="u18682-6">&nbsp;</h2>
                          <h2 id="u18682-7">&nbsp;</h2>
                          <h2 id="u18682-8">&nbsp;</h2>
                          <h2 id="u18682-9">&nbsp;</h2>
                          <h2 id="u18682-10">&nbsp;</h2>
                          <h2 id="u18682-11">&nbsp;</h2>
                          <h2 id="u18682-13">Просто подумайте вот о чем:</h2>
                          <h2 id="u18682-15">
                            — Вам нужно яркое шоу и искреннее удивление гостей?
                          </h2>
                          <h2 id="u18682-17">
                            — Профессиональный фокусник-иллюзионист или
                            аниматор, кто лучше?
                          </h2>
                          <h2 id="u18682-19">
                            — Хотели бы Вы, чтобы Ваши гости вспоминали праздник
                            за долго после его завершения?
                          </h2>
                        </div>
                        {/* <!-- /m_editable --> */}
                        {/* <!-- m_editable region-id="editable-static-tag-U18702-BP_infinity" template="index.html" data-type="image" --> */}
                        <div
                          class="clip_frame grpelem"
                          id="u18702"
                          data-muse-uid="U18702"
                          data-muse-type="img_frame"
                          data-sizePolicy="fixed"
                          data-pintopage="page_fixedLeft"
                        >
                          {/* <!-- image --> */}
                          <img
                            class="block"
                            id="u18702_img"
                            src="images/1365088587587467_large.png?crc=499766730"
                            alt=""
                            width="180"
                            height="180"
                            data-muse-src="images/1365088587587467_large.png?crc=499766730"
                          />
                        </div>
                        {/* <!-- /m_editable --> */}
                      </div>
                      {/* <!-- m_editable region-id="editable-static-tag-U18632-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,txtStyleTarget" --> */}
                      <div
                        class="clearfix grpelem"
                        id="u18632-17"
                        data-muse-uid="U18632"
                        data-muse-type="txt_frame"
                        data-IBE-flags="txtStyleSrc"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- content --> */}
                        <h2 id="u18632-2">
                          <span id="u18632">Гарантия качества</span>
                        </h2>
                        <h2 id="u18632-3">&nbsp;</h2>
                        <h2 id="u18632-4">&nbsp;</h2>
                        <h2 id="u18632-5">&nbsp;</h2>
                        <h2 id="u18632-6">&nbsp;</h2>
                        <h2 id="u18632-7">&nbsp;</h2>
                        <h2 id="u18632-8">&nbsp;</h2>
                        <h2 id="u18632-9">&nbsp;</h2>
                        <h2 id="u18632-10">&nbsp;</h2>
                        <h2 id="u18632-11">&nbsp;</h2>
                        <h2 id="u18632-13">
                          Если зрителям не понравилось выступление, то сразу
                          возвращаются деньги!
                        </h2>
                        <h2 id="u18632-15">
                          Я работаю только на качество и берусь за ту работу
                          которую могу сделать на &quot;Отлично&quot; и не
                          меньше! Для меня важны позитивные эмоции зрителей и
                          радость заказчика от выполненной работы.
                        </h2>
                      </div>
                      {/* <!-- /m_editable --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U18659-BP_infinity" template="index.html" data-type="image" --> */}
                      <div
                        class="clip_frame grpelem"
                        id="u18659"
                        data-muse-uid="U18659"
                        data-muse-type="img_frame"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- image --> */}
                        <img
                          class="block"
                          id="u18659_img"
                          src="images/gar.png?crc=3958516590"
                          alt=""
                          width="200"
                          height="158"
                          data-muse-src="images/gar.png?crc=3958516590"
                        />
                      </div>
                      {/* <!-- /m_editable --> */}
                    </div>
                    <div class="clearfix colelem" id="pu18712-4">
                      {/* <!-- group --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U18712-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,txtStyleTarget" --> */}
                      <div
                        class="clearfix grpelem"
                        id="u18712-4"
                        data-muse-uid="U18712"
                        data-muse-type="txt_frame"
                        data-IBE-flags="txtStyleSrc"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- content --> */}
                        <h2>
                          <span id="u18712">
                            Посмотрите отзывы моих клиентов и убедитесь сами
                          </span>
                        </h2>
                      </div>
                      {/* <!-- /m_editable --> */}
                      {/* <!-- m_editable region-id="editable-static-tag-U18725-BP_infinity" template="index.html" data-type="html" data-ice-options="disableImageResize,link,clickable" data-ice-editable="link" --> */}
                      <a
                        class="clearfix nonblock nontext rounded-corners grpelem"
                        id="u18725-4"
                        href="otzyvy.html"
                        data-href="page:U18522"
                        data-muse-uid="U18725"
                        data-muse-type="txt_frame"
                        data-sizePolicy="fixed"
                        data-pintopage="page_fixedLeft"
                      >
                        {/* <!-- content --> */}
                        <p id="u18725-2">Отзывы клиентов</p>
                      </a>
                      {/* <!-- /m_editable --> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="browser_width colelem" id="u15006-bw">
                <div id="u15006">
                  {/* <!-- group --> */}
                  <div class="clearfix" id="u15006_align_to_page">
                    <div
                      class="clearfix grpelem"
                      id="u15007-4"
                      data-IBE-flags="txtStyleSrc"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>Все права защищены. Алексей Белинский, 2016-2020</p>
                    </div>
                    <a
                      class="clearfix nonblock nontext grpelem"
                      id="u15034-4"
                      href="show_dlya_vzroslih.html"
                      data-href="page:U3441"
                      data-IBE-flags="txtStyleSrc"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>
                        <span id="u15034">Выступления для взрослых</span>
                      </p>
                    </a>
                    <a
                      class="clearfix nonblock nontext grpelem"
                      id="u15035-4"
                      href="detskiy_prazdnik.html"
                      data-href="page:U6327"
                      data-IBE-flags="txtStyleSrc"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>
                        <span id="u15035">Выступления для детей</span>
                      </p>
                    </a>
                    <a
                      class="clearfix nonblock nontext grpelem"
                      id="u15036-4"
                      href="obuchenie_fokusam.html"
                      data-href="page:U6738"
                      data-IBE-flags="txtStyleSrc"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>
                        <span id="u15036">Обучение фокусам</span>
                      </p>
                    </a>
                    <a
                      class="clearfix nonblock nontext popup-form grpelem"
                      id="u15037-6"
                      href="http://cigam.ru"
                      data-IBE-flags="txtStyleSrc"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>Алексей</p>
                      <p>Белинский</p>
                    </a>
                    <div
                      class="clearfix grpelem"
                      id="u15038-4"
                      data-IBE-flags="txtStyleSrc"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>Заходите в соц. сети:</p>
                    </div>
                    <a
                      class="clearfix nonblock nontext grpelem"
                      id="u15039-6"
                      href="http://cigam.ru"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p id="u15039-2">cigam.ru</p>
                      <p id="u15039-4">обратная сторона магии</p>
                    </a>
                    <a
                      class="nonblock nontext grpelem"
                      id="u15040"
                      href="http://cigam.ru"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- rasterized frame --> */}
                      <img
                        id="u15040_img"
                        alt=""
                        width="56"
                        height="56"
                        src="images/3-u15040.png?crc=234910582"
                      />
                    </a>
                    <div
                      class="clearfix grpelem"
                      id="u15042-6"
                      data-IBE-flags="txtStyleSrc"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>Хотите увидеть фокусы в живую?</p>
                      <p>Нажмите на кнопку. Это бесплатно</p>
                    </div>
                    <div class="grpelem" id="u15043">
                      {/* <!-- custom html --> */}
                      <a
                        class="nonblock nontext grpelem"
                        rel="nofollow"
                        href="https://www.ok.ru/escalion"
                      >
                        <img width="45" height="45" src="images/OK2.png" />
                      </a>
                    </div>
                    <div class="grpelem" id="u18136">
                      {/* <!-- custom html --> */}
                      <a
                        class="nonblock nontext grpelem"
                        rel="nofollow"
                        href="https://www.facebook.com/MagBelinskiy"
                      >
                        <img width="45" height="45" src="images/FB2.png" />
                      </a>
                    </div>
                    <div class="grpelem" id="u18137">
                      {/* <!-- custom html --> */}
                      <a
                        class="nonblock nontext grpelem"
                        rel="nofollow"
                        href="https://www.youtube.com/channel/UCDIc8uwywRYyYpdgzbW1CQw"
                      >
                        <img width="45" height="45" src="images/YouTube2.png" />
                      </a>
                    </div>
                    <div class="grpelem" id="u18138">
                      {/* <!-- custom html --> */}
                      <a
                        class="nonblock nontext grpelem"
                        rel="nofollow"
                        href="https://www.instagram.com/magbelinskiy"
                      >
                        <img
                          width="45"
                          height="45"
                          src="images/Instagramm2.png"
                        />
                      </a>
                    </div>
                    <div class="grpelem" id="u18594">
                      {/* <!-- custom html --> */}
                      <a
                        class="nonblock nontext grpelem"
                        rel="nofollow"
                        href="https://vk.com/magbelinskiy"
                      >
                        <img width="45" height="45" src="images/VK2.png" />
                      </a>
                    </div>
                    <div
                      class="clearfix shadow popup-form grpelem"
                      id="u39503-4"
                      data-sizePolicy="fixed"
                      data-pintopage="page_fixedLeft"
                    >
                      {/* <!-- content --> */}
                      <p>Посмотреть магию в живую</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              class="nonblock nontext anim_swing"
              id="u21238"
              href="index.html#home"
              data-href="anchor:U69:U15674"
            >
              {/* <!-- rasterized frame --> */}
              {/* <!-- m_editable region-id="editable-static-tag-U21238-BP_infinity" template="index.html" data-type="html" data-ice-options="clickable" data-ice-editable="link" --> */}
              <img
                id="u21238_img"
                alt=""
                width="80"
                height="80"
                src="images/knopka_nav-u21238.png?crc=4050485168"
                data-muse-uid="U21238"
              />
              {/* <!-- /m_editable --> */}
            </a>
          </div>
          <div class="preload_images">
            <img class="preload" src="images/name.png?crc=48546318" alt="" />
            <img class="preload" src="images/phone.png?crc=465682847" alt="" />
            <img
              class="preload"
              src="images/radiobuttonunchecked.png?crc=3976871150"
              alt=""
            />
            <img
              class="preload"
              src="images/radiobuttonuncheckedrollover.png?crc=4276313674"
              alt=""
            />
            <img
              class="preload"
              src="images/radiobuttonuncheckedmousedown.png?crc=54863585"
              alt=""
            />
            <img
              class="preload"
              src="images/radiobuttonchecked.png?crc=4193302265"
              alt=""
            />
            <img
              class="preload"
              src="images/radiobuttoncheckedrollover.png?crc=88928956"
              alt=""
            />
            <img
              class="preload"
              src="images/radiobuttoncheckedmousedown.png?crc=4280357799"
              alt=""
            />
          </div>
        </div>
        {/* <Header />
        <TitleBlock />
        <AboutBlock />
        <GalleryBlock />
        <ProductionBlock /> */}
        {/* <EventsBlock maxEvents={4} hideBlockOnZeroEvents /> */}
        {/* <DirectionsBlock startInverse={directionsBlocksInverse} />
        <AdditionalBlocks startInverse={additionalBlocksInverse} />
        <ReviewsBlock /> */}
        {/* <ContactsBlock /> */}
        {/* <div className="flex flex-col items-start px-10 py-5 text-sm font-thin text-white bg-black min-h-80 tablet:px-20">
            <div>
              © ИП Белинский Алексей Алексеевич, ИНН 245727560982, ОГРНИП
              319246800103511
            </div>
          </div> */}
        {/* <ZakazModal /> */}
      </StateLoader>
      {/* </StateLoader> */}
    </>
  )
}

// export const getServerSideProps = async (context) =>
//   await getServerSidePropsFunc(context, getSession, fetchProps)
