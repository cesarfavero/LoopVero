# `sentMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755586-755586](../../../../../../../../reference/runtime/host-main.cjs#L755586-L755586) | `ArrowFunctionExpression` | no | `threadText, sendingAddress` |
| [host:755630-755636](../../../../../../../../reference/runtime/host-main.cjs#L755630-L755636) | `FunctionDeclaration` | no | `message, address` |
| [evaluation:541461-541461](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541461-L541461) | `ArrowFunctionExpression` | no | `threadText, sendingAddress` |
| [evaluation:541505-541511](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541505-L541511) | `FunctionDeclaration` | no | `message, address` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755586-755586](../../../../../../../../reference/runtime/host-main.cjs#L755586-L755586) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:755586 uses an implicit arrow-function return.
| [host:755630-755636](../../../../../../../../reference/runtime/host-main.cjs#L755630-L755636) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:541461-541461](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541461-L541461) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:541461 uses an implicit arrow-function return.
| [evaluation:541505-541511](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541505-L541511) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:755586

Calls written directly in this body: `newestSentMessage`.

SHA-256 of the source span: `28d8dd48eef5a0c9372d7aba260026a3bf33705c1be76031a7f17b836def1886`.

### host:755630

Calls written directly in this body: `isSentFrom`.

SHA-256 of the source span: `214ac9771a4691da269febd83c6408ba1e4f4acd498aabfb586bc9c200519eef`.

### evaluation:541461

Calls written directly in this body: `newestSentMessage`.

SHA-256 of the source span: `28d8dd48eef5a0c9372d7aba260026a3bf33705c1be76031a7f17b836def1886`.

### evaluation:541505

Calls written directly in this body: `isSentFrom`.

SHA-256 of the source span: `214ac9771a4691da269febd83c6408ba1e4f4acd498aabfb586bc9c200519eef`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
