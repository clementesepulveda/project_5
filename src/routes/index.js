const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

function Random() {
  var rnd = Math.floor(Math.random() * 1000000000);
  console.log('HELP');
  return rnd
}

router.get('/', async (ctx) => {
  const rand = Random();
  await ctx.render('index', { rand, notice: ctx.flashMessage.notice });
});

module.exports = router;
