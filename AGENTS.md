---
applyTo: '**'
---
# Agent Instructions

## Build Tools
This project uses the following development tools:
- [Nx](https://nx.dev/) as our primary build system
- [pnpm](https://pnpm.io/) as package manager

## General Guidelines
- After finishing code generation, **always** run `run/ci` to ensure it passes continuous integration checks (build, check and test)
- If needed, gather information about the nx workspace using the tools `nx_workspace` and `nx_project_details`
