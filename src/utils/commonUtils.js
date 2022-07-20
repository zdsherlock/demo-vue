export default {
  isNull: obj => {
    if (
      obj == null ||
      typeof obj === 'undefined' ||
      obj.toString() === '' ||
      obj.toString() === 'null' ||
      obj.toString() === 'NaN' ||
      obj.toString() === 'undefined'
    ) {
      return true
    }
    return false
  }
}
