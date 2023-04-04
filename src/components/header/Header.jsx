import { Stack } from '@mui/material'
import React from 'react'
import HeaderForDisktop from './HeaderForDisktop'
import HeaderForMobail from './HeaderForMobail'

export default function Header() {
  return (
    <Stack position={'sticky'} zIndex={'10'} top={'15px'}>
      <HeaderForDisktop />
      <HeaderForMobail />
    </Stack>
  )
}
