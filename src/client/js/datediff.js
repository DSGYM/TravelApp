const dateDiffInDays = date => {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  today = new Date(yyyy + "-" + mm + "-" + dd);
  date = new Date(date);
  const utc1 = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate());
  const utc2 = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

module.exports = dateDiffInDays;
