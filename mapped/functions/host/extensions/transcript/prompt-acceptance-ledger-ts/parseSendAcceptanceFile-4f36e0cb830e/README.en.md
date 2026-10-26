# `parseSendAcceptanceFile`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/transcripts/README.en.md).

**Module:** `host/extensions/transcript/prompt-acceptance-ledger.ts` · [Module README](../../../../../../modules/host/extensions/transcript/prompt-acceptance-ledger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:733209-733240](../../../../../../../reference/runtime/host-main.cjs#L733209-L733240) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733209-733240](../../../../../../../reference/runtime/host-main.cjs#L733209-L733240) | 5 | 1 | 0 | 6 | 0 | 1 |

### host:733209

Calls written directly in this body: `Array.isArray`, `JSON.parse`, `coerceGaps`, `coerceRecord`, `records2.push`.

Assignment or increment targets: `damaged`, `value`.

SHA-256 of the source span: `486073c82c0c70c8fb8cfca2507eb0d2a65c347b6d2239d75a03c978eb0c31f4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
