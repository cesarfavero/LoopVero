# `placePhoneCallTools`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communication-toolset.ts` · [Module README](../../../../../../modules/core/runner/tools/communication-toolset-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763763-763787](../../../../../../../reference/runtime/host-main.cjs#L763763-L763787) | `FunctionDeclaration` | no | `host` |
| [evaluation:556811-556835](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556811-L556835) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763763-763787](../../../../../../../reference/runtime/host-main.cjs#L763763-L763787) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:556811-556835](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556811-L556835) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:763763

Calls written directly in this body: `createPlacePhoneCallTool`.

SHA-256 of the source span: `f5a56b3932325f177eddabff2aaab5231a275d5582490a847baf0c30521ab241`.

### evaluation:556811

Calls written directly in this body: `createPlacePhoneCallTool`.

SHA-256 of the source span: `f5a56b3932325f177eddabff2aaab5231a275d5582490a847baf0c30521ab241`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
