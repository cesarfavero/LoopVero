# `LocalExecSandBox.displayWindowIndex`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/local-exec-sand-box.ts` · [Module README](../../../../../modules/host/box/local-exec-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:627112-627118](../../../../../../reference/runtime/sand-eval-runner.cjs#L627112-L627118) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627112-627118](../../../../../../reference/runtime/sand-eval-runner.cjs#L627112-L627118) | 3 | 0 | 0 | 2 | 0 | 0 |

### evaluation:627112

Calls written directly in this body: `/^:(\d+)(?:\.\d+)?$/.exec`, `Number.isSafeInteger`, `Number.parseInt`, `this.options.computerUseDisplay.trim`.

SHA-256 of the source span: `dfdd770c577684fdcf9091ae557312b2dbd1bc8e0f939b371f62425a2dc13b7f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
