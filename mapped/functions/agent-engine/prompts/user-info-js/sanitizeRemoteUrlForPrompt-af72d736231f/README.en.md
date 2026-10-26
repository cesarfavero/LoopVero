# `sanitizeRemoteUrlForPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/user-info.js` · [Module README](../../../../../modules/agent-engine/prompts/user-info-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639850-639863](../../../../../../reference/runtime/host-main.cjs#L639850-L639863) | `FunctionDeclaration` | no | `remoteUrl` |
| [evaluation:430464-430477](../../../../../../reference/runtime/sand-eval-runner.cjs#L430464-L430477) | `FunctionDeclaration` | no | `remoteUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639850-639863](../../../../../../reference/runtime/host-main.cjs#L639850-L639863) | 1 | 0 | 0 | 3 | 0 | 1 |
| [evaluation:430464-430477](../../../../../../reference/runtime/sand-eval-runner.cjs#L430464-L430477) | 1 | 0 | 0 | 3 | 0 | 1 |

### host:639850

Calls written directly in this body: `new URL`, `parsedRemoteUrl.toString`, `remoteUrl.trim`.

Assignment or increment targets: `parsedRemoteUrl.password`, `parsedRemoteUrl.username`.

SHA-256 of the source span: `76bdf5064d960a349eb2ffaba8f30d3a18ff8b86a62eab1115aefa23280b9600`.

### evaluation:430464

Calls written directly in this body: `new URL`, `parsedRemoteUrl.toString`, `remoteUrl.trim`.

Assignment or increment targets: `parsedRemoteUrl.password`, `parsedRemoteUrl.username`.

SHA-256 of the source span: `76bdf5064d960a349eb2ffaba8f30d3a18ff8b86a62eab1115aefa23280b9600`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
