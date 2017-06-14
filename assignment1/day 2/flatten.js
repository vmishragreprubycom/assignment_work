// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {

    var output = {};

    for (var key in unflatObject) {
        if ((typeof unflatObject[key]) == 'object') {
            var flatObject = flatten(unflatObject[key]);

            for (var lastObjectKey in flatObject) {
                output[key + '.' + lastObjectKey] = flatObject[lastObjectKey];
            }
        } else {
            output[key] = unflatObject[key];
        }
    }
    return output;

}
