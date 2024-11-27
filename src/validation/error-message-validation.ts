import { ZodError } from 'zod';
import { HTTPException } from "hono/http-exception";

export class ErrorMessageValidation extends Error {

}
export function formatValidationErrors(zodError: ZodError): string[] {
  return zodError.errors.map(error =>
    `${error.path[0]} : ${error.message}`
  );
}