This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Media-Literacy-Campaign

## AI Headline Research

The headline checker keeps its local wording analysis and can also search current web coverage through Tavily. Create a Tavily key in [the Tavily dashboard](https://app.tavily.com/home); its current free plan lists 1,000 search credits per month, with basic search costing one credit per query. The checker runs up to two searches per headline (about 500 full analyses per month at that quota). Add the keys to `.env.local` (the file is git-ignored):

```dotenv
TAVILY_API_KEY=your_tavily_api_key
GEMINI_API_KEY=your_gemini_api_key
# GEMINI_MODEL=gemini-3.8-flash
GROQ_API_KEY=your_groq_api_key
# GROQ_MODEL=openai/gpt-oss-20b
```

Restart the dev server after changing environment variables. Never expose these keys through a `NEXT_PUBLIC_` variable. Tavily retrieves search results; Gemini is tried first to assess those results, and Groq is used if Gemini is unavailable. Both models receive the same bounded search evidence, and neither performs a separate web search in this flow. Check current [Tavily credits](https://docs.tavily.com/documentation/api-credits), [Gemini pricing](https://ai.google.dev/gemini-api/docs/pricing), and [Groq rate limits](https://console.groq.com/docs/rate-limits) before deployment.

The AI review is an educational research aid, not a definitive fact-check. It reports evidence strength and links only to search results returned by Tavily. Headlines and search queries are sent to Tavily, and the headline plus retrieved snippets are sent to the selected model provider. Review provider terms before using sensitive data or deploying publicly.
