import { faCheckCircle } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ListItem = ({ children, icon }) => (
  <li className="flex items-center gap-x-2">
    <FontAwesomeIcon
      className="w-7 h-7 text-general min-w-7 min-h-7 tablet:min-h-8 tablet:min-w-8 tablet:h-8 tablet:w-8"
      icon={icon ?? faCheckCircle}
    />
    {children}
  </li>
)

export default ListItem
