import { z, ZodType } from "zod";

export class PostValidation {

  static readonly CREATE: ZodType = z.object({
    title: z.string().min(1).max(1000),
    content: z.string().min(1).max(10000)
  })

  static readonly GET: ZodType = z.string().uuid()

  static readonly UPDATE: ZodType = z.object({
    id: z.string().uuid(),
    title: z.string().min(1).max(1000),
    content: z.string().min(1).max(10000)
  })
  static readonly DELETE: ZodType = z.string().uuid()

  static readonly SEARCH: ZodType = z.object({
    title: z.string().min(1).max(1000).optional(),
    content: z.string().min(1).max(10000).optional(),
    page: z.number().min(1).positive(),
    size: z.number().min(1).max(100).positive()
  })

}
