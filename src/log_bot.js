//
// Copyright 2019 Wireline, Inc.
//

import { DocBot } from '@wirelineio/botkit';

/**
 * Log bot.
 */
export class LogBot extends DocBot {

  async onDocumentChange(itemId, content) {
    console.log('LogtBot.onDocumentChange', itemId, content);
  }
}
