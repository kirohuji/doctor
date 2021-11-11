const module = "doctor/patient";
export class PatientService {
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
    return this.api.get(`/${this.module}/list`, target);
  }
  findOne(target) {
    return this.api.get(`/${this.module}/show`, target);
  }
}
