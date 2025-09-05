import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Lấy __dirname trong ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const folders = [
  "src/@types",
  "src/apis",
  "src/assets",
  "src/components",
  "src/constants",
  "src/contexts",
  "src/hooks",
  "src/i18n",
  "src/layouts",
  "src/lib",
  "src/locales",
  "src/pages",
  "src/types",
  "src/utils"
];

folders.forEach((dir) => {
  const dirPath = path.join(__dirname, dir);
  fs.mkdirSync(dirPath, { recursive: true });
});

console.log("✅ Structure created!");
