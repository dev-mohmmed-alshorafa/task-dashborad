import React from 'react'
import { Table, Add } from '../components'
import { Stack } from '@mui/material'
import UsePagination from '../components/table/Pagination'
import { useState } from 'react'
import Apiservices from '../services/ApiServices'

import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { actions } from '../Redux'
export default function Manufacturers() {
  const { t } = useTranslation()


  const [pages, setPages] = useState(null)
  const [count, setCount] = useState(5)
  const dispatch = useDispatch()

  const handelChengeCount = (e) => {
    Apiservices.get(
      `/vendor/manufacturers?per_page=${e.target.value}&page=1`,
    ).then((res) => {
      setCount(e.target.value)
      setPages(res.data.pages)
      dispatch(actions.setManufacturers(res.data.data))
    })
  }

  return (
    <Stack width={'100%'} mt={'20px'}>
      <Stack m={{ sm: '30px 0', xs: '100px 0' }} alignItems={'flex-end'}>
        <Add   total={count} />
      </Stack>
      <Stack
        p={'20px'}
        sx={{
          position: 'relative',
          borderRadius: '20px',
          background: 'var(--background-table)',
          marginTop: '40px',
          zIndex: '1',
          margin: { xs: '0px 15px', sm: '20px 0' },
        }}
      >
        <Table
          pages={pages && pages.total}
        />
        <Stack mt={'30px'} alignItems={'flex-end'}>
          <Stack
            flexWrap={'wrap'}
            alignItems={'center'}
            gap={'30px'}
            direction={'row'}
          >
            <UsePagination
              setPages={setPages}
              count={count}
              pages={pages && pages.last_page}
            />

            <select
              style={{
                width: '66px',
                borderRadius: '11px',
                padding: '0 10px',
                background: 'var(--background-table)',
                border: '1px solid  #6d6d6d',
                color: 'var(--color-text)',
                fontSize: '11px',
                height: '31px',
              }}
              onChange={handelChengeCount}
              name="cars"
              id="cars"
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}
