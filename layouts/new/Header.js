// import menuOpenAtom from '@state/atoms/menuOpen'
import Image from 'next/image'
import Link from 'next/link'
// import { useRecoilValue, useSetRecoilState } from 'recoil'

const MenuItem = ({ text, href = '#' }) => (
  <li>
    <a
      href={'/index3' + href}
      style={{
        fontFamily: 'Montserrat',
        fontSize: 20,
        fontWeight: 700,
        lineHeight: 36,
        letterSpacing: -1,
        textAlign: 'left',
        textDecoration: 'none',
        textTransform: 'lowercase',
      }}
      className="text-white cursor-pointer"
    >
      {text}
    </a>
  </li>
)

// const BurgerMenuItem = ({ text, href = '#' }) => {
//   const setMenuOpen = useSetRecoilState(menuOpenAtom)
//   return (
//     <li className="flex flex-1">
//       <a
//         href={href}
//         className="flex-1 px-2 py-1 text-2xl text-white duration-300 rounded cursor-pointer whitespace-nowrap hover:text-general"
//         onClick={() => setMenuOpen(false)}
//       >
//         {text}
//       </a>
//     </li>
//   )
// }

const menu = [
  { name: 'Галерея', href: '/#about' },
  { name: 'Отзывы', href: '/#reviews' },
  { name: 'Услуги', href: '/#services' },
  { name: 'Контакты', href: '/#contacts' },
]

const Header = () => {
  // const menuOpen = useRecoilValue(menuOpenAtom)
  return (
    // <div className="w-full h-18">
    <div className="absolute flex items-center px-[33px] top-0 max-h-[100px] h-[100px] left-0 right-0 z-20 bg-transparent border-b border-[#FFFBF9]">
      <div className="flex-1 flex items-center justify-between gap-x-1 ml-[129px]">
        {/* <img
                className="object-contain h-16 tablet:min-w-min"
                src={'/img/logo_horizontal.png'}
                alt="logo"
                // width={48}
                // height={48}
              /> */}
        <Image
          src="/logo.png"
          // layout="fill"
          width="101"
          height="67"
          // className="fill-general"
        />
        <div className="flex max-h-[60px] items-center justify-end flex-1 gap-x-[63px] px-[23px]">
          {menu.map(({ name, href }) => (
            <MenuItem text={name} href={href} />
          ))}
        </div>
        <a
          href="tel:+79138370020"
          style={{
            fontFamily: 'Montserrat',
            fontSize: 20,
            fontWeight: 700,
            lineHeight: 36,
            letterSpacing: -1,
            textAlign: 'left',
            textDecoration: 'none',
            textTransform: 'lowercase',
          }}
          className=" rounded-full border-[#FFFBF9] border-1 z-20 text-white flex items-center justify-center cursor-pointer w-[257px] h-[67px] pt-[17px] pb-[14px]"
        >
          {'8(913)-837-00-20'}
        </a>
      </div>
    </div>
    // </div>
  )
}

export default Header
