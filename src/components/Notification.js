import React from 'react'


const Menu = ({ text }) => {
  const style = {
    paddingRight: 10
  }

  return (
    <section style={style}>{text}</section>
  )
}

export default Menu