export function extractWeeks(days) {
  const month = days ? [...days] : [];
  const weeks = [];
  const weekSize = 7;
  while (month.length > 0) weeks.push(month.splice(0, weekSize));
  return weeks;
}
