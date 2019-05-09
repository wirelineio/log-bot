//
// Copyright 2019 Wireline, Inc.
//

import { LogBot } from '@wirelineio/botkit';

import { view } from './defs';

/**
 * Example bot.
 */
export class ExampleBot extends LogBot {

  /**
   * @constructor
   * @param {object} kappa DSuite core object.
   */
  constructor(kappa) {
    super(kappa, view);
  }

  onUpdate(view) {
    console.log(JSON.stringify(view.logs.pop()));
  }
}
