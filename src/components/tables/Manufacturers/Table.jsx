import * as React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Stack, Typography } from '@mui/material'
import Row from './HeadRow'
import TestTable from './BodyTable'
import UsePagination from '../../table/Pagination'
import { useTranslation } from 'react-i18next'


export default function BasicTable({ table, pages }) {
  const { t } = useTranslation()

  return (
    <TableContainer
      sx={{
        // marginTop: '20px',
        background: 'var(--background-table)',
        // padding: '30px 15px',
        // borderRadius: '20px',
      }}
      className="table"
    >
      <Stack
        sx={{
          minWidth: 650,
          background: 'var(--background-table)',
          position: 'relative',
          minHeight: '440px',
        }}
      >
        <Stack
          sx={{
            background: 'var(--background-table)',
            borderRadius: '20px',
          }}
        >
          <Stack>
            <Stack gap={'10px'} alignItems={'center'} direction={'row'}>
              <img style={{ width: '27px' }} src={table.img} alt="" />
              <Typography
                sx={{
                  color: 'var(--color-text)',
                  fontSize: '16px',
                  fontWeight: '900',
                }}
              >
                {t('Manufacturers')}
              </Typography>
              <Typography
                sx={{
                  color: '#9da9b4ab',
                  fontSize: '12px',
                  fontWeight: '400',
                  marginTop: '7px',
                }}
              >
                {pages} {t("item")}
              </Typography>
            </Stack>
          </Stack>

          <Stack mb={'20px'} overflow={'scroll'}>
            <Row headRow={table.headRow} />
            <TestTable bodyRows={table.bodyRows} />
          </Stack>
        </Stack>
      </Stack>
    </TableContainer>
  )
}
