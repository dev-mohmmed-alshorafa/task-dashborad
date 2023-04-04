import { Container, Stack } from '@mui/material'
import React from 'react'
import { LoginForm } from '../components'
export default function Login() {
  return (
    <Stack height={'100vh'} justifyContent={'center'}>
      <Container maxWidth="sm">
        <Stack gap={'20px'} width={'100%'} alignItems={'center'}>
          <img
            style={{ width: '200px' }}
            src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo-700x394.png"
            alt=""
          />
          <LoginForm/>
        </Stack>
      </Container>
    </Stack>
  )
}
