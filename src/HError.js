export default class HError {
    constructor(code, details = {}) {
        this._code = code;
        this._details = details;
        this._message = details.message || "";
    }

    isError(code) {
        return this._code === code;
    }

    get code() {
        return this._code;
    }

    get message() {
        return this._message;
    }

    get details() {
        return this._details;
    }

    toString() {
        return `Error ${this.code}: ${this._detailsString}`;
    }

    setCodes(codes) {
        this._codes = codes;
    }

    get _detailsString() {
        return Object.keys(this._details).map(detail => {
            return `${detail}: ${this._details[detail].toString()}`;
        }).join(" / ");
    }
}
