import { ZodError } from 'zod';
export class webValidationError extends Error {
  constructor(public request: any, public zodMessage: any, public message: string) {
    super(message);
  }
}

export function formatValidationErrors(zodError: ZodError): string[] {
  return zodError.errors.map(error =>
    `${error.path[0]} : ${error.message}`
  );
}