# `clampBlock`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/sand-text.ts` · [Module README](../../../../modules/shared/sand-text-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:227870-227872](../../../../../reference/runtime/host-main.cjs#L227870-L227872) | `FunctionDeclaration` | no | `raw, maxLength` |
| [evaluation:474406-474408](../../../../../reference/runtime/sand-eval-runner.cjs#L474406-L474408) | `FunctionDeclaration` | no | `raw, maxLength` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:227870-227872](../../../../../reference/runtime/host-main.cjs#L227870-L227872) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:474406-474408](../../../../../reference/runtime/sand-eval-runner.cjs#L474406-L474408) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:227870

Calls written directly in this body: `.slice`, `raw.trim`.

SHA-256 of the source span: `eee68d58dc79e2d6f012faf118e7f88d7ebb7bc27c53e468151cf32bf9afd48c`.

### evaluation:474406

Calls written directly in this body: `.slice`, `raw.trim`.

SHA-256 of the source span: `eee68d58dc79e2d6f012faf118e7f88d7ebb7bc27c53e468151cf32bf9afd48c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
