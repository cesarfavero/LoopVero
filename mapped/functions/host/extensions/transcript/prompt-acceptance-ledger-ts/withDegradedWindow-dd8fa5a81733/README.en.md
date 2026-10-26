# `withDegradedWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/prompt-acceptance-ledger.ts` · [Module README](../../../../../../modules/host/extensions/transcript/prompt-acceptance-ledger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733183-733200](../../../../../../../reference/runtime/host-main.cjs#L733183-L733200) | `FunctionDeclaration` | no | `gaps, window2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733183-733200](../../../../../../../reference/runtime/host-main.cjs#L733183-L733200) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:733183

Calls written directly in this body: `Math.max`, `Math.min`, `base.degradedWindows.slice`.

SHA-256 of the source span: `af03678294621f5b7f409bdc51761bdca6225ba861d7fb0315eefbbff7244e1d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
