const module = "doctor/account";
export class AccountService {
  constructor(api) {
    this.makeUserService(api);
    this.module = module;
  }
  makeUserService({ api }) {
    this.api = api;
    return this;
  }
  // @flow
  show(target) {
    return this.api.get(`/${this.module}/show`, target);
  }
}
