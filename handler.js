//
// Copyright 2019 Wireline, Inc.
//

import 'source-map-support/register';

import { BotFactory, HttpHandler } from '@wirelineio/botkit';
import Wireline from '@wirelineio/sdk';

import { ExampleBot } from './src/bot';

const bot = BotFactory.createBot(ExampleBot);

module.exports = {

  info: Wireline.exec(async event => {
    return await HttpHandler.info(event, await bot);
  })
};
