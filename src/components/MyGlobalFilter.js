import React from 'react'

function MyGlobalFilter({ filter, setFilter }) {
  
  return (
    <p>
      Search:
      <input
        value={filter || ''}
        onChange = {(e) => (setFilter(e.target.value))}
      />
    </p>
  )
}

export default MyGlobalFilter