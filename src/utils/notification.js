import { Bounce, toast } from 'react-toastify'

export const addNotify = () => {
  return toast.success('Added Successfully !', {
    position: 'top-right',
    autoClose: 3000,
    theme: 'colored',
    transition: Bounce,
  })
}

export const removeNotify = () => {
  return toast.error('Removed Successfully !', {
    position: 'top-right',
    autoClose: 3000,
    theme: 'colored',
    transition: Bounce,
  })
}

export const failNotify = (msg) => {
  return toast.warn(msg, {
    position: 'top-right',
    autoClose: 3000,
    theme: 'colored',
    transition: Bounce,
  })
}

export const loginNotify = () => {
  return toast.success('Successfully Login!', {
    position: 'top-right',
    autoClose: 3000,
    theme: 'colored',
    transition: Bounce,
  })
}
