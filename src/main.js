//
// Copyright 2019 Wireline, Inc.
//

import { loadConfig } from '@wirelineio/botkit';

import Bot from './bot';

new Bot(loadConfig()).start();
