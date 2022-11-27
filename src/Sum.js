import React from 'react'

export function Sum(props) {
  return (
    <h1>{props.numbers.reduce((partialSum, a) => partialSum + a, 0)}</h1>
  )
}