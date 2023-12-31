import dayjs from 'dayjs/esm';
import { IUser } from 'app/entities/user/user.model';
import { Status } from 'app/entities/enumerations/status.model';

export interface ITorder {
  id: number;
  date?: dayjs.Dayjs | null;
  total?: number | null;
  status?: Status | null;
  userID?: Pick<IUser, 'id'> | null;
}

export type NewTorder = Omit<ITorder, 'id'> & { id: null };
