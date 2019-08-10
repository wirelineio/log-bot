import { LogBot } from '@wirelineio/botkit';

import { view } from './defs';

export default class Bot extends LogBot {

  constructor(config) {
    super(config, view);
  }

  async handleUpdate(view) {
    console.log(JSON.stringify(view.log.pop()));
  }
}
