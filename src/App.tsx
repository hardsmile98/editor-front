import {
  Route,
  Routes,
  useLocation,
  useNavigate
} from 'react-router-dom'
import {
  Profile
} from './pages'
import { useTelegram } from 'hooks'
import { useEffect, useState } from 'react'
import { isDev } from './helpers'
import { envs } from 'constants/index'
import { useGetProfileQuery } from './services'

function App () {
  const tg = useTelegram()

  const navigate = useNavigate()
  const { pathname } = useLocation()

  const [isTgLoading, setTgLoading] = useState(true)
  const [isTgReady, setTgReady] = useState(false)

  const { isLoading: isGetProfileLoading, isError } = useGetProfileQuery(undefined, { skip: !isTgReady })

  const isLoading = isTgLoading || isGetProfileLoading

  useEffect(() => {
    const tgInitData = isDev() ? envs.testInitData : tg.initData
    window.localStorage.setItem('tgData', tgInitData)
    setTgLoading(false)
    setTgReady(true)
  }, [tg])

  useEffect(() => {
    tg.expand()
    tg.backgroundColor = '#150801'
    tg.headerColor = '#150801'
  }, [tg])

  useEffect(() => {
    if (pathname !== '/') {
      tg.BackButton.show()
      tg.BackButton.onClick(() => navigate(-1))
    } else {
      tg.BackButton.hide()
    }
  }, [tg, navigate, pathname])

  return <Routes>
    <Route path='/*' element={<Profile />} />
  </Routes>
}

export default App
