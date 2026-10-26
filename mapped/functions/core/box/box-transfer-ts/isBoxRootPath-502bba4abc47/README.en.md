# `isBoxRootPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-transfer.ts` · [Module README](../../../../../modules/core/box/box-transfer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476453-476455](../../../../../../reference/runtime/host-main.cjs#L476453-L476455) | `FunctionDeclaration` | no | `path33` |
| [evaluation:515591-515593](../../../../../../reference/runtime/sand-eval-runner.cjs#L515591-L515593) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476453-476455](../../../../../../reference/runtime/host-main.cjs#L476453-L476455) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515591-515593](../../../../../../reference/runtime/sand-eval-runner.cjs#L515591-L515593) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476453

Calls written directly in this body: `BOX_PATH_ROOTS.some`.

SHA-256 of the source span: `a09616a16d5f22f195b2aa7d0b9238ebd61dfafe590fd4ff18bf2fe20ff11831`.

### evaluation:515591

Calls written directly in this body: `BOX_PATH_ROOTS.some`.

SHA-256 of the source span: `a09616a16d5f22f195b2aa7d0b9238ebd61dfafe590fd4ff18bf2fe20ff11831`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
