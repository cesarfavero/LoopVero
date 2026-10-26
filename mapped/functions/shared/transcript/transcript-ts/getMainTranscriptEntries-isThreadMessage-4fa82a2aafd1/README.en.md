# `getMainTranscriptEntries/isThreadMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript.ts` · [Module README](../../../../../modules/shared/transcript/transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485212-485212](../../../../../../reference/runtime/host-main.cjs#L485212-L485212) | `ArrowFunctionExpression` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485212-485212](../../../../../../reference/runtime/host-main.cjs#L485212-L485212) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:485212 uses an implicit arrow-function return.

### host:485212

Calls written directly in this body: `isBranchedEntry`, `resolveBranchRoot`.

SHA-256 of the source span: `a147e0b1aeda6c939aae7567428c4c71e107dacfb332942df0d1ec7c230c212c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
