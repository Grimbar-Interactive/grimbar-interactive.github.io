import { readdirSync, statSync } from "fs";
import { join, extname } from "path";

function getFilesFromDir(dir, fileTypes) {
    const filesToReturn = [];

    function walkDir(currentPath) {
      const files = readdirSync(currentPath);
      for (let i in files) {
        const curFile = join(currentPath, files[i]);      
        if (statSync(curFile).isFile() && fileTypes.indexOf(extname(curFile)) !== -1) {
          filesToReturn.push(curFile);
        } else if (statSync(curFile).isDirectory()) {
          walkDir(curFile);
        }
      }
    }

    walkDir(dir);

    return filesToReturn; 
}

export default getFilesFromDir;