import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';

export default Route.extend({
  session: service(),
  sessionAccount: service(),

  async beforeModel() {
    await this.get('session').setup();
    return this.get('sessionAccount').loadCurrentUser().catch(() => this.get('session').invalidate());
  }
});
