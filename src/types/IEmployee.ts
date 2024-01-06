export interface IEmployee {
  name: string;
  email: string;
  designation: string;
  reporting_manager: string | undefined;
  subordinates: IEmployee[];
  team: string;
}
