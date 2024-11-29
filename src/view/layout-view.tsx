import {  FC } from "hono/jsx";
import { html } from "hono/html";
import { jsxRenderer } from "hono/jsx-renderer";
import { ValdationAlert } from "./component-view";

const app_name = Bun.env.APP_NAME;

export const renderer = jsxRenderer(({children}) => {
  return html`
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${app_name}</title>
        <script src="/public/htmx.org@2.0.0.js"></script>
        <script src="/public/alpinejs@3.14.1.js" defer></script>
        <script src="/public/focus@3.x.x.js" defer></script>
        <link href="/public/styles.css" rel="stylesheet" />
      </head>
      <body class="bg-gray-100 smooth">
        ${children}
      </body>
    </html>
  `;
});


export const UserPage: FC<{name:string;email:string;id:string;createdAt:Date}> = ({name,email,id,createdAt}) => (
  <div class="flex h-screen flex-col bg-red-500">
  <h1 class="bg-blue-300">{app_name} User Page</h1>
  <p>{name ?? "-"}</p>
  <p>{email ?? "-"}</p>
  <p>{id ?? "-"}</p>
  <p>{createdAt.toString() ?? "-"}</p>
</div>
)

export const LoginForm: FC<{ email: string;
  message: string[] | boolean;}> = ({
  email,
  message,
}) => (
  <>
    <form
      class="bg-white w-full rounded-lg py-5"
      hx-post="/login"
      hx-swap="outerHTML"
      id="login-form"
    >
      <div class="mx-auto w-3/4">
        <div class="flex flex-col items-start justify-start w-full h-full p-6  border-gray-500">
          <div class="relative w-full space-y-6">
            <div class="w-full max-w-xs my-2">
              <label class="text-sm text-gray-900" for="email">
                Email
              </label>
              <input
                autocomplete="false"
                id="email"
                name="email"
                value={`${email || ""}`}
                class="flex w-full h-10 mt-2 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
                data-primary="blue-600"
                data-rounded="rounded-md"
                placeholder="Email"
              />
            </div>
            <div class="w-full max-w-xs my-2">
              <label class="text-sm text-gray-900" for="password">
                Password
              </label>
              <input
                autocomplete="false"
                type="password"
                id="password"
                name="password"
                class="blex w-full h-10 mt-2 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
                data-primary="blue-600"
                data-rounded="rounded-md"
                placeholder="Password"
              />
            </div>
            <div class="w-full max-w-xs my-2">
              <button
                type="submit"
                class="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-neutral-950 hover:bg-neutral-950/90"
                data-primary="blue-600"
                data-rounded="rounded-md"
              >
                Submit
              </button>
            </div>

            {Array.isArray(message) ? <ValdationAlert message={message} /> : ""}
          </div>
        </div>
      </div>
    </form>
  </>
);

export const RegisterForm:FC<{ email: string;
  message: string[] | boolean;}> = ({
  email,
  message,
}) => (
  <>
    <form
      class="bg-white w-full rounded-lg py-5"
      hx-post="/register"
      hx-swap="outerHTML"
      id="register-form"
    >
      <div class="mx-auto w-3/4">
        <div class="flex flex-col items-start justify-start w-full h-full p-6  border-gray-500">
          <div class="relative w-full space-y-6">
            <div class="w-full max-w-xs my-2">
              <label class="text-sm text-gray-900" for="email">
                Name
              </label>
              <input
                autocomplete="false"
                id="name"
                name="name"
                value=""
                class="flex w-full h-10 mt-2 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
                data-primary="blue-600"
                data-rounded="rounded-md"
                placeholder="Name"
              />
            </div>
              <div class="w-full max-w-xs my-2">
              <label class="text-sm text-gray-900" for="email">
                Email
              </label>
              <input
                autocomplete="false"
                id="email"
                name="email"
                value={`${email || ""}`}
                class="flex w-full h-10 mt-2 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
                data-primary="blue-600"
                data-rounded="rounded-md"
                placeholder="Email"
              />
            </div>
            <div class="w-full max-w-xs my-2">
              <label class="text-sm text-gray-900" for="password">
                Password
              </label>
              <input
                autocomplete="false"
                type="password"
                id="password"
                name="password"
                class="blex w-full h-10 mt-2 px-3 py-2 text-sm bg-white border rounded-md border-neutral-300 ring-offset-background placeholder:text-neutral-500 focus:border-neutral-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
                data-primary="blue-600"
                data-rounded="rounded-md"
                placeholder="Password"
              />
            </div>
            <div class="w-full max-w-xs my-2">
              <button
                type="submit"
                class="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-neutral-950 hover:bg-neutral-950/90"
                data-primary="blue-600"
                data-rounded="rounded-md"
              >
                Submit
              </button>
            </div>

            {Array.isArray(message) ? <ValdationAlert message={message} /> : ""}
          </div>
        </div>
      </div>
    </form>
  </>
);
