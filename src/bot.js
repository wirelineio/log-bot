import { LogBot } from '@wirelineio/botkit';

import { view } from './defs';

export class Bot extends LogBot {

  constructor(kappa) {
    super(kappa, view);
  }

  onUpdate(view) {
    console.log(JSON.stringify(view.logs.pop()));
  }
}
