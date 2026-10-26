# `getSandVariant`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/sand-variant.ts` · [Module README](../../../../../modules/shared/node/sand-variant-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:430840-430842](../../../../../../reference/runtime/host-main.cjs#L430840-L430842) | `FunctionDeclaration` | no | `(none)` |
| [evaluation:530449-530451](../../../../../../reference/runtime/sand-eval-runner.cjs#L530449-L530451) | `FunctionDeclaration` | no | `(none)` |
| [state-worker:371-373](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L371-L373) | `FunctionDeclaration` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430840-430842](../../../../../../reference/runtime/host-main.cjs#L430840-L430842) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:530449-530451](../../../../../../reference/runtime/sand-eval-runner.cjs#L530449-L530451) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:371-373](../../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L371-L373) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:430840

Calls written directly in this body: `sandVariantOf`.

SHA-256 of the source span: `8266d80d1b3da7c8d4dcfd48a560e08a34cca8911e6740930fe91461f3db3d78`.

### evaluation:530449

Calls written directly in this body: `sandVariantOf`.

SHA-256 of the source span: `8266d80d1b3da7c8d4dcfd48a560e08a34cca8911e6740930fe91461f3db3d78`.

### state-worker:371

Calls written directly in this body: `sandVariantOf`.

SHA-256 of the source span: `8266d80d1b3da7c8d4dcfd48a560e08a34cca8911e6740930fe91461f3db3d78`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
