import React from 'react'

export const Math = ({ code }) => (
  <img
    src={`https://math.now.sh?from=${encodeURIComponent(code)}`}
    style={{ height: "100%", verticalAlign: "middle" }}
  />
);