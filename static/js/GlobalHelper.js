/* eslint-disable */
const GlobalHelper = {
  onlyNumber($event) {
    const keyCode = $event.keyCode ? $event.keyCode : $event.which
    if ((keyCode < 48 || keyCode > 57) && keyCode !== 46 && keyCode !== 95) {
      $event.preventDefault()
    }
  }
}
