export const dateToLocaleString = (value: number) =>
  // 'tr-TR' is date/time formatting to look like: DD.MM.YYYY HH:MM:SS
  new Date(value).toLocaleString('tr-TR')
