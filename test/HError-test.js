import HError from "../src";

describe("HError", function() {
    beforeEach(() => {
        this.herror = new HError("CODE", {
            message: "This is the message",
            originalError: {
                name: "This is the original error."
            }
        });
    });

    it("implements interface", () => {
        this.herror.should.respondTo("isError");
        this.herror.should.respondTo("toString");
        this.herror.should.respondTo("setCodes");
        this.herror.should.have.property("code");
        this.herror.should.have.property("message");
        this.herror.should.have.property("details");
    });
});
