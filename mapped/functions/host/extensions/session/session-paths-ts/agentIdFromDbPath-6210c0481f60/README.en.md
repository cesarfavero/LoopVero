# `agentIdFromDbPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/session-paths.ts` · [Module README](../../../../../../modules/host/extensions/session/session-paths-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:718210-718212](../../../../../../../reference/runtime/host-main.cjs#L718210-L718212) | `FunctionDeclaration` | no | `dbPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:718210-718212](../../../../../../../reference/runtime/host-main.cjs#L718210-L718212) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:718210

Calls written directly in this body: `assertValidSandAgentId`.

SHA-256 of the source span: `64d7a48bb4445610084fb218cf367e7143650bde1477a4ca508c7ccaf03d8d6e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
