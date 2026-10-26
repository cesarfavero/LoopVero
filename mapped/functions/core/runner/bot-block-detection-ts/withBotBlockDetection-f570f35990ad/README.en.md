# `withBotBlockDetection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/bot-block-detection.ts` · [Module README](../../../../../modules/core/runner/bot-block-detection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:484515-484585](../../../../../../reference/runtime/sand-eval-runner.cjs#L484515-L484585) | `FunctionDeclaration` | no | `auditor, onHit, lookupSigned = () => void 0, onResolved, now = Date.now` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:484515-484585](../../../../../../reference/runtime/sand-eval-runner.cjs#L484515-L484585) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:484515

Calls written directly in this body: `new Map`.

SHA-256 of the source span: `4681b3551dc5d505cf0fa66696ab25e3b28fa80057a08a83072b41822360a50b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
