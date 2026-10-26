# `sendEmail`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-email-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-email-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:764379-764392](../../../../../../../reference/runtime/host-main.cjs#L764379-L764392) | `FunctionDeclaration` | yes | `deps, args` |
| [evaluation:557747-557760](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557747-L557760) | `FunctionDeclaration` | yes | `deps, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:764379-764392](../../../../../../../reference/runtime/host-main.cjs#L764379-L764392) | 1 | 0 | 1 | 1 | 1 | 1 |
| [evaluation:557747-557760](../../../../../../../reference/runtime/sand-eval-runner.cjs#L557747-L557760) | 1 | 0 | 1 | 1 | 1 | 1 |

### host:764379

Calls written directly in this body: `attemptEmailSend`, `deps.reportDelivery.failed`, `deps.reportDelivery.settled`, `errorClassOf`.

Assignment or increment targets: `outcome`.

Explicit throw targets: `error64`.

SHA-256 of the source span: `c4fce2e93f6a6cb644c2e10297c32acb84a32b842c1d3c34473e317a4a9a8530`.

### evaluation:557747

Calls written directly in this body: `attemptEmailSend`, `deps.reportDelivery.failed`, `deps.reportDelivery.settled`, `errorClassOf`.

Assignment or increment targets: `outcome`.

Explicit throw targets: `error63`.

SHA-256 of the source span: `1051ff84f9ddb86e65dedc09b893947ef9df5c61d6e9c1a5f1d53d6106904008`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
