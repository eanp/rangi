Copy .env.example to .env:
```sh
cp .env.example .env
```

To install dependencies:
```sh
bun install

npm install
```

Generate DB:
```sh
bunx prisma migrate dev
bunx prisma generate

npx prisma migrate dev
npx prisma generate
```

To run:
```sh
bun run dev:server
bun run dev:css

npm run dev:server
npm run dev:css
```

open http://localhost:3000
