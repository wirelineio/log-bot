import { LogBot } from '@wirelineio/botkit';

import { name, view } from './defs';

export class Bot extends LogBot {

  constructor(kappa) {
    super(kappa, view, name);
  }

  onUpdate(view) {
    console.log(JSON.stringify(view.logs.pop()));
  }
}
