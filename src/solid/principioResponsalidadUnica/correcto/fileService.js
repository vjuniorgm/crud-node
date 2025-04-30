const fs = require('fs');

class FileService {
  saveToFile(data, filename) {
    fs.writeFileSync(filename, JSON.stringify(data));
  }
}