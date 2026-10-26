# `createCloudAgentsClient/publishRepository`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513206-513226](../../../../../../reference/runtime/host-main.cjs#L513206-L513226) | `FunctionDeclaration` | yes | `bcId, repoName, visibility` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513206-513226](../../../../../../reference/runtime/host-main.cjs#L513206-L513226) | 2 | 0 | 1 | 1 | 1 | 0 |

### host:513206

Calls written directly in this body: `.publishBackgroundComposerTempRepo`, `PUBLISH_VISIBILITY_FROM_WIRE.get`, `client`, `new Error`, `new PublishBackgroundComposerTempRepoRequest`, `response.canonicalRepoUrl.trim`, `response.name.trim`, `response.owner.trim`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `c51ee47d869f1631bf324393dc0c031d2f973127673dcbb56a20a18b677c3e93`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
