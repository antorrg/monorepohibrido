import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const dirname = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.join(dirname, '..')

async function moveHtml() {
  try {
    const sourceFile = path.join(projectRoot, 'dist', 'index.html')
    const targetDir = path.join(projectRoot, 'dist', 'pages')
    const targetFile = path.join(targetDir, 'index.html')

    // Verificar si el archivo existe
    try {
      await fs.access(sourceFile)
    } catch {
      console.log('index.html not found in dist folder')
      return
    }

    // Crear el directorio pages si no existe
    await fs.mkdir(targetDir, { recursive: true })
    
    // Copiar el archivo en lugar de moverlo
    await fs.copyFile(sourceFile, targetFile)
    
    // Eliminar el archivo original
    await fs.unlink(sourceFile)
    
    console.log('HTML file moved successfully')
  } catch (error) {
    console.error('Error moving HTML file:', error)
  }
}

moveHtml()