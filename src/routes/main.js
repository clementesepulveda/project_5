const KoaRouter = require('koa-router');
const pkg = require('../../package.json');

const router = new KoaRouter();

router.get('/', async (ctx) => {
    // const publicacionsList = await ctx.orm.publicacion.findAll();
    // await ctx.render('main', {
    //   publicacionsList,
    //   publicacionPath: (publicacion) => ctx.router.url('publicacions.show', { id: publicacion.id }),
    //   notice: ctx.flashMessage.notice,
    // });
    await ctx.render('/', {
      publicacionPath: (publicacion) => ctx.router.url('publicacions.show', { id: publicacion.id }),
      notice: ctx.flashMessage.notice,
    });
  });

module.exports = router;
