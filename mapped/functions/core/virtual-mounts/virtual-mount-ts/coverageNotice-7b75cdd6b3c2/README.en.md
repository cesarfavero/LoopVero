# `coverageNotice`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/virtual-mounts/virtual-mount.ts` · [Module README](../../../../../modules/core/virtual-mounts/virtual-mount-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765824-765826](../../../../../../reference/runtime/host-main.cjs#L765824-L765826) | `FunctionDeclaration` | no | `coverage` |
| [evaluation:559189-559191](../../../../../../reference/runtime/sand-eval-runner.cjs#L559189-L559191) | `FunctionDeclaration` | no | `coverage` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765824-765826](../../../../../../reference/runtime/host-main.cjs#L765824-L765826) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:559189-559191](../../../../../../reference/runtime/sand-eval-runner.cjs#L559189-L559191) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:765824

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8cbe2f34b390e670f697aec4d782dc40120fc8996eac54a295d35a7e97e1b91b`.

### evaluation:559189

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `8cbe2f34b390e670f697aec4d782dc40120fc8996eac54a295d35a7e97e1b91b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
