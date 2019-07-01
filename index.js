/**
 * This snippet supports requests with GET, POST, HEAD, or OPTIONS methods from any origin.
 * These requests are able to view the Content-Type header only.
 * Change the corHeaders below to modify the type of requests and headers
 * to accept
 */
const allowedMethods = 'GET, HEAD, POST, OPTIONS'
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': allowedMethods,
  'Access-Control-Allow-Headers': 'Content-Type',
}

function handleOptions(request) {
  if (
    request.headers.get('Origin') !== null &&
    request.headers.get('Access-Control-Request-Method') !== null &&
    allowedMethods.includes(request.headers.get('Access-Control-Request-Method')) &&
    request.headers.get('Access-Control-Request-Headers') !== null
  ) {
    // Handle CORS pre-flight request.
    return new Response(null, {
      headers: corsHeaders,
    })
  } else {
    // Handle standard OPTIONS request.
    return new Response(null, {
      headers: {
        Allow: allowedMethods,
      },
    })
  }
}

async function handleRequest(request) {
  if (request.method === 'OPTIONS') {
    return handleOptions(request)
  } else if (allowedMethods.includes(request.method)) {
    // Pass-through to origin.
    return fetch(request)
  } else {
    return new Response(null, {
      status: 405,
      statusText: 'Method Not Allowed',
    })
  }
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
