import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

const format = "DD/MM/YYYY HH:mm"
dayjs.extend(utc);

const stepDate = -1
const realInterval = [1703894400000, 1703980800000]
const prevNextRealInterval = [
  dayjs(realInterval[0]).add(-1, "day").startOf("day").valueOf(),
  dayjs(realInterval[1]).add(1, "day").endOf("day").valueOf(),
];

const productionDates = [1703894400000, 1704067200000, 1704518840000]
const productionDatesWithStepDate = productionDates.map(d => {
  return dayjs(d).add(stepDate, "day").startOf("day").valueOf()
}).sort()

console.log("realInterval", realInterval.map(d => dayjs(d).format(format)))
console.log("prevNextRealInterval", prevNextRealInterval.map(d => dayjs(d).format(format)))
console.log("productionDates", productionDates.map(d => dayjs(d).format(format)))
console.log("productionDatesWithStepDate", productionDatesWithStepDate.map(d => dayjs(d).format(format)))

const v = productionDatesWithStepDate.map(d => {
  return d >= realInterval[0] && d <= realInterval[1]

})

console.log("-------", v)

document.getElementById("app").innerHTML = `
  hi
`;
