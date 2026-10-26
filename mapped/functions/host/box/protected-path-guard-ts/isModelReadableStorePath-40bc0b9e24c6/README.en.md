# `isModelReadableStorePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/protected-path-guard.ts` · [Module README](../../../../../modules/host/box/protected-path-guard-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:679108-679113](../../../../../../reference/runtime/host-main.cjs#L679108-L679113) | `FunctionDeclaration` | no | `root, path33` |
| [evaluation:626973-626978](../../../../../../reference/runtime/sand-eval-runner.cjs#L626973-L626978) | `FunctionDeclaration` | no | `root, path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679108-679113](../../../../../../reference/runtime/host-main.cjs#L679108-L679113) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:626973-626978](../../../../../../reference/runtime/sand-eval-runner.cjs#L626973-L626978) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:679108

Calls written directly in this body: `.split`, `MODEL_READABLE_STORE_TREES.has`, `segments.every`.

SHA-256 of the source span: `99a21605656dfb4f05c53dc252b46e039e4e8b1cba9da2ab5185738288c3acb5`.

### evaluation:626973

Calls written directly in this body: `.split`, `MODEL_READABLE_STORE_TREES.has`, `segments.every`.

SHA-256 of the source span: `08e8e171dbb225b27daf6c1fdc33b4d4675e57bf4f8b43ffd85078ce48caae14`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
