import { toast } from 'react-toastify'

export const addNotify = () => {
  return toast.success('Added Successfully !', {
    position: 'top-right',
    autoClose: 2000,
    theme: 'colored',
  })
}

export const removeNotify = () => {
  return toast.error('Removed Successfully !', {
    position: 'top-right',
    autoClose: 2000,
    theme: 'colored',
  })
}

export const failNotify = (msg) => {
  return toast.warn(msg, {
    position: 'top-right',
    autoClose: 2000,
    theme: 'colored',
  })
}

export const loginNotify = () => {
  return toast.success('Successfully Login!', {
    position: 'top-right',
    autoClose: 2000,
    theme: 'colored',
  })
}
