import { load } from "js-yaml";

export default (file, name) => {
  let format = name.split(".")[1];
  if (format === "json") {
    return JSON.parse(file);
  }
  if (format === "yaml" || format === "yml") {
    return load(file);
  }
};
