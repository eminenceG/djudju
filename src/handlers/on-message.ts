import {
  log,
  Message,
  Wechaty,
}             from 'wechaty'

export default async function onMessage (
  this    : Wechaty,
  message : Message,
): Promise<void> {
  log.info('on-message', 'onMessage(%s)', message)
  const text = message.text()

  if (message.self()) {
    return
  }

  if (/dju/.test(text)) {
    message.say('djudju爱你哦!')
    message.say('http://i1.bvimg.com/680813/1b2a8f97f2db09d7.jpg')
  }
}
