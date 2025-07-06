FROM debian:12.11-slim

# use bash inside running container
ENV SHELL=/bin/bash
# use bash while building container
SHELL ["/bin/bash", "-c"]

# create non-root user
ENV NON_ROOT_USER=dev
ENV NON_ROOT_USER_HOME=/home/${NON_ROOT_USER}
# default user and group id - user’s UID/GID will be updated to match
# the local user’s UID/GID to avoid permission problems (updateRemoteUserUID)
# https://containers.dev/implementors/json_reference/
ARG NON_ROOT_USER_UID=1000
ARG NON_ROOT_USER_GID=1000
RUN groupadd --gid ${NON_ROOT_USER_GID} ${NON_ROOT_USER} && \
    useradd ${NON_ROOT_USER} --uid ${NON_ROOT_USER_UID} --gid ${NON_ROOT_USER_GID} --create-home

# add user to docker group
RUN groupadd -g 800 docker && \
    usermod -aG docker ${NON_ROOT_USER}

# update package sources
RUN apt-get update && \
    apt-get upgrade -y

# install common tools
RUN apt-get install -y --no-install-recommends \
    ca-certificates \
    gnupg \
    lsb-release \
    curl \
    xz-utils \
    # for envsubst
    gettext \
    git \
    jq

# shx
# renovate: source=github-tags name=appcited/shx versioning=semver
ENV SHX_VERSION=0.1.0
RUN curl -fsSL https://raw.githubusercontent.com/appcited/shx/refs/tags/v${SHX_VERSION}/shx -o /usr/local/bin/shx && \
    chmod +x /usr/local/bin/shx

# docker
# renovate: source=github-tags name=docker/cli versioning=semver
ENV DOCKER_VERSION=27.4.1
# renovate: source=github-tags name=docker/compose versioning=semver
ENV DOCKER_COMPOSE_VERSION=2.31.0
# renovate: source=github-tags name=docker/buildx versioning=semver
ENV DOCKER_BUILDX_VERSION=0.25.0
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - && \
    echo "deb https://download.docker.com/linux/debian $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends \
        docker-ce="5:${DOCKER_VERSION}"* \
        docker-ce-cli="5:${DOCKER_VERSION}"* \
        docker-compose-plugin="${DOCKER_COMPOSE_VERSION}"* \
        docker-buildx-plugin="${DOCKER_BUILDX_VERSION}"*
# workaround for using docker.socket as non-root user in github codespaces (uses docker group id 800)
# https://github.com/microsoft/vscode-dev-containers/tree/main/containers/docker-from-docker#enabling-non-root-access-to-docker-in-the-container
RUN groupmod -g 800 docker && \
    usermod -aG docker ${NON_ROOT_USER}

## github cli
# renovate: source=github-tags name=cli/cli versioning=semver
ENV GITHUB_CLI_VERSION=2.74.2
RUN curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | apt-key add - && \
    echo "deb https://cli.github.com/packages stable main" > /etc/apt/sources.list.d/github-cli.list && \
    apt-get update && \
    apt-get install -y --no-install-recommends gh="${GITHUB_CLI_VERSION}"*

# node.js
# TODO: find a way to pin version and update it with renovate
RUN curl -fsSL https://deb.nodesource.com/setup_24.x | bash - && \
    apt-get install -y --no-install-recommends \
    nodejs

# pnpm
# renovate: source=github-tags name=pnpm/pnpm versioning=semver
ENV PNPM_VERSION=10.12.4
RUN npm install -g pnpm@${PNPM_VERSION}

# cleanup
RUN apt-get autoremove -y && \
    apt-get clean -y && \
    cd /tmp && rm -rf *
