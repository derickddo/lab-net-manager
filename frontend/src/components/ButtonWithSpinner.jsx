import { Button, Spinner } from "@material-tailwind/react"
import PropTypes from 'prop-types'
const ButtonWithSpinner = ({spin, children, color}) => {
  return (
    <Button color={color} type="submit">{ spin? <Spinner/>: children}</Button>
  )
}
ButtonWithSpinner.propTypes = {
    spin: PropTypes.bool,
    children: PropTypes.node, 
    color: PropTypes.string
}
export default ButtonWithSpinner