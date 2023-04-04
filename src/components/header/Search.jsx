import { FormControl, IconButton, TextField } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../Redux'
import { useTranslation } from 'react-i18next'
export default function Search() {
  const search = useSelector((state) => state.search)
  const dispatch = useDispatch()
  const handelSearch = (e) => {
    dispatch(actions.setSearch(e.target.value))
  }
  const { t } = useTranslation()

  return (
    <form style={{ display: 'flex', color: '#8074d9' }}>
      <IconButton sx={{ maxHeight: '40px' }}>
        <SearchIcon sx={{ color: '#8074d9' }} />
      </IconButton>{' '}
      <input
        value={search}
        onChange={handelSearch}
        placeholder={t("search")}
        // color={mode && 'secondary'}
        style={{
          border: 'none ',
          outline: 'none ',
          color: 'rgb(128, 116, 217)',
          background: 'var(--background-drop-item)',
          maxHeight: '40px',
        }}
      />
    </form>
  )
}
