#!/usr/bin/env node

const response = await fetch('https://repo.packagist.org/p2/shopwell/core.json');
const json = await response.json();
import fs from 'node:fs';

const mapping = new Map();
let previousVersion = null;

for (const version of json.packages['shopwell/core']) {
  if (version.require) {
    previousVersion = version
  }

  if (previousVersion.require['shopwell/conflicts']) {
    mapping.set(version.version, previousVersion.require['shopwell/conflicts'])
  }
}


// Generate the USE.md content
let useTableContent = `# Shopwell Version to Conflicts Version Mapping

This document shows which version of \`shopwell/conflicts\` is used by each version of \`shopwell/core\`.

| Shopwell Version | Conflicts Version |
|-----------------|-------------------|
`;

// Add each mapping entry to the table
for (const [shopwellVersion, conflictsVersion] of mapping) {
  useTableContent += `| ${shopwellVersion} | ${conflictsVersion} |\n`;
}

// Write the content to USE.md
fs.writeFileSync('USAGES.md', useTableContent);

console.log('USAGES.md has been generated successfully.');
