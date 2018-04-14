const elementId = 'error'

export default class {
    static show(text) {
        let element = parent.document.getElementById(elementId)
        if (element) {
            return
        }
        element = document.createElement('div')
        element.id = elementId
        element.textContent = text

        element.addEventListener('click', () => {
            this.hide()
        })

        parent.document.body.appendChild(element)
    }

    static hide() {
        const element = parent.document.getElementById(elementId)
        if (element) {
            element.remove()
        }
    }
}
