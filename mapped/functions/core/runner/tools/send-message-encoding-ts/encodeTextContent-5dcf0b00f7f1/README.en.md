# `encodeTextContent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-encoding.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-encoding-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759973-759983](../../../../../../../reference/runtime/host-main.cjs#L759973-L759983) | `FunctionDeclaration` | no | `message` |
| [evaluation:550577-550587](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550577-L550587) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759973-759983](../../../../../../../reference/runtime/host-main.cjs#L759973-L759983) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:550577-550587](../../../../../../../reference/runtime/sand-eval-runner.cjs#L550577-L550587) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:759973

Calls written directly in this body: `.join`, `images.map`.

SHA-256 of the source span: `7c5e864823405ac109616b95f293f2c7895ec4ca106874a59d7d2019f5d9e5a8`.

### evaluation:550577

Calls written directly in this body: `.join`, `images.map`.

SHA-256 of the source span: `7c5e864823405ac109616b95f293f2c7895ec4ca106874a59d7d2019f5d9e5a8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
