export const prerender = false;

export async function GET({ url }) {
  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');
  const state = url.searchParams.get('state');
  
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>X OAuth Callback</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 80px auto; padding: 0 20px; line-height: 1.6; }
    h1 { font-size: 1.5rem; margin-bottom: 1rem; }
    .code-box { background: #1a1a2e; color: #00ff88; padding: 16px; border-radius: 8px; word-break: break-all; font-family: monospace; font-size: 0.85rem; }
    .error { background: #ffebee; color: #c62828; padding: 16px; border-radius: 8px; }
    .steps { background: #f5f5f5; padding: 16px; border-radius: 8px; margin-top: 1rem; }
  </style>
</head>
<body>
  ${error ? `
    <div class="error">
      <h1>OAuth Error</h1>
      <p>${error}</p>
    </div>
  ` : code ? `
    <h1>Authorization Code Received</h1>
    <div class="code-box">${code}</div>
    <div class="steps">
      <p><strong>Next step:</strong> Copy the code above and paste it back to Fletcher in your OpenClaw session.</p>
      <p>Fletcher will exchange it for access tokens.</p>
    </div>
  ` : `
    <h1>Waiting for Authorization</h1>
    <p>No authorization code in this request.</p>
    <p>This endpoint is hit after you authorize the X app in your browser.</p>
  `}
  <p style="margin-top:2rem;font-size:0.85rem;color:#666;">starbloomconsulting.com &mdash; X OAuth callback</p>
</body>
</html>`;

  return new Response(html, {
    headers: { 'Content-Type': 'text/html' }
  });
}
