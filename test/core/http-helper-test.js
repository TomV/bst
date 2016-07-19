"use strict";
const assert = require("assert");
const http_helper_1 = require("../../lib/core/http-helper");
describe("HTTPHelper", function () {
    describe("#response()", function () {
        it("Returns a response with correct content-lenght", function (done) {
            let s = http_helper_1.HTTPHelper.response(200, "bst-server");
            assert.equal(s, "HTTP/1.0 200 OK\r\nContent-Length: 10\r\n\r\nbst-server");
            done();
        });
        it("Returns a response with correct content-length", function (done) {
            let s = http_helper_1.HTTPHelper.response(200, "bst-server2");
            assert.equal(s, "HTTP/1.0 200 OK\r\nContent-Length: 11\r\n\r\nbst-server2");
            done();
        });
        it("Returns a 400 response with correct content-length", function (done) {
            let s = http_helper_1.HTTPHelper.response(400, "bst-server2");
            assert.equal(s, "HTTP/1.0 400 Bad Request\r\nContent-Length: 11\r\n\r\nbst-server2");
            done();
        });
        it("Returns a 404 response with correct content-length", function (done) {
            let s = http_helper_1.HTTPHelper.response(404, "bst-server2");
            assert.equal(s, "HTTP/1.0 404 Not Found\r\nContent-Length: 11\r\n\r\nbst-server2");
            done();
        });
    });
});
function toArray(args) {
    return args.split(" ");
}
//# sourceMappingURL=http-helper-test.js.map