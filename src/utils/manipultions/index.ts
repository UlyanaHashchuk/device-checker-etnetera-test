export const dateToLocaleString = (value: number) =>
  // date/time formatting to look like: DD.M.YYYY HH:MM
  new Date(value).toLocaleString('de-DE', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
