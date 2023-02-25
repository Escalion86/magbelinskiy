import BlockContainer from '@components/BlockContainer'
import ListItem from '@components/ListItem'
import { H2, H3, H4, P } from '@components/tags'
import {
  faBullhorn,
  faGraduationCap,
  faIdCard,
  faPlane,
  faStar,
  faTelevision,
  faTrophy,
  faVideo,
  faVideoCamera,
} from '@fortawesome/free-solid-svg-icons'
import SvgKavichki from 'svg/SvgKavichki'
import Image from 'next/image'
import birthDateToAge from '@helpers/birthDateToAge'

const AboutBlock = () => (
  <BlockContainer
    id="about"
    title="Об иллюзионисте Алексее Белинском"
    style={{
      backgroundImage: `url("/crossword.jpg")`,
      // backgroundRepeat: 'repeat',
      // backgroundPosition: 'top 48px right',
      // backgroundSize: '',
    }}
  >
    <div className="flex flex-col">
      {/* <Image src="/foto1.png" layout="responsive" /> */}
      <div className="relative flex gap-3 tablet:gap-4">
        <div className="relative flex flex-col items-stretch flex-1 gap-3 pb-4 tablet:gap-4">
          {/* <H2 className="sticky top-[6.5rem]">Наши цели</H2> */}
          <ListItem icon={faStar}>
            <P>
              <b>{birthDateToAge(new Date(2003, 10, 20))}</b>
              {` опыта работы, в том числе и за границей`}
            </P>
          </ListItem>
          <ListItem icon={faBullhorn}>
            <P>
              Обладатель <b>Высшей международной награды</b> в области
              иллюзионного искусства - кубка Мерлина. (
              <a href="https://ru.wikipedia.org/wiki/%D0%9C%D0%B5%D1%80%D0%BB%D0%B8%D0%BD_(%D0%BF%D1%80%D0%B5%D0%BC%D0%B8%D1%8F)">
                подробнее про кубок
              </a>
              )
            </P>
          </ListItem>
          <ListItem icon={faVideoCamera}>
            <P>
              Более <b>2000 выступлений</b> разного масштаба: от семейного
              формата до больших шоу-программ.
            </P>
          </ListItem>
          <ListItem icon={faTrophy}>
            <P>
              Стал <b>двукратным чемпионом</b> Всероссийского конкурса
              "Micromagic"
            </P>
          </ListItem>
          <ListItem icon={faBullhorn}>
            <P>
              Участник телевизионного шоу <b>"Все, кроме обычного"</b> на ТВ3
            </P>
          </ListItem>
          <ListItem icon={faPlane}>
            <P>
              Большой опыт <b>гастролей за границей</b>: Болгария, Вьетнам,
              Казахстан, Абхазия
            </P>
          </ListItem>
          <ListItem icon={faGraduationCap}>
            <P>
              <b>Открыл</b> единственную в России <b>школу по фокусам</b> и
              {'сценическому искусству для детей - '}
              <a href="http://kidmagic.ru">Академию Юных Волшебников</a>
            </P>
          </ListItem>
          <ListItem icon={faIdCard}>
            <P>
              Член <b>закрытого клуба</b> фокусников России и СНГ
            </P>
          </ListItem>
        </div>
        <img
          className="object-contain object-bottom max-w-[30%] hidden tablet:block"
          src={'/foto2.png'}
          alt="foto"
          // width={48}
          // height={48}
        />
        {/* <div className="grid grid-col-1 tablet:grid-cols-2 gap-x-4"> */}
        {/* <div className="flex flex-col items-center justify-center col-span-1">
          <img
            className="object-contain max-h-100"
            src={'/img/other/gubina2.png'}
            alt="polovinka_uspeha"
            // width={48}
            // height={48}
          />
          <H4 className="italic">
            Руководитель центра знакомств – Надежда Губина
          </H4>
        </div> */}
        {/* <div className="flex items-center"> */}
      </div>
      <div className="relative px-10 py-6 bg-white shadow-large tablet:py-10">
        {/* <div className="absolute bottom-0 left-0 object-contain w-10 h-10 text-general"> */}
        {/* <Image
                src="/img/other/kavichki.svg"
                layout="fill"
                className="fill-general"
              /> */}
        <SvgKavichki className="absolute w-6 h-6 left-3 bottom-3 laptop:bottom-4 laptop:left-4 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10 fill-general" />
        {/* </div> */}

        {/* <img
            className="absolute top-0 left-0 object-contain"
            src={'/img/other/kavichki.png'}
            alt="kavichki"
          /> */}
        <div className="italic text-center taxt-lg tablet:text-2xl">
          Меня завораживают удивленные лица зрителей.
          <br />В этот момент их эмоции самые настоящие.
        </div>
        {/* <img
            className="absolute bottom-0 right-0 object-contain rotate-180"
            src={'/img/other/kavichki.png'}
            alt="kavichki"
          /> */}
        {/* <div className="absolute top-0 right-0 object-contain rotate-180"> */}
        {/* <Image src="/img/other/kavichki.svg" width="30" height="24" /> */}
        <SvgKavichki className="absolute w-6 h-6 rotate-180 right-3 top-3 laptop:top-4 laptop:right-4 tablet:w-8 tablet:h-8 laptop:w-10 laptop:h-10 fill-general" />
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      {/* <div className="flex flex-col items-center justify-center flex-1 gap-y-4 tablet:gap-y-6"> */}
      {/* Руководитель центра знакомств – Надежда Губина .
«Мой центр помог мне найти свою вторую половинку, и я верю, что каждый может здесь найти не только свою половинку, но и партнеров по бизнесу, а также близкий круг друзей и единомышленников по своим интересам».
        
        <H2>Надежда Губина</H2>
        <H4>Руководитель центра осознанных знакомств "Половинка Успеха"</H4>
        <div className="text-lg laptop:text-xl">
          <ul className="flex flex-col gap-y-3">
            <ListItem>Помогаем успешным людям найти свою половинку</ListItem>
            <ListItem>
              Организовываем формат "Быстрые свидания" 1 раз в месяц
            </ListItem>
            <ListItem>
              Организовываем новые форматы знакомств 1 раз в месяц
            </ListItem>
            <ListItem>
              Подбираем пару для индивидуального свидания, учитывая
              психологическую совместимость партнёров
            </ListItem>
            <ListItem>
              Проводим диагностику и консультации по проблеме создания и
              выстраивания отношений
            </ListItem>
          </ul>
        </div> */}
      {/* </div> */}
      {/* <div className="flex justify-center flex-1">
        <img
          className="object-contain w-1/2 min-w-84 laptop:w-auto"
          src={'/img/other/gubina.webp'}
          alt="polovinka_uspeha"
          // width={48}
          // height={48}
        />
      </div> */}
    </div>
  </BlockContainer>
)

export default AboutBlock
