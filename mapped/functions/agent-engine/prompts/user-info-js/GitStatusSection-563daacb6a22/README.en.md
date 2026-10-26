# `GitStatusSection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:640036-640050](../../../../../../reference/runtime/host-main.cjs#L640036-L640050) | `FunctionDeclaration` | no | `{ gitRepos, gitReposWithStatus, initialWorkingDirectory, agentType, toolInfo }` |
| [evaluation:430650-430664](../../../../../../reference/runtime/sand-eval-runner.cjs#L430650-L430664) | `FunctionDeclaration` | no | `{ gitRepos, gitReposWithStatus, initialWorkingDirectory, agentType, toolInfo }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640036-640050](../../../../../../reference/runtime/host-main.cjs#L640036-L640050) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430650-430664](../../../../../../reference/runtime/sand-eval-runner.cjs#L430650-L430664) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:640036

Calls written directly in this body: `deduplicateRepos`, `gitReposWithStatus.map`, `initialWorkingDirectory.trim`, `jsx`, `jsxs`, `new Set`, `reposToDisplay.map`.

SHA-256 of the source span: `2b3713b0382445962b04ead8442c676726c4809a21fc3b9b40ac4088b70e5ca3`.

### evaluation:430650

Calls written directly in this body: `deduplicateRepos`, `gitReposWithStatus.map`, `initialWorkingDirectory.trim`, `jsx`, `jsxs`, `new Set`, `reposToDisplay.map`.

SHA-256 of the source span: `2b3713b0382445962b04ead8442c676726c4809a21fc3b9b40ac4088b70e5ca3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
