import React from 'react'
import { GreetProps } from '../Greet'

export const CustomComponent = (props: GreetProps) => {
  return <div>{props.isLoggedIn && props.name}</div>
}
