import type { MetaFunction } from "@vercel/remix";

export const meta: MetaFunction = () => [{ title: "Remix@Edge | New Remix App" }];

export default function Node() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix@Node</h1>
    </div>
  );
}
