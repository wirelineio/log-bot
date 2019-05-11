import 'source-map-support/register';

import { BotFactory, HttpHandler } from '@wirelineio/botkit';
import Wireline from '@wirelineio/sdk';

import { Bot } from './src/bot';

const bot = BotFactory.createBot(Bot);

module.exports = {

  info: Wireline.exec(async event => {
    return await HttpHandler.info(event, await bot);
  })
};
