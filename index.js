function filterObj(arr, obj, options) {
    let filtred = null;
    if(options.length != 0) {
        if(options.op == 'eq') {
            filtred = arr.filter(a => a == obj);
        } else if(options.op == 'sup') {
            filtred = arr.filter(a => a > obj);
        } else {
            filtred = arr.filter(a => a < obj);
        }
    }
    return filtred ? filtred : {msg: 'Undefined options', data: arr};
}

module.exports.filterObj = filterObj;