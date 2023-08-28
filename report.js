const newman = require("newman");

newman.run({
    collection: 'https://api.postman.com/collections/29168349-35e47bca-a170-4dab-a861-76980fc3c14f?access_key=PMAT-01H8MD0J80HR44J1A1GXJXX588',
    //require(""), // pointing to local JSON file.

    iterationCount: 1,
    reporters: "htmlextra",
    reporter: {
        htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
        },
    },
},function (err) {
    if (err) {throw err;}
    console.log("collection run complete!");
});