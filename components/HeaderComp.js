const HeaderComp = {
    template: `
      <div class="row mb-4">
          <div class="col-12 text-center">
              <div class="d-flex align-items-center justify-content-center">
              <logo-comp :logo-dark="logoDark"></logo-comp>
              <h1 class="header-title">Shrek's Swamp Tasks</h1>
              </div>
              <p class="shrek-quote">"Ogres are like onions... we have layers!" - Let's peel back those todo layers!</p>
            </div>
      </div>
    `,
    components: {
        'logo-comp': LogoComp
    },
    props: ['logoDark'],
    data() {
        return {};
    },
};
