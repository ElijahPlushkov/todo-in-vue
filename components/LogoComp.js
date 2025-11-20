const LogoComp = {
    template: `
    <img :class="logoDark"
             src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='45' fill='%233a5f0b' stroke='%236b8c21' stroke-width='3'/><circle cx='35' cy='40' r='5' fill='white'/><circle cx='65' cy='40' r='5' fill='white'/><circle cx='35' cy='40' r='2' fill='black'/><circle cx='65' cy='40' r='2' fill='black'/><path d='M30,65 Q50,75 70,65' stroke='white' stroke-width='3' fill='none'/></svg>"
             alt="Shrek Logo"
             width="80"
             height="80"
             class="rounded-circle me-3">
    `,
    props: ['logoDark'],
    data() {
        return {

        }
    }
}

