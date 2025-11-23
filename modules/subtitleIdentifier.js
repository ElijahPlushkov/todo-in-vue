function getSubtitle(todosLength) {
    let subTitle = "";
    if (todosLength === 0) {
        subTitle = "The swamp is empty - better get to work!"
    } else if (todosLength === 1) {
        subTitle = "Just one lonely task in the swamp..."
    } else {
        const messages = [
            `${todosLength} tasks waiting in the swamp!`,
            `You've got ${todosLength} fairy tale tasks!`,
            `${todosLength} adventures await!`,
            `Donkey would be proud of your ${todosLength} tasks!`
        ];
        subTitle = messages[Math.floor(Math.random() * messages.length)];
    }
    
    return subTitle;
}

window.getSubtitle = getSubtitle;