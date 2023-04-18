import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'

const ListItem = ({ children, icon }) => (
  <motion.li
    className="flex items-center gap-x-2"
    initial={{ opacity: 0, x: '150px' }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{
      margin: '0px 0px -100px 0px',
      // once: true
    }}
  >
    <FontAwesomeIcon
      className="w-7 h-7 text-general min-w-7 min-h-7 tablet:min-h-8 tablet:min-w-8 tablet:h-8 tablet:w-8"
      icon={icon ?? faCheckCircle}
    />
    {children}
  </motion.li>
)

export default ListItem
