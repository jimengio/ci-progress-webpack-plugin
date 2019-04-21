import * as webpack from "webpack";

const handler = (percentage, message, ...args) => {
  // e.g. Output each progress message directly to the console:
  console.info(percentage, message, ...args);
};

let ProgressPlugin = (options?: { interval: number }) => {
  let interval = options != null ? options.interval : 1000;
  return new webpack.ProgressPlugin(handler);
};

export default ProgressPlugin;
