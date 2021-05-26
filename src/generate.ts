import * as fs from "fs";
import * as path from "path";

import Handlebars from "handlebars";

export const generate = (docFileName: string, targetDir: string): void => {
  const docRoot = path.resolve(__dirname, "../docs");
  
  const { default: { data, theme: themePath } } = require(path.resolve(docRoot, docFileName));

  const template = Handlebars.compile(fs.readFileSync(themePath, "utf-8"));

  const dist = template(data);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  const distHtmlPath = path.resolve(
    targetDir,
    `${docFileName}.html`,
  );

  fs.writeFileSync(distHtmlPath, dist, "utf-8");
};