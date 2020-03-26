
import Swal from 'sweetalert2'


export const PopupInfo = (icon, title, text, callback) => {
  Swal.fire({
    heightAuto: false,
    icon: icon,
    title: title,
    text: text,
    onAfterClose: callback
  })
}