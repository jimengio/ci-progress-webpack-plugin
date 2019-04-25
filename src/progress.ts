import * as webpack from "webpack";

var logTime = 0;
let startedTime = Date.now();

let showPercent = (x: number) => {
  return `${(x * 100).toFixed()}%`;
};

let addLog = (percentage: number, message: string, extra: string, ...args) => {
  let cost = ((Date.now() - startedTime) / 1000).toFixed(1) + "s";
  console.info(showPercent(percentage), cost, message || "", extra || "");
};

let ProgressPlugin = (options?: { interval: number }) => {
  let interval = options != null ? options.interval : 2000;

  return new webpack.ProgressPlugin((percentage, message, ...args) => {
    let now = Date.now();
    if (now - logTime > interval) {
      addLog(percentage, message, ...args);
      logTime = now;
    } else if (percentage > 0.99) {
      addLog(percentage, message, ...args);
    }
  });
};

export = ProgressPlugin;
