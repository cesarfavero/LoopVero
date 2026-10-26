# `GlobalSkillLibrary.get`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-library.ts` · [Module README](../../../../../modules/host/skills/skill-library-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684625-684628](../../../../../../reference/runtime/host-main.cjs#L684625-L684628) | `method` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684625-684628](../../../../../../reference/runtime/host-main.cjs#L684625-L684628) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:684625

Calls written directly in this body: `isSafeFolderId`, `recordParseCache.read`, `this.folder`, `this.path`.

SHA-256 of the source span: `dbe1d5e0514991702d51f3782bf408886e0d0919be974d56da6199548c73da56`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
