import React from 'react'

export const Star: React.FC<{ fill?: boolean, onClick?: () => void, title?: string }> = ({ fill, onClick, title }) => {
  return (
    <svg onClick={onClick} xmlns="http://www.w3.org/2000/svg" width="255" viewBox="0 0 51 48">
      <title>{title ? title : 'Star'}</title>
      <path stroke="#000" d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" fill={fill ? 'gold' : 'none'} />
    </svg>
  )
}
