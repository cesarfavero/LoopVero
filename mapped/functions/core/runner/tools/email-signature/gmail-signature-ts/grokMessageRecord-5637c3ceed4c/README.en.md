# `grokMessageRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/email-signature/gmail-signature.ts` · [Module README](../../../../../../../modules/core/runner/tools/email-signature/gmail-signature-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:755647-755652](../../../../../../../../reference/runtime/host-main.cjs#L755647-L755652) | `FunctionDeclaration` | no | `messageText` |
| [evaluation:541522-541527](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541522-L541527) | `FunctionDeclaration` | no | `messageText3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755647-755652](../../../../../../../../reference/runtime/host-main.cjs#L755647-L755652) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:541522-541527](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L541522-L541527) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:755647

Calls written directly in this body: `grokSentMessageRecordSchema.safeParse`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `b7b379375736df7de8177696e2fb3038198893adbc33a863067c759764830513`.

### evaluation:541522

Calls written directly in this body: `grokSentMessageRecordSchema.safeParse`, `parseDraftConnectorRecord`.

SHA-256 of the source span: `fcbad5d5f53ec83d095864b1fdded5bbe316eec0e30cc9df34efae4a02a4d750`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
