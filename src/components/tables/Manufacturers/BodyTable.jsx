import { Avatar, Box, Stack, Typography } from '@mui/material'
import React from 'react'
import ColorSwitches from './Switch'
import Actions from './Actions'

export default function TestTable({ bodyRows }) {
  return (
    <Stack>
      {bodyRows &&
        bodyRows.map((e, i) => (
          <Stack
            sx={{
              background:
                i % 2 === 0
                  ? 'var(--background-table)'
                  : 'var(--background-table-main-row)',
              padding: '13px',
              borderRadius: '12px',
            }}
            // mt={'20px'}
            alignItems={'center'}
            justifyContent={'space-between'}
            direction={'row'}
            key={i}
          >
            <Typography
              minWidth={'40px'}
              sx={{ color: 'var(--color-text)' }}
              align={i === 0 ? 'center' : 'center'}
            >
              {i + 1}
            </Typography>
            <Stack alignItems={'center'} minWidth={'150px'}>
              <Avatar src={e.image} alt="" />
            </Stack>
            <Typography
              width={'150px'}
              sx={{ color: 'var(--color-text)' }}
              align={i === 0 ? 'center' : 'center'}
            >
              {e.name.ar}
            </Typography>

            <Typography
              width={'150px'}
              sx={{ color: 'var(--color-text)' }}
              align={i === 0 ? 'center' : 'center'}
            >
              {e.name.en}
            </Typography>
            <Stack alignItems={'center'} minWidth={'150px'}>
              <ColorSwitches status={e} />
            </Stack>
          
              <Actions item={e} />
          </Stack>
        ))}
    </Stack>
  )
}
