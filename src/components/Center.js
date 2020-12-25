import React from 'react'

const centerStyles = {
  width: '100%',
  minHeight: `100px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export const Center = ({ children }) => 
<div style={centerStyles}>{children}</div>