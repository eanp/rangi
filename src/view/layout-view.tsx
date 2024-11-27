import { html } from "hono/html";
import { jsxRenderer } from "hono/jsx-renderer";
import { ValdationAlert } from "./component-view";
const app_name = Bun.env.APP_NAME;

export const renderer = jsxRenderer(({ children }) => {
  return html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${app_name}</title>
        <script src="/public/htmx.org@2.0.0.js"></script>
        <script src="/public/alpinejs@3.14.1.js" defer></script>
        <script src="/public/focus@3.x.x.js" defer></script>
        <link href="/public/styles.css" rel="stylesheet">
        <style>
          /* sidebar */
          @media (max-width: 1023px) {
            .sidebar {
              transform: translateX(-100%);
              transition: transform 0.3s ease-in-out;
            }

            .sidebar.open {
              transform: translateX(0);
            }
          }

          /* htmx indicator */
          .htmx-indicator {
            opacity: 0;
            transition: opacity 500ms ease-in;
          }

          .htmx-request .htmx-indicator {
            opacity: 1;
          }

          .htmx-request.htmx-indicator {
            opacity: 1;
          }

          .smooth {
            transition: all 0.3s ease-in;
          }
        </style>
      </head>

      <body class="bg-gray-100 smooth">
        ${children}

        <script>
          // sidebar
          document.addEventListener("DOMContentLoaded", (event) => {
            const menuButton = document.getElementById("menuButton");
            const sidebar = document.getElementById("sidebar");
            const sectionButtons = document.querySelectorAll("nav button");

            menuButton.addEventListener("click", () => {
              sidebar.classList.toggle("open");
            });

            sectionButtons.forEach((button) => {
              button.addEventListener("click", () => {
                const ul = button.nextElementSibling;
                ul.classList.toggle("hidden");
                const svg = button.querySelector("svg");
                svg.classList.toggle("rotate-90");
              });
            });
          });
        </script>
      </body>
    </html>
  `;
});

export const LoginFor = () => (
  <form
    hx-post="/todo"
    hx-target="#todo"
    hx-swap="beforebegin"
    _="on htmx:afterRequest reset() me"
    class="mb-4"
  >
    <div class="mb-2">
      <input
        name="title"
        type="text"
        class="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg p-2.5"
      />
    </div>
    <button
      class="text-white bg-blue-700 hover:bg-blue-800 rounded-lg px-5 py-2 text-center"
      type="submit"
    >
      Submit
    </button>
  </form>
);

export const LoginForm = ({
  email,
  message,
}: {
  email: string;
  message: string[] | boolean;
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

export const RegisterForm = ({
  email,
  message,
}: {
  email: string;
  message: string[] | boolean;
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
