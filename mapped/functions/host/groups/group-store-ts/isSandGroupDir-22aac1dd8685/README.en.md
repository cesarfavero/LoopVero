# `isSandGroupDir`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/group-messaging/README.en.md).

**Module:** `host/groups/group-store.ts` · [Module README](../../../../../modules/host/groups/group-store-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:491489-491491](../../../../../../reference/runtime/host-main.cjs#L491489-L491491) | `FunctionDeclaration` | no | `agentDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:491489-491491](../../../../../../reference/runtime/host-main.cjs#L491489-L491491) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:491489

Calls written directly in this body: `readSandGroupConfig`.

SHA-256 of the source span: `0cf7edc3b0fd94615ee35867cd55427ce858d110e986c9771bd12394a42b5de8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
