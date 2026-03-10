# Soulart Open

Public, sanitized release of the project baseline.

## Scope

This repository intentionally excludes private and sensitive modules:

- Full canvas functionality
- Full chat module
- Entire admin backend
- All LLM invocation and model-routing code
- Database/Redis infrastructure and schemas
- Cloud integrations (including Alibaba Cloud related code/config)

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Notes

- Do not commit real credentials.
- Keep `.env` local only.
