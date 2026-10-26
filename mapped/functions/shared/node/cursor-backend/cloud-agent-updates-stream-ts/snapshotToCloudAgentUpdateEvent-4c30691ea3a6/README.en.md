# `snapshotToCloudAgentUpdateEvent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/cloud-agent-updates-stream.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/cloud-agent-updates-stream-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:537569-537574](../../../../../../../reference/runtime/host-main.cjs#L537569-L537574) | `FunctionDeclaration` | no | `composer` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537569-537574](../../../../../../../reference/runtime/host-main.cjs#L537569-L537574) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:537569

Calls written directly in this body: `Math.trunc`, `composer.bcId.trim`, `mapRunStatus`.

SHA-256 of the source span: `3223dfb91788425c9b9e50a2b534d96a2b80d71735e458d91e5b928f94062e46`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
