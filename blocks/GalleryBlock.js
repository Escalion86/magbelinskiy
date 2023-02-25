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
import ImageGallery from '@components/ImageGallery'

const GalleryBlock = () => (
  <BlockContainer
    small
    // id="about"
    // title="Об иллюзионисте Алексее Белинском"
  >
    <ImageGallery
      images={[
        'https://escalioncloud.ru/uploads/magbelinskiy//75316ff7-868c-423c-8dc0-c1b37f453bf4.jpeg',
        'https://escalioncloud.ru/uploads/magbelinskiy//2ff76904-8388-45b2-9f0d-c9a3fe168d42.jpeg',
        'https://escalioncloud.ru/uploads/magbelinskiy//12ded73c-a1b9-4985-897b-eeedb520755d.jpeg',
        'https://escalioncloud.ru/uploads/magbelinskiy//3cbe92fa-779b-477e-8c62-f852d98896af.jpeg',
        'https://escalioncloud.ru/uploads/magbelinskiy//a30ad96a-d781-41c6-8834-5c23da6b904c.jpeg',
      ]}
    />
  </BlockContainer>
)

export default GalleryBlock
