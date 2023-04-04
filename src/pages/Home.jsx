import { Stack } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, BarSide } from '../components/index'
export default function Home() {
  return (
    <Stack width={'100%'} height={'100%'} direction={'row'}>
      <BarSide />
      <Stack m={{ sm: '13px 20.5px' }} width={'100%'}>
        <Header />
        <Outlet />
      </Stack>
    </Stack>
  )
}
