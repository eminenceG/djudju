const { FileBox }  = require('file-box')

const { Wechaty } = require('wechaty')

function onScan (qrcode, status) {
  require('qrcode-terminal').generate(qrcode, { small: true })  // show qrcode on console

  const qrcodeImageUrl = [
    'https://api.qrserver.com/v1/create-qr-code/?data=',
    encodeURIComponent(qrcode),
  ].join('')

  console.log(qrcodeImageUrl)
}

function onLogin (user) {
  console.log(`${user} login`)
}

function onLogout(user) {
  console.log(`${user} logout`)
}

async function onMessage (msg) {
  const content = msg.content()

  if (/dju/.test(content)) {
    msg.say("djudju爱你哦")
    const djudjuPhoto = FileBox.fromUrl('')
    await msg.say(djudjuPhoto)

  }
  console.log(msg.toString())
}

async function onFriendship(friendship) {
  let result = await friendship.accept()
  if(result){
    onsole.log(`Request from ${contact.name()} is accept succesfully!`)
  } else{
    console.log(`Request from ${contact.name()} failed to accept!`)
  }
}

const bot = new Wechaty()

bot.on('scan',       onScan)
bot.on('login',      onLogin)
bot.on('logout',     onLogout)
bot.on('message',    onMessage)
bot.on('friendship', onFriendship)

bot.start()
.then(() => console.log('Starter Bot Started.'))
.catch(e => console.error(e))
