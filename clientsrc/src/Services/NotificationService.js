import Swal from "sweetalert2"
export default class NotificationService {

  static async confirmAction(title = "Are you sure?", text = "You cant go back from here!") {
    try {
      let res = await Swal.fire({
        title: title,
        text: text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'blue',
        cancelButtonColor: 'orange',
        confirmButtonText: 'Yes, delete it!'
      })
      if (res.value) {
        return true
      }
      return false
    } catch (error) {

    }
  }

}