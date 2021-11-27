const createATag = (tagName, className, id) => {
    const newTag = document.createElement(tagName);
    if (tagName) {
        return newTag;
    } else if (className) {
        newTag.classList.add(...className);
    } else if (id) {
        newTag.id = id;
    } else {
        null;
    }
};

const createATagWithChildren = (tagName, className, id, children) => {
    const newTag = document.createElement(tagName, className, id);
    children.forEach((child) => {
        newTag.appendChild(child);
    });
    return newTag;
};

const addElement = (element, destination) => {
    const destinationEl = document.querySelector(destination);
    if (destinationEl) {
        destinationEl.appendChild(element);
    }

};

const getElement = (selector, all) => {
    if (all) {
        return document.querySelectorAll(selector)
    } else {
        return document.querySelector(selector);
    }
}

const removeElement = (selector, all) => {
    if (all) {
        selectedEls = document.querySelectorAll(selector);
        selectedEls.forEach(element => {
            element.remove();
        });
        return selectedEls;
    };
};

const removeElement = (selector, all) => {
    if (all) {
        selectedEls = document.querySelectorAll(selector);
        selectedEls.forEach(element => {
            element.remove();
        });
        return selectedEls;
    } else document.querySelector(selector).remove();
};

const addStyles = (selector, styleProperty, styleValue) => {
    selectedEl = document.querySelectorAll(selector);
    selectedEl.style(styleProperty) = styleValue;
    return selectedEl;
};

const setText = (selector, text) => {
    selectedEl = document.querySelectorAll(selector);
    selectedEl.textContent += text;
    return selectedEl;
}



  
