const chokidar = require('chokidar')
const sftp = require('ssh2-sftp-client')
const client = new sftp()
const config = require('../config.json')

function start() {
    const watcher = chokidar.watch(Object.keys(config.path))

    watcher.on('add', (path) => {
        upload(path, config.path[path])
    })

    watcher.on('change', (path) => {
        upload(path, config.path[path])
    })

    console.log('[remote-sync] [info]: the script is now fully operational.')
}

async function upload(path, remote) {
    try {
        await client.connect(config.ftp)
        console.log(`[remote-sync] [info]: change in ${path} detected!`)

        await client.put(path, remote)
        console.log('[remote-sync] [info]: sending file to remote server.')

        await client.end()
    } catch (err) {
        console.error(`[remote-sync] [error]: ${err.message}`)
    }
}

start()