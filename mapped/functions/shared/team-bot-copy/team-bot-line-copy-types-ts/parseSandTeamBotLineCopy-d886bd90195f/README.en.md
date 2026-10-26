# `parseSandTeamBotLineCopy`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/team-bot-copy/team-bot-line-copy-types.ts` · [Module README](../../../../../modules/shared/team-bot-copy/team-bot-line-copy-types-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706848-706864](../../../../../../reference/runtime/host-main.cjs#L706848-L706864) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706848-706864](../../../../../../reference/runtime/host-main.cjs#L706848-L706864) | 4 | 2 | 0 | 4 | 0 | 0 |

### host:706848

Calls written directly in this body: `Array.isArray`, `isUnknownRecord2`, `paragraph.push`, `paragraphs.push`, `parseSentence`.

SHA-256 of the source span: `d5340d14800c83e906974e2714045afa67374ace4a856a716d9220da1cf49263`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
