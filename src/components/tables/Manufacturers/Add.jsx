import * as React from 'react'
import Dialog from '@mui/material/Dialog'
import { Button, Stack, TextField } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import Upload from '../../Upload/Upload'
import Apiservices from '../../../services/ApiServices'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../../../Redux'
import Loading from '../../loading/loading'
export default function Add({ total }) {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
  const Manufacturers = useSelector((state) => state.Manufacturers)

  const [isloading, setIsLoading] = useState(false)
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
  })
  const handelAdd = () => {
    const requestBody = new FormData()
    requestBody.append('name[en]', item.nameEnglish)
    requestBody.append('name[ar]', item.nameArabic)
    requestBody.append('image', base64Image)
    requestBody.append('sort', item.sort)
    setIsLoading(true)
    Apiservices.post('/vendor/manufacturers', requestBody)
      .then((res) => {
        setOpen(false)
        if (total > Manufacturers.length) {
          console.log(res.data.data)
          dispatch(actions.setManufacturers([...Manufacturers, res.data.data]))
        }
        setIsLoading(false)

        setItem({
          nameEnglish: '',
          nameArabic: '',
          sort: '',
        })
        setBase64Image('')
      })
      .catch((err) => console.log(err))
  }
  const lang = useSelector((state) => state.lang)

  return (
    <React.Fragment>
      <Button
        sx={{ border: 'none', background: '#ae1617', color: 'white' }}
        variant="outlined"
        onClick={handleClickOpen}
      >
        {t('Add Manufacturer')}{' '}
      </Button>
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
            label={t('nameEn')}
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
          <Upload base64Image={base64Image} setBase64Image={setBase64Image} />
          <Button
            sx={{ background: '#9d1111!important' }}
            onClick={handelAdd}
            variant="contained"
          >
            {t('Add Manufacturer')}
          </Button>
          {isloading && <Loading />}
        </Stack>
      </Dialog>
    </React.Fragment>
  )
}
