export default function colorTrace(msg, color) {
  console.log(
    '%c' + msg,
    'color:' + color + ';font-weight:bold;background-color:white'
  );
}
