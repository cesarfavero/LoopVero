# `reviewedWriteProvenance`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/runner/sand-automation-auto-review.ts` · [Module README](../../../../../modules/core/runner/sand-automation-auto-review-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762207-762209](../../../../../../reference/runtime/host-main.cjs#L762207-L762209) | `FunctionDeclaration` | no | `turnProvenance2` |
| [evaluation:554817-554819](../../../../../../reference/runtime/sand-eval-runner.cjs#L554817-L554819) | `FunctionDeclaration` | no | `turnProvenance2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762207-762209](../../../../../../reference/runtime/host-main.cjs#L762207-L762209) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554817-554819](../../../../../../reference/runtime/sand-eval-runner.cjs#L554817-L554819) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:762207

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `ad67150a057d8b88a4c21e1ac96b63eb7b9d8e498af059539b28df291694c2c6`.

### evaluation:554817

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `ad67150a057d8b88a4c21e1ac96b63eb7b9d8e498af059539b28df291694c2c6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
