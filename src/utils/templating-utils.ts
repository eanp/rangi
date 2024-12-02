export type InitialData = {
  layout: string | boolean;
  title?: string;
  message: string | boolean;
  status?: string | boolean;
  formResponse?: any

}

export const initial_data:InitialData = {
  layout: false,
  title: process.env.APP_NAME ?? "-"  ,
  status: false,
  message: false,
  formResponse: false
};