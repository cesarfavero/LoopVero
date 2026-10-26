# `collectPullRequests`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-pull-requests.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-pull-requests-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:566594-566610](../../../../../../reference/runtime/sand-eval-runner.cjs#L566594-L566610) | `FunctionDeclaration` | no | `agents` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:566594-566610](../../../../../../reference/runtime/sand-eval-runner.cjs#L566594-L566610) | 3 | 2 | 0 | 1 | 0 | 0 |

### evaluation:566594

Calls written directly in this body: `byUrl.get`, `byUrl.set`, `entries.push`, `new Map`, `ownPullRequests`, `shared.owners.push`.

SHA-256 of the source span: `d32ef0ad6db3a926261521c44b82dcdd2ffa02726827b79727a0c8a93ad44154`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
