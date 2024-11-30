import { toast } from "react-toastify"

interface OptionsProps {
  toastId?: string | number
  type?: string
  position?: string
  onOpen?: () => void
  onClose?: () => void
  autoClose?: boolean | number
}

export const handleToastNotifications = (message: string, options: OptionsProps | undefined | any) => {
  return toast(message, options)
}

export const handleToastSuccess = (message: string) => {
  return toast.success(message ? message : "Success Notification !", {
    position: "top-center",
  })
}
