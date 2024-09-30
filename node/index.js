import fs from 'node:fs'

function init() {
  console.log(fs)

  const buf = Buffer.alloc(6);

  console.log(buf)
}


init()

