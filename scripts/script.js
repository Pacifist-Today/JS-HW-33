"use strict"

let generateUl = function (array) {
    let generateList = function (array, elem) {
        for (let item of array) {
            let liElem = document.createElement("li")
            if (Array.isArray(item)) {
                let ulInner = document.createElement("ul")
                liElem.append(generateList(item, ulInner))
            } else {
                liElem.innerHTML = item
            }
            elem.append(liElem)
        }
        return elem;
    }
    return generateList(array, document.createElement("ul"))
}

let generatedList = generateUl([1, 2, [1.1, 1.2, 1.3], 3])
document.body.append(generatedList)