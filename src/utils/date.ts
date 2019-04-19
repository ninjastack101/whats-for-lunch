
export const getDate = (date: Date) => {
  const day = date.getDate().toString();
  return day.length < 2 ? `0${day}` : day;
}

export const getMonth = (date: Date) => {
  const month = (date.getMonth() + 1).toString();
  return month.length < 2 ? `0${month}` : month;
}

export const formatDate = (date: Date) => {
  const d = new Date(date)
  const year = d.getFullYear();

  return [year, getMonth(d), getDate(d)].join('-');
};

export const sortItemsByDate = (items: any, key: string) => {
	return items.sort((a: any, b: any) => {
    const previousDate: any = new Date(a[key]);
    const nextDate: any = new Date(b[key]);
	  Math.abs(previousDate - nextDate) 
  });
}
