# `GlobalSkillLibrary.writeAt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-library.ts` · [Module README](../../../../../modules/host/skills/skill-library-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684708-684711](../../../../../../reference/runtime/host-main.cjs#L684708-L684711) | `method` | no | `id, spec` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684708-684711](../../../../../../reference/runtime/host-main.cjs#L684708-L684711) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:684708

Calls written directly in this body: `isSafeFolderId`, `this.write`.

SHA-256 of the source span: `f7b57cf86451af7a74725bfbb0f54de3c701a19329eea643a180f4a30000270f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
