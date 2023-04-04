import { Button } from '@mui/material'
import React from 'react'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Upload({base64Image, setBase64Image}) {
  const [image, setImage] = useState('')

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setBase64Image(reader.result)
    }
    reader.onerror = (error) => {
      console.log('Error: ', error)
    }
    setImage(file)
  }
  const { t } = useTranslation()

  return (
    <div>
      <Button sx={{color:'red'}} component="label">
        {t("upimg")} <AddPhotoAlternateIcon />
        <input
          hidden
          accept="image/*"
          onChange={handleImageChange}
          multiple
          type="file"
        />
      </Button>
    </div>
  )
}
