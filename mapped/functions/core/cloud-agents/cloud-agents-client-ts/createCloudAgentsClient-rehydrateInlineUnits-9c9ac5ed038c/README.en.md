# `createCloudAgentsClient/rehydrateInlineUnits`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agents-client.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agents-client-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:513393-513428](../../../../../../reference/runtime/host-main.cjs#L513393-L513428) | `FunctionDeclaration` | yes | `state` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513393-513428](../../../../../../reference/runtime/host-main.cjs#L513393-L513428) | 2 | 1 | 1 | 2 | 0 | 0 |

### host:513393

Calls written directly in this body: `Promise.allSettled`, `deps.getDashboardClient`, `new Map`, `pending.set`, `pending.values`, `settled.forEach`, `state.units.map`, `targets.map`, `walkUnitApplicationKey`.

SHA-256 of the source span: `06d29a59bca68156320090897bd88477b138896cf43469e2db972c62f1f52c6b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
