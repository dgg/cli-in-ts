#!/usr/bin/env node

import { name, version, description } from "./package.json"


if (process.argv.length === 2) {
	const helpMessage =
		`\nPackage ${description}
Package ${version}
\nUsage:\n
--help\t\tHelp documentation
--version\tInstalled package version
`
	console.log(helpMessage)
} else if (process.argv.includes("--version")) {
	const versionMessage = `${name} ${version}`
	console.log(versionMessage)
}
