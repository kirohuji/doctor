const module = "doctor/work";
export class WorkService {
  constructor(api) {
    this.makeUserService(api);
    this.module = module;
  }
  makeUserService({ api }) {
    this.api = api;
    return this;
  }
  // @flow
  otpts(target) {
    return this.api.get(`/${this.module}/otpts`, target);
  }
}
