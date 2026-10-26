# `isRebuiltEntry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/transcripts/README.en.md).

**Module:** `shared/transcript/rebuilt-entries.ts` · [Module README](../../../../../modules/shared/transcript/rebuilt-entries-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:719851-719853](../../../../../../reference/runtime/host-main.cjs#L719851-L719853) | `FunctionDeclaration` | no | `entry` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:719851-719853](../../../../../../reference/runtime/host-main.cjs#L719851-L719853) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:719851

Calls written directly in this body: `entry.id.startsWith`.

SHA-256 of the source span: `06a001cf21f42aa10a81cf3ffca73c46583a70a68a44c80a3a060de58975e33c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
