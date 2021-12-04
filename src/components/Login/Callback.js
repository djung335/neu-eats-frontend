import React, {useEffect} from 'react'
const Callback = ({auth}) => {
  useEffect(() => {
    auth.handleAuth()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>I am the callback component</h1>
    </div>
  )
}
export default Callback