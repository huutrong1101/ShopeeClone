import { useContext } from 'react'
import { AppContext } from 'src/contexts/app.context'

export default function Profile() {
  const { isAuthenticated } = useContext(AppContext)

  console.log(isAuthenticated)
  return <div>Profile</div>
}
