
import Swal from 'sweetalert2'

import './style.scss';

export const PopupInfo = (icon, title, text, callback) => {
  Swal.fire({
    heightAuto: false,
    icon: icon,
    title: title,
    text: text,
    onAfterClose: callback
  })
}

export const PopupConfirmResponse = (icon, title, text, callback) => {
  Swal.mixin({
    customClass: {
      container: 'deep-class',
    }
  }).fire({
    icon: icon,
    title: title,
    text: text,
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(callback)
}
