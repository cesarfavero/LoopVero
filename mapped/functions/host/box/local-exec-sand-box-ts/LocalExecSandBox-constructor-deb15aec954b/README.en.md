# `LocalExecSandBox.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/local-exec-sand-box.ts` · [Module README](../../../../../modules/host/box/local-exec-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:627002-627006](../../../../../../reference/runtime/sand-eval-runner.cjs#L627002-L627006) | `method` | no | `projectDir, protectedRoots = [], options2 = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627002-627006](../../../../../../reference/runtime/sand-eval-runner.cjs#L627002-L627006) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:627002

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `this.options`, `this.projectDir`, `this.protectedRoots`.

SHA-256 of the source span: `096352bd4220c0ab097a59c0296543798a89013e014dee992d8a0b56c01de139`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
