import Koa from 'koa';
import Router from '@koa/router';
import staticFiles from 'koa-static';
import { nodeResolve } from 'koa-node-resolve';
import { RenderResultReadable } from '@lit-labs/ssr/lib/render-result-readable.js';
import {ModuleLoader} from '@lit-labs/ssr/lib/module-loader.js';

const app = new Koa();
const router = new Router();

router.get('/', async (ctx) => {
  const moduleLoader = new ModuleLoader();
  const importResult = await moduleLoader.importModule(
    `./pages/index.js`, // Module to load in VM context
    import.meta.url          // Referrer URL for module
  );
  const {renderTemplate} = importResult.module.namespace
  const ssrResult = await renderTemplate();
  ctx.type = 'text/html';
  ctx.body = new RenderResultReadable(ssrResult);
});

app.use(router.routes());
app.use(nodeResolve());
app.use(staticFiles('.'));
console.log("Server started at: \n", `http://localhost:3000`)
app.listen(3000);
