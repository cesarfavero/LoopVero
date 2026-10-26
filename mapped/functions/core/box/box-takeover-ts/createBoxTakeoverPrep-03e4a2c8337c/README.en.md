# `createBoxTakeoverPrep`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-takeover.ts` · [Module README](../../../../../modules/core/box/box-takeover-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776086-776101](../../../../../../reference/runtime/host-main.cjs#L776086-L776101) | `FunctionDeclaration` | no | `deps` |
| [evaluation:575743-575758](../../../../../../reference/runtime/sand-eval-runner.cjs#L575743-L575758) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776086-776101](../../../../../../reference/runtime/host-main.cjs#L776086-L776101) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:575743-575758](../../../../../../reference/runtime/sand-eval-runner.cjs#L575743-L575758) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:776086

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `44933b1f0870f8b9f0f455109299408acce844852dc8a7bef8da1f05d55f8c12`.

### evaluation:575743

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `a72d79da481742ede1ae0c66108f64f729d3c141a45b41da237ac9e67c7407a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
