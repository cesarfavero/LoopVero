# `reportBackgroundShells`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/background-shell-reporting.ts` · [Module README](../../../../../modules/core/box/background-shell-reporting-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:590312-590353](../../../../../../reference/runtime/host-main.cjs#L590312-L590353) | `FunctionDeclaration` | no | `ctx, accessor, terminalsFolder, keepAwakeCapMs` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:590312-590353](../../../../../../reference/runtime/host-main.cjs#L590312-L590353) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:590312

Calls written directly in this body: `ctx.get`, `new CombinedResourceAccessor`, `resourceEntry`.

SHA-256 of the source span: `5ae91a0674ffcc8124f6df8dee7154459ea0f3cdd7d1e433900d1521d983891f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
