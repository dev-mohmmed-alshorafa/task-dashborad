import * as React from 'react'
import Dialog from '@mui/material/Dialog'

import {
  Button,
  CircularProgress,
  IconButton,
  Stack,
  TextField,
} from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import Apiservices from '../../../services/ApiServices'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Upload from '../../Upload/Upload'
import { actions } from '../../../Redux'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../loading/loading'
export default function Edit({ id }) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const [base64Image, setBase64Image] = useState('')

  const { t } = useTranslation()
  const [item, setItem] = useState({
    nameEnglish: '',
    nameArabic: '',
    sort: '',
    image: '',
  })
  React.useEffect(() => {
    Apiservices.get(`/vendor/manufacturers/${id}`).then((res) => {
      setItem({
        nameEnglish: res.data.data.name.en,
        nameArabic: res.data.data.name.ar,
        sort: res.data.data.sort_order,
        image: res.data.data.image,
      })
    })
  }, [])
  const dispatch = useDispatch()
  const [isloading, setIsLoading] = useState(false)
  const handelEdit = () => {
    setIsLoading(true)
    Apiservices.put(`/vendor/manufacturers/${id}`, {
      name: {
        ar: item.nameArabic,
        en: item.nameEnglish,
      },
      image: base64Image,
      sort: item.sort,
    })
      .then((res) => {
        setIsLoading(false)
        setOpen(false)
        dispatch(actions.setIsUpdate())
      })
      .catch((err) => console.log(err))
  }
  const lang = useSelector((state) => state.lang)

  return (
    <React.Fragment>
      {isloading ? (
        <CircularProgress />
      ) : (
        <IconButton variant="outlined" onClick={handleClickOpen}>
          <EditIcon sx={{ color: '#6c5dd3' }} />{' '}
        </IconButton>
      )}
      <Dialog
        fullWidth={true}
        maxWidth={'xs'}
        open={open}
        onClose={handleClose}
      >
        <Stack
          position={'relative'}
          dir={lang}
          component={'form'}
          gap={'20px'}
          p={'30px 20px'}
        >
          <TextField
            sx={{
              borderRadius: '8px',
              border: '1px solid var(--icons-side-menu)',
            }}
            color="info"
            value={item.nameEnglish}
            onChange={(e) => setItem({ ...item, nameEnglish: e.target.value })}
            id="outlined-basic"
            label={'nameEn'}
            variant="outlined"
          />
          <TextField
            sx={{
              borderRadius: '8px',
              border: '1px solid var(--icons-side-menu)',
            }}
            color="info"
            value={item.nameArabic}
            onChange={(e) => setItem({ ...item, nameArabic: e.target.value })}
            id="outlined-basic"
            label={t('nameAr')}
            variant="outlined"
          />
          <TextField
            sx={{
              borderRadius: '8px',
              border: '1px solid var(--icons-side-menu)',
            }}
            color="info"
            value={item.sort}
            onChange={(e) => setItem({ ...item, sort: e.target.value })}
            type="number"
            id="outlined-basic"
            label={t('sort')}
            variant="outlined"
          />
          <img src={item.image} alt="" />
          <Upload base64Image={base64Image} setBase64Image={setBase64Image} />
          <Button
            sx={{ background: '#9d1111!important' }}
            onClick={handelEdit}
            variant="contained"
          >
            {t('update')}{' '}
          </Button>
          {isloading && <Loading />}
        </Stack>
      </Dialog>
    </React.Fragment>
  )
}
