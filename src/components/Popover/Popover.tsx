import type { PopoverProps } from './Popover.props'
import './Popover.scss'

const Popover = ({ children, id }: PopoverProps) => {
  return (
    <div className="popover" id={id} popover="auto">
      {children}
    </div>
  )
}

export default Popover