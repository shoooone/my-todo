export default function uuid() {
  return [8, 4, 4, 4, 12]
    .map(i => [...Array(i)].map(j => Math.floor(Math.random() * 16).toString(16)).join(''))
    .join('-');
}
