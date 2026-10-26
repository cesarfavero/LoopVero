# `readOutputByteLength`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/file-transfer-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/file-transfer-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:569121-569130](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569121-L569130) | `FunctionDeclaration` | no | `output2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569121-569130](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569121-L569130) | 3 | 0 | 0 | 3 | 0 | 0 |

### evaluation:569121

Calls written directly in this body: `Buffer.byteLength`.

SHA-256 of the source span: `89ca28f6a99a0b5b9290e60912e5598e364b29584810595b390a7d4f68bc3645`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
