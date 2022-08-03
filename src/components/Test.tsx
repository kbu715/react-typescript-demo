import { useState, useEffect } from 'react'

const Test = () => {
  const [windowScrollY, setWindowScrollY] = useState<number>(window.scrollY)
  const handleScroll = () => {
    setWindowScrollY(window.scrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    console.log('effect')
    return () => {
      window.removeEventListener('resize', handleScroll)
      console.log('clean up')
    }
  }, [windowScrollY])
  return <div style={{ height: '500vh' }}>{windowScrollY}</div>
}

export default Test
