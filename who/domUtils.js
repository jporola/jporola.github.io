export const setText = (elementId, text) => {
    document.getElementById(elementId).textContent = text;
}

export const removeAllChilds = (elementId) => {
    const element = document.getElementById(elementId);
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

export const loadPage = (name) => {
    parent.document.page.data = `${name}.html`;
}

export const loadDefaultPage = () => {
    loadPage('correctorder');
}

export const incorrect = () => {
    return new Promise(resolve => {
        document.body.addEventListener('animationend', (event) => {
            if (event.animationName === 'incorrect') {
                event.srcElement.classList.remove('incorrect');
                resolve();
            }
        }, {
            once: true
        });

        document.body.classList.add('incorrect');
    });
}
