const containerId = 'loadingIndicatorContainer'
const elementId = 'loadingIndicator'
const elementIdInner = 'loadingIndicatorInner'

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
        const elementInner = document.createElement('div')
        elementInner.id = elementIdInner
        container.appendChild(element)
        container.appendChild(elementInner)
        parent.document.body.appendChild(container)
    }

    static hide() {
        const container = parent.document.getElementById(containerId)
        if (container) {
            container.remove()
        }
    }
}
