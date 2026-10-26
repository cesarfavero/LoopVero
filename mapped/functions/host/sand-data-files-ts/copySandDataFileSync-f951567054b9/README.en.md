# `copySandDataFileSync`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `host/sand-data-files.ts` · [Module README](../../../../modules/host/sand-data-files-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:453918-453931](../../../../../reference/runtime/host-main.cjs#L453918-L453931) | `FunctionDeclaration` | no | `source, target` |
| [state-worker:556-569](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L556-L569) | `FunctionDeclaration` | no | `source, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453918-453931](../../../../../reference/runtime/host-main.cjs#L453918-L453931) | 1 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:556-569](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L556-L569) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:453918

Calls written directly in this body: `openNoFollowSync2`, `sandDataNoFollowRoot`, `withParentNoFollowSync`.

SHA-256 of the source span: `1c1483065bca319bd46fa2633aac0c47034472fd7632380c7bd5bca37af94d0a`.

### state-worker:556

Calls written directly in this body: `openNoFollowSync`, `sandDataNoFollowRoot`, `withParentNoFollowSync`.

SHA-256 of the source span: `03a174b50b48ad6c1c83c309fe745063d146a95abac5774f1adc28bcc24d41ce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
