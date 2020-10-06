# Contributing

Planned work should be listed in our issues; please start there.
If you find one that suits you, feel free to comment and assign it to yourself.
Otherwise, open a new issue and start the discussion while you are making your change.
This lets the maintainers and other contributers know what's coming.

## Technology

This project uses [Next.js](https://nextjs.org/).
It is not required that you are familiar with Next or React to make a contribution, but it will help.
You will minimally need a recent version of Node and NPM, but if you don't, there are alternatives.
Keep reading.

## Getting Started

### VS Code & Docker

If you have VS Code and Docker installed already, you can install ms-vscode-remote.remote-containers and all the dependencies will be installed for you when you launch in a container.
You can then skip to running the dev server.
For more information on the extension, see [Microsoft's documentation](https://code.visualstudio.com/docs/remote/containers).

### Node Version

The most up-to-date version of the supported Node version is in [devcontainer.json](../.devcontainer/devcontainer.json).

### Install Dependencies

_This step can be skipped if running in a VS Code container._

`npm install`

### Run Dev Server

`npm run dev`

This should start a server on port 3000.
