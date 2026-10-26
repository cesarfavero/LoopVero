# `isSandOutboundMessageToolName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/loop-detection-policy.ts` · [Module README](../../../../../modules/core/runner/loop-detection-policy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:483337-483339](../../../../../../reference/runtime/sand-eval-runner.cjs#L483337-L483339) | `FunctionDeclaration` | no | `toolName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483337-483339](../../../../../../reference/runtime/sand-eval-runner.cjs#L483337-L483339) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:483337

Calls written directly in this body: `isSandUserDeliveryToolName`.

SHA-256 of the source span: `36b1f7c6238ead726900e44acc81278a9c9ddea742bf69693c3aaf82fb9521ac`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
