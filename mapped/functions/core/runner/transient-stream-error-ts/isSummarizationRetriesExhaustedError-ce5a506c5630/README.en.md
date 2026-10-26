# `isSummarizationRetriesExhaustedError`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/transient-stream-error.ts` · [Module README](../../../../../modules/core/runner/transient-stream-error-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:736293-736301](../../../../../../reference/runtime/host-main.cjs#L736293-L736301) | `FunctionDeclaration` | no | `error64` |
| [evaluation:589985-589993](../../../../../../reference/runtime/sand-eval-runner.cjs#L589985-L589993) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:736293-736301](../../../../../../reference/runtime/host-main.cjs#L736293-L736301) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:589985-589993](../../../../../../reference/runtime/sand-eval-runner.cjs#L589985-L589993) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:736293

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `2fb1d6897f4062232a0c3ac0cab979b252ac2e24945c5253711379cae3216d54`.

### evaluation:589985

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `35feb11e73edf47c169f4d475d8e1729d63326f39fa0ac5fc5a57e3ebdf1f924`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
