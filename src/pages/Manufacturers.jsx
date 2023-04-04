import React from 'react'
import { Table, Add } from '../components'
import { Stack } from '@mui/material'
import UsePagination from '../components/table/Pagination'
import { useEffect } from 'react'
import { useState } from 'react'
import Apiservices from '../services/ApiServices'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../Redux'
import { useTranslation } from 'react-i18next'
export default function Manufacturers() {
  const { t } = useTranslation()

  const [tableInfo, setTableInfo] = useState({
    name: t('Manufacturers'),
    img: './icons/users.png',
    headRow: [
      '#',
      t('image'),
      t('nameAr'),
      t('nameEn'),
      t('status'),
      t('actions'),
    ],
  })
  const [page, setPage] = useState(1)
  const [pages, setPages] = useState(null)
  const [count, setCount] = useState(5)
  const [prevcount, setprevCount] = useState(5)
  const search = useSelector((state) => state.search)
  const isUpdate = useSelector((state) => state.isUpdate)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.setActiveLink(1))
    if (search !== '') {
      Apiservices.get(
        `/vendor/manufacturers?per_page=${count}&page=1&&search=${search}`,
      ).then((res) => {
        setPage(1)
        setprevCount(count)
        setPages(res.data.pages)
        setTableInfo({ ...tableInfo, bodyRows: res.data.data })
      })
    } else {
      console.log('isUpdate')
      Apiservices.get(`/vendor/manufacturers?per_page=${count}&page=1`).then(
        (res) => {
          console.log('added')

          setPage(1)
          setprevCount(count)
          setPages(res.data.pages)
          setTableInfo({ ...tableInfo, bodyRows: res.data.data })
        },
      )
    }
  }, [search, isUpdate])
  useEffect(() => {
    if (prevcount !== count) {
      console.log('count')
      Apiservices.get(`/vendor/manufacturers?per_page=${count}&page=1`).then(
        (res) => {
          setPage(1)
          setprevCount(count)
          setPages(res.data.pages)
          setTableInfo({ ...tableInfo, bodyRows: res.data.data })
        },
      )
    } else {
      console.log('page', page)

      Apiservices.get(
        `/vendor/manufacturers?per_page=${count}&page=${page}`,
      ).then((res) => {
        setPages(res.data.pages)
        setTableInfo({ ...tableInfo, bodyRows: res.data.data })
      })
    }
  }, [count, page])

  return (
    <Stack width={'100%'} mt={'20px'}>
      <Stack m="30px 0" alignItems={'flex-end'}>
        <Add />
      </Stack>
      <Stack
        p={'20px'}
        sx={{
          position: 'relative',
          borderRadius: '20px',
          background: 'var(--background-table)',
          marginTop: '40px',
          zIndex: '1',
          margin: { xs: '90px 15px', sm: '20px 0' },
        }}
      >
        <Table pages={pages && pages.total} table={tableInfo} />
        <Stack mt={'30px'} alignItems={'flex-end'}>
          <Stack
            flexWrap={'wrap'}
            alignItems={'center'}
            gap={'30px'}
            direction={'row'}
          >
            <UsePagination setPage={setPage} pages={pages && pages.last_page} />

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
              onChange={(e) => setCount(e.target.value)}
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
