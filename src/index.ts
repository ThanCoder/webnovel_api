import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono()



app.get('/',(c)=>{
  return c.html(html`<h1>hello</h1>`)
})

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
