#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var package_json_1 = require("./package.json");
if (process.argv.length === 2) {
    var helpMessage = "\nPackage " + package_json_1.description + "\nPackage " + package_json_1.version + "\n\nUsage:\n\n--help\t\tHelp documentation\n--version\tInstalled package version\n";
    console.log(helpMessage);
}
else if (process.argv.includes("--version")) {
    var versionMessage = package_json_1.name + " " + package_json_1.version;
    console.log(versionMessage);
}
