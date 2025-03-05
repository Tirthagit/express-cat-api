const asyncHandler = require("express-async-handler");

const handleIndexRequest = asyncHandler(async (request, respose) => {
    return respose.render("index", {
        title: "Hi",
        text: "I am making an API"
    });
});

module.exports = handleIndexRequest;