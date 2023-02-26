import Burger from '@components/Burger'
import Divider from '@components/Divider'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import transliterate from '@helpers/transliterate'
import loggedUserAtom from '@state/atoms/loggedUserAtom'
import menuOpenAtom from '@state/atoms/menuOpen'
import filteredAdditionalBlocksSelector from '@state/selectors/filteredAdditionalBlocksSelector'
import filteredDirectionsSelector from '@state/selectors/filteredDirectionsSelector'
import filteredEventsSelector from '@state/selectors/filteredEventsSelector'
import filteredReviewsSelector from '@state/selectors/filteredReviewsSelector'
import cn from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import Avatar from './Avatar'
import UserMenu from './UserMenu'

const MenuItem = ({ text, href = '#' }) => (
  <li>
    <a
      href={href}
      className="text-white cursor-pointer first-letter:uppercase hover:text-primary"
    >
      <p className="first-letter:uppercase whitespace-nowrap">{text}</p>
    </a>
  </li>
)

const BurgerMenuItem = ({ text, href = '#' }) => {
  const setMenuOpen = useSetRecoilState(menuOpenAtom)
  return (
    <li className="flex flex-1">
      <a
        href={href}
        className="flex-1 px-2 py-1 text-2xl text-white duration-300 rounded cursor-pointer whitespace-nowrap hover:text-general"
        onClick={() => setMenuOpen(false)}
      >
        {text}
      </a>
    </li>
  )
}

// const menu = [
//   { name: 'О нас', href: '#about', key: null },
//   { name: 'Запись', href: '#timetable', key: 'events' },
//   { name: 'Направления', href: '#directions', key: 'directions' },
//   // { name: 'Доп. блоки', href: '#additionalBlock', key: 'additionalBlocks' },
//   // { name: 'Стоимость', href: '#price', key: null },
//   { name: 'Отзывы', href: '#reviews', key: 'reviews' },
//   { name: 'Контакты', href: '#contacts', key: null },
// ]

