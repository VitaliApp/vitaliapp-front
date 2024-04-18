export default function formatDateToString(date) {
    const newDate = new Date(date);
    const day = newDate.getDate().toString();
    const month = newDate.getMonth().toString();
    const year = newDate.getFullYear().toString();
    const dateString = `${day}/${month}/${year}`;
    return dateString;
  }
  