function filterObj(arr, obj, options) {
    if(options.length != 0) {
        if(options.op == 'eq') {
            let filtred = arr.filter(a => a == obj);
        } else if(options.op == 'sup') {
            let filtred = arr.filter(a => a > obj);
        } else {
            let filtred = arr.filter(a => a < obj);
        }
    }
    return filtred ? filtred : {msg: 'Undefined options', data: arr};
}

module.exports.filterObj = filterObj;