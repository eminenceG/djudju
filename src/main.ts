import {
  log,
}                     from './config'

import {
  Wechaty,
}                 from 'wechaty'

import { startBot }   from './start-bot'
import { startFinis } from './start-finis'
import { startWeb }   from './start-web'

async function main () {
  log.verbose('main', 'main()')

  const bot = new Wechaty()

  await Promise.all([
    bot.start(),
    startBot(bot),
    startFinis(bot),
    startWeb(bot),
  ])

  while (bot.state.on()) {
    await new Promise((r) => setTimeout(r, 1000))
  }
  return 0
}

main()
.then(process.exit)
.catch((e) => {
  log.error('Main', 'main() rejection: %s', e)
  process.exit(1)
})
