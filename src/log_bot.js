//
// Copyright 2019 Wireline, Inc.
//

import { LogBot } from '@wirelineio/botkit';

const VIEW = 'logging';

/**
 * Logging bot.
 */
export class LoggingBot extends LogBot {

  /**
   * @constructor
   * @param {object} kappa DSuite core object.
   */
  constructor(kappa) {
    super(kappa, VIEW);
  }

  onUpdate(view) {
    console.log(JSON.stringify(view.logs.pop()));
  }
}
