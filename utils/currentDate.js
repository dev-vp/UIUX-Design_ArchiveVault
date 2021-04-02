export default function currentDate(){
  const currDate = new Date();
  const YYYY = currDate.getFullYear();
  const MM = (currDate.getMonth() + 1).toString().padStart(2,"0");
  const DD = (currDate.getDate() + 1).toString().padStart(2,"0");

  return `${YYYY}/${MM}/${DD}`;
}
