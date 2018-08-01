export interface Result<Data> {
  code: number;
  message: string;
  data: Data;
}
