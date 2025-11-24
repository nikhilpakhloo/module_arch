const fs = require("fs");
const path = require("path");

const svgsDir = path.join(__dirname, "../assets/svg");

if (!fs.existsSync(svgsDir)) {
  console.error(`SVG folder not found at: ${svgsDir}`);
  process.exit(1);
}

const files = fs.readdirSync(svgsDir).filter(f => f.endsWith(".svg"));

function toIdentifier(name) {
  return name.replace(/[^a-zA-Z0-9_]/g, "_");
}

let output = "";

files.forEach(file => {
  const baseName = path.basename(file, ".svg");
  const identifier = toIdentifier(baseName);
  output += `import ${identifier} from "../../assets/svg/${file}";\n`;
});

output += "\nexport const svgMap = {\n";
files.forEach(file => {
  const baseName = path.basename(file, ".svg");
  const identifier = toIdentifier(baseName);
  output += `  "${baseName}": ${identifier},\n`;
});
output += "} as const;\n\n";
output += "export type SvgName = keyof typeof svgMap;\n";

const outputDir = path.join(__dirname, "../assets/svg");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const outputFile = path.join(outputDir, "svgMap.ts");
fs.writeFileSync(outputFile, output);

console.log("svgMap.ts generated successfully!");
