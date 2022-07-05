import { PropTypes } from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
  const onClick = (e) => {
    console.log('Click')
  }

  return (
    <div className='header'>
      <h1>{title}</h1>
      <Button color='green' text='Add' onClick={onClick} />
    </div >
  )
}

Header.defaultProps = {
  title: "Task Track"
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header