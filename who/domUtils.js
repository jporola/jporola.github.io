export const setText = (elementId, text) => {
    document.getElementById(elementId).textContent = text;
}

export const removeAllChilds = (elementId) => {
    const element = document.getElementById(elementId);
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}
