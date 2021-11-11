const module = "doctor/im";
export class ImService {
  constructor(api) {
    this.makeUserService(api);
    this.module = module;
  }
  makeUserService({ api }) {
    this.api = api;
    return this;
  }
  // @flow
  history(target) {
    return this.api.get(`/${this.module}/history`, {
      params: target,
    });
  }
}
