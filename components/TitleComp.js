const TitleComp = {
    template: `
    <div class="text-center mb-4">
        <h2>{{ title }}</h2>
        <p class="subtitle">{{ subTitle }}</p>
      </div>`,
    props: ['subTitle'],

    data() {
        return {
            title: "Your Fairy Tale Tasks"
        }
    }
}