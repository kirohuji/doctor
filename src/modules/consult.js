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
  skip(target) {
    return this.api.post(`/${this.module}/skip`, target);
  }
  complete(target) {
    return this.api.post(`/${this.module}/complete`, target);
  }
  reception(target) {
    return this.api.post(`/${this.module}/reception`, target);
  }
  refuse(target) {
    return this.api.post(`/${this.module}/refuse`, target);
  }
  next(target) {
    return this.api.post(`/${this.module}/next`, target);
  }
}
