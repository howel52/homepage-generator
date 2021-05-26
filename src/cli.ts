import { generate } from "./generate";
const [dist, docName] = process.argv.reverse();

generate(docName, dist);
