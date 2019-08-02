//
// Copyright 2019 Wireline, Inc.
//

import { LogBot } from '@wirelineio/botkit';

import { view } from './defs';

export class Bot extends LogBot {

  constructor(config) {
    super(config, view);
  }

  async handleUpdate(itemId, itemLog) {
    console.log(JSON.stringify(itemLog.pop()));
  }
}
