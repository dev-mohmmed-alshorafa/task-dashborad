import { Container, Stack } from '@mui/material'
import React from 'react'
import { LoginForm } from '../components'
import Loading from '../components/loading/loading'
import { useState } from 'react'
export default function Login() {
  const [isLoading,setIsLoading]=useState(false)
  return (
    <Stack position={'relative'} height={'100vh'} justifyContent={'center'}>
      <Container maxWidth="sm">
        <Stack gap={'20px'} width={'100%'} alignItems={'center'}>
          <img
            style={{ width: '200px' }}
            src="https://logos-world.net/wp-content/uploads/2020/04/Huawei-Logo-700x394.png"
            alt=""
          />
          <LoginForm setIsLoading={setIsLoading} />
        </Stack>
      </Container>
     {isLoading && <Loading />} 
    </Stack>
  )
}
