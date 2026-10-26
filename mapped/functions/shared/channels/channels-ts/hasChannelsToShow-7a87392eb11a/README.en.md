# `hasChannelsToShow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/channels/channels.ts` · [Module README](../../../../../modules/shared/channels/channels-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:474529-474532](../../../../../../reference/runtime/sand-eval-runner.cjs#L474529-L474532) | `FunctionDeclaration` | no | `manifests, connections` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:474529-474532](../../../../../../reference/runtime/sand-eval-runner.cjs#L474529-L474532) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:474529

Calls written directly in this body: `manifests.some`.

SHA-256 of the source span: `1329cd62592f1fe8af0ba71a1b99380ef059d01a1513578c750bf4667c82ceeb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
