import {web} from "./application/web";
import {logger} from "./application/logging";
import * as dotenv from "dotenv";
dotenv.config();

web.listen(process.env.PORT, () => {
    logger.info(`Listening on port ${process.env.PORT}`);
})


// app.onError(async (err, c) => {
//   if (err instanceof HTTPException) {
//       c.status(err.status)
//       return c.json({
//           status: "error",
//           errors: err.message
//       })
//   } else if (err instanceof ZodError) {
//       c.status(400)
//       return c.json({
//           errors: "validation_error",
//           validation_error: err.message
//       })
//   } else {
//       c.status(500)
//       return c.json({
//         errors: "server_error",
//         server_error: err.message
//       })
//   }
// })

