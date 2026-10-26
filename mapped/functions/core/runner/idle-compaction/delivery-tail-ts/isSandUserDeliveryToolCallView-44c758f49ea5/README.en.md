# `isSandUserDeliveryToolCallView`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/context-compaction/README.en.md).

**Module:** `core/runner/idle-compaction/delivery-tail.ts` · [Module README](../../../../../../modules/core/runner/idle-compaction/delivery-tail-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:583366-583372](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583366-L583372) | `FunctionDeclaration` | no | `call` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583366-583372](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583366-L583372) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:583366

Calls written directly in this body: `call.args`, `isSandUserDeliveryToolCall`.

SHA-256 of the source span: `6d2c36a69649a4a89ad1fcfa0259bed0ad2a95278f7c80b4820e1b3eeac0a74d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
