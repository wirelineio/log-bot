import { loadConfig } from '@wirelineio/botkit';

import Bot from './bot';

new Bot(loadConfig({ isBot: true })).start();
