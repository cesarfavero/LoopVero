# `createDraftToolForTurn/hostedSendAs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-tool-registration.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-tool-registration-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756092-756092](../../../../../../../reference/runtime/host-main.cjs#L756092-L756092) | `ArrowFunctionExpression` | no | `route` |
| [evaluation:542013-542013](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542013-L542013) | `ArrowFunctionExpression` | no | `route` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756092-756092](../../../../../../../reference/runtime/host-main.cjs#L756092-L756092) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:756092 uses an implicit arrow-function return.
| [evaluation:542013-542013](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542013-L542013) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:542013 uses an implicit arrow-function return.

### host:756092

Calls written directly in this body: `host.gates.gmailSendAsSignature`, `isHostedGmailRoute`.

SHA-256 of the source span: `66f49ac7cd27f6876d8c65c82ff464062718476a341d45c45a9f4efc43529e31`.

### evaluation:542013

Calls written directly in this body: `host.gates.gmailSendAsSignature`, `isHostedGmailRoute`.

SHA-256 of the source span: `66f49ac7cd27f6876d8c65c82ff464062718476a341d45c45a9f4efc43529e31`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
