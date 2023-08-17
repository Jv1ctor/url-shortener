const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formatDate = (timestamp: Date) => {
  const date = new Date(timestamp)
  const monthNum = date.getMonth()
  const month = months[monthNum]
  const day = date.getDate()
  const year = date.getFullYear()

  return `${month} - ${day} - ${year}` 
}