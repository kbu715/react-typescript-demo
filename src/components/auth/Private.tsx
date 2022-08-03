import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
  isLoggedIn: boolean
  component: React.ComponentType<ProfileProps> // this is key point
}

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name='paul' />
  } else {
    return <Login />
  }
}
