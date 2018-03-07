/**
 * @param {any} obj
 * @param {any} form
 * @param {any} namespace
 * @returns
 */
const obj2fd = (obj, form, namespace) => {
    let fd = form || new FormData();
    let formKey;

    for (let property in obj) {
        //if (obj.hasOwnProperty(property) && obj[property]) {
        if (obj.hasOwnProperty(property)) {
            if (namespace) {
                formKey = namespace + '[' + property + ']';
            } else {
                formKey = property;
            }

            if (obj[property]instanceof Date) {
                fd.append(formKey, obj[property].toISOString());
            } else if (typeof obj[property] === 'object' && !(obj[property]instanceof File)) {
                obj2fd(obj[property], fd, formKey)
            } else { // if it's a string or a File object
                fd.append(formKey, obj[property])
            }
        }
    }

    return fd;
}

// Truthy version
/**
 *
 * @param {any} obj
 * @param {any} form
 * @param {any} namespace
 */
export const Truthy = (obj, form, namespace) => {
    let fd = form || new FormData();
    let formKey;
    for (let property in obj) {
        if (obj.hasOwnProperty(property) && obj[property]) {
            if (namespace) {
                formKey = namespace + '[' + property + ']';
            } else {
                formKey = property;
            }

            if (obj[property]instanceof Date) {
                fd.append(formKey, obj[property].toISOString());
            } else if (typeof obj[property] === 'object' && !(obj[property]instanceof File)) {
                obj2fd(obj[property], fd, formKey)
            } else { // if it's a string or a File object
                fd.append(formKey, obj[property])
            }
        }
    }
    return fd
}

export default obj2fd