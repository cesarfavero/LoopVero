# `buildRepoFromRemote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-request-composition.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-request-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:510231-510240](../../../../../../reference/runtime/host-main.cjs#L510231-L510240) | `FunctionDeclaration` | no | `remote, baseBranch` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:510231-510240](../../../../../../reference/runtime/host-main.cjs#L510231-L510240) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:510231

Calls written directly in this body: `new SandCloudAgentLaunchError`, `sanitizeRemoteUrl2`, `sanitizeRemoteUrlForHttpUrl2`.

Explicit throw targets: `SandCloudAgentLaunchError`.

SHA-256 of the source span: `a0ecdab4afaa74ab9ab655a298b15d8dab3f31b0e2eee1ff0dfba341c5cce7ef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
