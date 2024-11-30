import { ZodError } from 'zod';
export class webValidationError extends Error {
}
export function formatValidationErrors(zodError: ZodError): string[] {
  return zodError.errors.map(error =>
    `${error.path[0]} : ${error.message}`
  );
}