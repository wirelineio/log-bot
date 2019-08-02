//
// Copyright 2019 Wireline, Inc.
//

import { BotFactory, loadConfig } from '@wirelineio/botkit';

new BotFactory(loadConfig(), [{ name: 'examplebot', file: './src/main.js' }]).start();
