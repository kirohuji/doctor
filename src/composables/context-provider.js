import { api } from "@/utils/http";
import { WorkService } from "@/modules/work";
import { AccountService } from "@/modules/account";
import { ConsultService } from "@/modules/consult";
import { PatientService } from "@/modules/patient";
import { ImService } from "@/modules/im";
export const serviceContainer = {
  workService: new WorkService({ api }),
  accountService: new AccountService({ api }),
  consultService: new ConsultService({ api }),
  patientService: new PatientService({ api }),
  imService: new ImService({ api }),
};
