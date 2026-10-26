# `LocalExecSandBox.resolveBoxPath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/local-exec-sand-box.ts` · [Module README](../../../../../modules/host/box/local-exec-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:627109-627111](../../../../../../reference/runtime/sand-eval-runner.cjs#L627109-L627111) | `method` | no | `boxPath` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627109-627111](../../../../../../reference/runtime/sand-eval-runner.cjs#L627109-L627111) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:627109

Calls written directly in this body: `resolveProjectDir`.

SHA-256 of the source span: `bacdd95ba56ed5ef2d27eed5f5a5c44f209d6180b4f54f387d66ce4f83360700`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
