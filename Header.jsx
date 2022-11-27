import PropTypes from 'prop-types'
function Header({text, bgColor, tColor}) {
    const headerStyles = {
        backgroundColor: bgColor,
        textColor: tColor
    }
  return (
    <header style={headerStyles}>
        <div className="container">
            <h2>{text}</h2>
        </div>
    </header>
  )
}

Header.defaultProps = {
bgColor: 'rgba(0,0,0,0.4)',
tColor: 'red'
}

Header.propTypes = {
    text: PropTypes.string
}
export default Header
