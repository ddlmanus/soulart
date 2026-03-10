<div align="center">
    # Soulart
<img width="2912" height="1454" alt="image" src="https://github.com/user-attachments/assets/b07ceec3-243b-4fe0-bafd-6a5d2cf8fad6" />
#有需要的可以去某鱼上搜Soulart同款Lovart源码

    -----
![61933a63a20b4e57f409846d7ffd8110](https://github.com/user-attachments/assets/6ec423ec-100b-43c1-a4ed-d8f37d4df157)

应用功能部分截图：
<img width="2940" height="1728" alt="image" src="https://github.com/user-attachments/assets/699f5377-1040-43cb-9d6f-43ae4382c782" />
<img width="2940" height="1728" alt="image" src="https://github.com/user-attachments/assets/849a8745-a2b9-484b-98be-bf7b615b8169" />
<img width="2940" height="1728" alt="image" src="https://github.com/user-attachments/assets/81bf2ec2-6334-4cea-b53e-33582ca8dcac" />
<img width="2940" height="1728" alt="image" src="https://github.com/user-attachments/assets/f4326b58-075e-4700-b820-88b3566f75ed" />
<img width="2940" height="1728" alt="image" src="https://github.com/user-attachments/assets/69a438cc-52e0-4b33-8be9-ac04dff996bb" />
<img width="2940" height="1728" alt="image" src="https://github.com/user-attachments/assets/8da568b6-d0cc-4fc0-aec0-5b171f494906" />
<img width="2940" height="1728" alt="image" src="https://github.com/user-attachments/assets/d576d5be-2df8-4599-88f6-a91f4d5306cb" />
<img width="2940" height="1728" alt="image" src="https://github.com/user-attachments/assets/878b17e2-f594-417b-a0ec-ee166783dd3d" />
<img width="2940" height="1728" alt="image" src="https://github.com/user-attachments/assets/11812c1b-be49-46a2-b8b5-3bbf1eda7484" />
<img width="2940" height="1728" alt="image" src="https://github.com/user-attachments/assets/d147d345-8e6c-4461-9881-64522f603b70" />

</div>

---
应用部分截图：
<img width="2940" height="1726" alt="345ee266d25c40764836b824959a54a0" src="https://github.com/user-attachments/assets/7c07f886-9778-4abd-967f-2e1918f2151b" />
<img width="1424" height="1220" alt="bf5fefc4956d5d45e2575685571a1cc3" src="https://github.com/user-attachments/assets/71061714-9eb4-4257-ba76-4c349bed9bda" />

<img width="2940" height="1728" alt="96e32ef4a8f72096b02be8c6e7e4e1c6" src="https://github.com/user-attachments/assets/ebf7e9f4-ecee-4506-80e5-09ad3c86edd3" />
<img width="2940" height="1728" alt="282f0717f0e52c7092b862058ec33e16" src="https://github.com/user-attachments/assets/907454b4-bf51-476d-a38f-073f34200c37" />
<img width="2940" height="1726" alt="e16d0ec65175609e96df1645f2d80bd2" src="https://github.com/user-attachments/assets/416497bc-7115-4c60-8d40-a87a4e2dd225" />
<img width="2436" height="1344" alt="1081b357dbc3dba6163ef1601d05664b" src="https://github.com/user-attachments/assets/20dc1e71-8d37-4a54-a4c9-c9d74c63e4a3" />
<img width="2940" height="1728" alt="b9ad7942906511345fc65db47bbf7163" src="https://github.com/user-attachments/assets/fc29efdc-a3b7-4a74-81f4-1eae0beddd0d" />
<img width="2940" height="1728" alt="a9d45a084c4dd740a6275a92d7d41f91" src="https://github.com/user-attachments/assets/8c658bae-8ecf-4163-b1fa-6a062dd852df" />
<img width="2940" height="1728" alt="db6e2ed9dc17f543f8c662354a95f770" src="https://github.com/user-attachments/assets/202a7abc-df81-4108-a58a-5eec3b7bf029" />
<img width="2940" height="1728" alt="8465ae8564940921fe378c7e06221ffc" src="https://github.com/user-attachments/assets/85978326-3400-47bd-a85b-be5c2be668f3" />
![Uploading dffa0288d137a3e870033e2f2ef72a57.png…]()









## Overview

`Soulart ` is a **sanitized public edition** extracted from a production AI design platform.

It is intended as a clean, extensible foundation for:

- open-source collaboration
- frontend baseline reuse
- independent feature development

This repository is intentionally **safe for public release** and does not contain private production internals.

For the full private system capability map (documentation only), see:

- [PROJECT_CORE_FEATURES.md](./PROJECT_CORE_FEATURES.md)

---

## Feature Highlights

| Module | Description |
|---|---|
| `App Router Base` | Next.js App Router scaffold with a minimal, maintainable layout |
| `Public Pages` | Ready pages: Home, About, Privacy, Terms |
| `Style Foundation` | Global CSS tokens and clean visual baseline |
| `Open-Safe Scope` | Sanitized release boundary with clear excluded modules |
| `Extensible Skeleton` | Easy to add future open-source modules on top |

---

## Preview

![Soulart Open Preview](./docs/readme-preview.svg)

---

## Open-Source Scope

### Included

- basic frontend project skeleton
- static public pages and route structure
- reusable style and layout foundation
- repo structure suitable for incremental open development

### Excluded (private/product-critical)

- full canvas engine and editor internals
- full chat / agent orchestration
- full admin backend
- LLM routing and provider invocation runtime
- database schemas/migrations, Redis, and cloud service integration
- production credentials and private infrastructure logic

---

## Architecture

```mermaid
flowchart LR
    A["Public User"] --> B["Next.js App Router"]
    B --> C["Home / About / Privacy / Terms"]
    B --> D["Reusable Style & Layout Base"]
    D --> E["Future Open Modules"]
```

---

## Project Structure

```text
soulart-open/
├── app/
│   ├── page.tsx
│   ├── about/page.tsx
│   ├── privacy/page.tsx
│   ├── terms/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── docs/
│   ├── readme-banner.svg
│   └── readme-preview.svg
├── public/
├── PROJECT_CORE_FEATURES.md
├── README.md
├── LICENSE
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Run local dev server

```bash
npm run dev
```

### 3. Open in browser

- [http://localhost:3000](http://localhost:3000)

---

## Roadmap

- [ ] add a reusable component section with docs
- [ ] provide optional API mock layer for frontend demos
- [ ] add tests and CI workflow for open-source quality gate
- [ ] publish contribution templates and issue labels

---

## Contributing

PRs are welcome for open-scope modules.

Before contributing:

- keep changes inside public-safe boundaries
- do not add secrets, private endpoints, or production credentials
- avoid porting private production logic directly

---

## License

Released under the MIT License.
