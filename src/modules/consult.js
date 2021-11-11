const module = "doctor/consult";
export class ConsultService {
  constructor(api) {
    this.makeUserService(api);
    this.module = module;
  }
  makeUserService({ api }) {
    this.api = api;
    return this;
  }
  // @flow
  find(target) {
    return this.api.get(`/${this.module}/list_v2`, {
      params: target,
    });
  }
  findOne(target) {
    return this.api.get(`/${this.module}/show_v2`, {
      params: target,
    });
  }
}