const Header = () => {
  const loggedUser = useRecoilValue(loggedUserAtom)
  const events = useRecoilValue(filteredEventsSelector)
  const reviews = useRecoilValue(filteredReviewsSelector)
  const directions = useRecoilValue(filteredDirectionsSelector)
  const additionalBlocks = useRecoilValue(filteredAdditionalBlocksSelector)

  const menu = [
    { name: 'Об иллюзионисте', href: '/#about' },
    { name: 'Программы', href: '/#program' },
  ]
  // if (events?.length > 0) menu.push({ name: 'Мероприятия', href: '/#events' })
  // if (directions?.length > 0)
  //   menu.push({ name: 'Направления', href: '/#directions' })
  // if (additionalBlocks?.length > 0)
  //   additionalBlocks.forEach((additionalBlock) => {
  //     if (additionalBlock.menuName)
  //       menu.push({
  //         name: additionalBlock.menuName,
  //         href: '/#' + transliterate(additionalBlock.menuName),
  //       })
  //   })
  if (reviews?.length > 0) menu.push({ name: 'Отзывы', href: '/#reviews' })
  menu.push({ name: 'Контакты', href: '/#contacts' })

  // const filteredMenu = menu.filter(
  //   (menuItem) =>
  //     !menuItem.key || (props[menuItem.key] && props[menuItem.key].length > 0)
  // )

  const menuOpen = useRecoilValue(menuOpenAtom)
  return (
    // <div className="w-full h-18">
    <div className="sticky top-0 left-0 right-0 z-20 flex flex-col items-center justify-between shadow-md h-18 min-h-[4.5rem]">
      {/* <Header user={user} /> */}
      <div
        className="z-10 w-full"
        style={{
          backgroundImage: `url("/texture_smallest.jpg")`,
          // backgroundRepeat: 'repeat',
          // backgroundPosition: 'top 48px right',
          // backgroundSize: '',
        }}
      >
        <div className="text-white flex items-center justify-start w-full px-2 py-1 tablet:px-4 h-18 min-h-[4.5rem] bg-[#000000] bg-opacity-60">
          <div className="tablet:hidden">
            <Burger />
          </div>
          {/* <div className="absolute z-10 -translate-x-1/2 left-1/2"> */}
          <Link href="/" shallow>
            <a className="z-10 items-center hidden tablet:flex-1 tablet:flex laptop:absolute laptop:-translate-x-1/2 laptop:left-1/2 laptop:justify-center">
              {/* <img
                className="object-contain h-16 tablet:min-w-min"
                src={'/img/logo_horizontal.png'}
                alt="logo"
                // width={48}
                // height={48}
              /> */}
              <Image
                src="/logo_with_sign_horizontal.svg"
                // layout="fill"
                width="200"
                height="50"
                // className="fill-general"
              />
            </a>
          </Link>
          {/* </div> */}
          <div className="flex flex-row-reverse items-center flex-1 gap-x-4">
            <a
              className="text-xl font-semibold duration-300 hover:text-general hover:scale-110"
              href="tel:+79138370020"
              target="_blank"
            >
              +7-913-837-00-20
            </a>
            <div className="flex items-center justify-end gap-x-2">
              <a
                className="flex items-center duration-300 hover:scale-110"
                target="_blank"
                href="https://api.whatsapp.com/send?phone=79138370020"
              >
                <Image
                  src="/img/contacts/whatsapp.png"
                  // layout="fill"
                  width="30"
                  height="30"
                  // className="fill-general"
                />
              </a>
              <a
                className="flex items-center duration-300 hover:scale-110"
                href="https://t.me/escalion"
                target="_blank"
              >
                <Image
                  src="/img/contacts/telegram.webp"
                  // layout="fill"
                  width="30"
                  height="30"
                  // className="fill-general"
                />
              </a>
              <a
                className="flex items-center duration-300 hover:scale-110"
                href="https://www.instagram.com/magbelinskiy"
                target="_blank"
              >
                <Image
                  src="/img/contacts/intagram.webp"
                  // layout="fill"
                  width="30"
                  height="30"
                  // className="fill-general"
                />
              </a>
            </div>
          </div>

          {/* <UserMenu /> */}
        </div>
      </div>
      <ul className="items-center justify-center hidden w-full h-[40px] text-lg duration-300 bg-general bg-opacity-75 tablet:flex gap-x-4 hover:bg-opacity-100">
        {menu.map(({ name, href }, index) => {
          return <MenuItem key={'menuItem' + name} text={name} href={href} />
        })}
      </ul>
      <div
        className={cn(
          'overflow-hidden tablet:hidden absolute z-0 left-0 top-0 shadow-2xl duration-300',
          menuOpen ? 'w-60' : 'w-0'
        )}
      >
        <div className="pt-20 pb-4 bg-black border-b border-r border-[#000000] rounded-br-3xl w-60">
          {/* <div className="flex w-full px-2 pb-2 border-b tablet:hidden border-general">
            {loggedUser?._id ? (
              <Link href="/cabinet" shallow>
                <a className="flex items-center w-full px-1 py-1 text-lg rounded-lg hover:text-white gap-x-2 hover:bg-general">
                  <Avatar user={loggedUser} />
                  <span className="prevent-select-text">Мой кабинет</span>
                </a>
              </Link>
            ) : (
              <Link href="/login" shallow>
                <a className="flex items-center w-full px-2 py-2 text-lg text-center border border-white rounded-lg gap-x-2 flexpx-2 text-general tablet:px-3 hover:text-white hover:bg-general">
                  <FontAwesomeIcon icon={faSignInAlt} className="w-6 h-6" />
                  <span className="prevent-select-text">Авторизоваться</span>
                </a>
              </Link>
            )}
          </div> */}
          <div className="px-2 py-2 w-60 tablet:py-0">
            <ul className="flex flex-col gap-y-2">
              {menu.map(({ name, href }, index) => (
                <BurgerMenuItem
                  key={'burgerMenuItem' + index}
                  text={name}
                  href={href}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}

export default Header
