const containerId = 'loadingIndicatorContainer'
const elementId = 'loadingIndicator'

export default class {
    static show() {
        let container = parent.document.getElementById(containerId)
        if (container) {
            return
        }
        container = document.createElement('div')
        container.id = containerId
        const element = document.createElement('div')
        element.id = elementId
        container.appendChild(element)
        parent.document.body.appendChild(container)
    }

    static hide() {
        const container = parent.document.getElementById(containerId)
        if (container) {
            container.remove()
        }
    }
}
