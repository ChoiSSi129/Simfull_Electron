const createWindowsInstaller = require('electron-winstaller').createWindowsInstaller
const path = require('path')

getInstallerConfig()
.then(createWindowsInstaller)
.catch((error) => {
    console.error(error.message || error)
    process.exit(1)
})

function getInstallerConfig () {
    console.log('creating windows installer')
    const rootPath = path.join('./')
    const outPath = path.join(rootPath, 'dist')

    return Promise.resolve({
        appDirectory: path.join(outPath, 'SimfullFactory-win32-x64'),
        outputDirectory: path.join(outPath, 'SimfullFactory-installer'),
        authors: 'SimfullFactory',
        description: 'SimfullFactory',
        noMsi: true,
        exe: 'SimfullFactory.exe',
        setupExe: 'SimfullFactory.exe'
    })
}