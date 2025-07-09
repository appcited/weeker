# Development

## System requirements

You MAY use Linux, macOS or Windows as development OS with AMD64 or ARM64 processor architecture. For Windows you MUST use [WSL 2](https://docs.docker.com/desktop/wsl/).

It is REQUIRED to install a [supported container runtime](https://code.visualstudio.com/docs/devcontainers/containers#_system-requirements) including [Docker](https://docs.docker.com/get-docker/) and [Podman](https://podman.io). It is also REQUIRED to use an extension supporting [Compose](https://compose-spec.io/) like [Docker Compose](https://docs.docker.com/compose/install/) or [Podman Compose](https://podman-desktop.io/docs/compose/setting-up-compose).

## Dev containers

This project uses [dev containers](https://containers.dev) to ensure a reproducible, consistent development and ci environment.

![devcontainer stages](https://raw.githubusercontent.com/devcontainers/spec/main/images/dev-container-stages.png)

## IDE

You MAY use [any IDE which supports dev containers](https://containers.dev/supporting#editors), but it is RECOMMENDED to use [VSCode](https://code.visualstudio.com/) with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) or [GitHub Codespaces](https://github.com/features/codespaces).

## Run commands / targets

This project uses [Nx](https://nx.dev/) to define and manage targets along with their dependencies. 

You CAN run Nx targets using the bash scripts in the `run` directory. The following commands are available:
- `run/ci`: Runs all CI pipeline targets
- `run/dev`: Starts all projects in development mode
- `run/init`: Initializes the environment (e.g., installs dependencies)
- `run/publish`: Publishes the application

## Continuous integration and deployment (CI/CD)

This project utilizes continuous integration (CI) and continuous deployment (CD) to ensure the quality and stability of the codebase.

The CI checks associated with this project can be executed locally using the `run/ci` command. Additionally, these checks are **enforced** by a [GitHub Action](https://github.com/features/actions), which automatically runs the CI process whenever changes are pushed to the repository.

When updates are made to the main branch and all CI checks are successfully completed, the changes are automatically deployed to the [review environment](http://weeker.review). This process ensures that new features and updates undergo thorough validation before being integrated into the production system.

## Automated dependency management

We use [Renovate](https://github.com/renovatebot/renovate) to manage dependency updates, ensuring our dependencies are consistently up-to-date. This tool automatically identifies outdated dependencies and proposes updates through pull requests, streamlining the review and integration process.

## Conventions

### Conventional Commits

This project uses [Conventional Commits](https://www.conventionalcommits.org/) for commit messages. Please follow these guidelines when making commits:

- Use the format: `<type>(<scope>): <description>`
- Common types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`
- Example: `feat(auth): add login endpoint`
