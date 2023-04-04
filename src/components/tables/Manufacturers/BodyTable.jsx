import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ColorSwitches from './Switch'
import Actions from './Actions'
import Item from './Item'
import { useSelector } from 'react-redux'

export default function TestTable() {
  const Manufacturers = useSelector((state) => state.Manufacturers)

  return (
    <Stack>
      {Manufacturers &&
        Manufacturers.map((e, i) => (
          <Item   
           e={e} i={i}/>
        ))}
    </Stack>
  )
}
