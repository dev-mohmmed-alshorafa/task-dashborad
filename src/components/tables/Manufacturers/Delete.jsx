import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Apiservices from '../../../services/ApiServices'
import { actions } from '../../../Redux'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
export default function Delete({ id }) {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()

  const handleClickOpen = () => {
    setOpen(true)
  }
  const { t } = useTranslation()

  const handleClose = () => {
    setOpen(false)
  }
  const handelDelete = () => {
    Apiservices.delete(`/vendor/manufacturers/${id}`).then((res) =>
      dispatch(actions.setIsUpdate()),
    )
    setOpen(false)
  }
  return (
    <div>
      <IconButton variant="outlined" onClick={handleClickOpen}>
        <DeleteIcon sx={{ color: 'red' }} />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t("deleteMsg")}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}> {t("cancel")}</Button>
          <Button onClick={handelDelete} autoFocus>
          {t("accept")}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
