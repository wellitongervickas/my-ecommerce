export default function debounceEvent(callback: Function, time: number) {
  let timer: any;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(function () {
      timer = null;
      callback(arguments);
    }, time);
  };
}
