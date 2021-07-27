const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

function Random(numbers) {
  var rnd = Math.floor(Math.random() * numbers);
  return rnd
}

router.get('/', async (ctx) => {
  try{
    const picturesList = await ctx.orm.picture.findAll();
    const index = Random(picturesList.length);
    const pictureURL = picturesList[index].URL
    await ctx.render('index', { pictureURL, notice: ctx.flashMessage.notice });
  } catch {
    ctx.throw(400);
  }
});

module.exports = router;
