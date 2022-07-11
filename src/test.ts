export function callFnWithError(fn) {
    const handler = {
        "namedHandlerFn": function namedHandlerFn() {
            fn.apply(this);
        }
    }
    setTimeout(handler["namedHandlerFn"], 0);
}