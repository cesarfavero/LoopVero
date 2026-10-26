# `resolveBranchRoot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/transcript.ts` · [Module README](../../../../../modules/shared/transcript/transcript-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:485192-485205](../../../../../../reference/runtime/host-main.cjs#L485192-L485205) | `FunctionDeclaration` | no | `entry, byId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485192-485205](../../../../../../reference/runtime/host-main.cjs#L485192-L485205) | 4 | 1 | 0 | 4 | 0 | 0 |

### host:485192

Calls written directly in this body: `byId.get`, `getEntryReplyTo`, `isBranchedEntry`, `new Set`, `seen.add`, `seen.has`.

Assignment or increment targets: `current2`.

SHA-256 of the source span: `c5866a720ee2bed3b60b430af02d828b3fd7e539abbf0dcaa73ade40e0ee9d2c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
