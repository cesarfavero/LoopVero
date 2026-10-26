# `sendFailureCategory`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778136-778140](../../../../../../../reference/runtime/host-main.cjs#L778136-L778140) | `FunctionDeclaration` | no | `error64` |
| [evaluation:577871-577875](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577871-L577875) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778136-778140](../../../../../../../reference/runtime/host-main.cjs#L778136-L778140) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:577871-577875](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577871-L577875) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:778136

Calls written directly in this body: `errorClassOf`, `isMessagesDecline`, `sandMessagesErrorCode`.

SHA-256 of the source span: `d109212f14067538c4cfbda29a7babf9fec7ecdc15aa017c1376ecc34c80fe46`.

### evaluation:577871

Calls written directly in this body: `errorClassOf`, `isMessagesDecline`, `sandMessagesErrorCode`.

SHA-256 of the source span: `ecbbc6ebcceae4015dca3c9008dbc89492ba582032edc0f8697093c03b6c9934`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
