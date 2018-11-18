const fs = jest.genMockFromModule('fs') as any;

let mockFiles = {};

const __setMockFiles = (newMockFiles: { [path: string]: string; }) => {
  mockFiles = newMockFiles;
};

const readFileSync = (directoryPath: string) => mockFiles[directoryPath] || [];

fs.__setMockFiles = __setMockFiles;
fs.readFileSync = readFileSync;
fs.writeFileSync = jest.fn();

module.exports = fs;