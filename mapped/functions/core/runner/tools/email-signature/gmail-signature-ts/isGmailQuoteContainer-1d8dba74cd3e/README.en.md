# `isGmailQuoteContainer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755712-755717](../../../../../../../../reference/runtime/host-main.cjs#L755712-L755717) | `FunctionDeclaration` | no | `openTag` |
| [evaluation:541587-541592](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541587-L541592) | `FunctionDeclaration` | no | `openTag` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755712-755717](../../../../../../../../reference/runtime/host-main.cjs#L755712-L755717) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541587-541592](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541587-L541592) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:755712

Calls written directly in this body: `.find`, `.includes`, `.split`, `Array.from`, `openTag.matchAll`.

SHA-256 of the source span: `2478a21195828d122627d9543419741bcde1e73ec3553c5d48023c6a69f19824`.

### evaluation:541587

Calls written directly in this body: `.find`, `.includes`, `.split`, `Array.from`, `openTag.matchAll`.

SHA-256 of the source span: `2478a21195828d122627d9543419741bcde1e73ec3553c5d48023c6a69f19824`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
