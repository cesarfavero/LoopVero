# `GlobalSkillLibrary.listHelperScripts`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-library.ts` · [Module README](../../../../../modules/host/skills/skill-library-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684615-684624](../../../../../../reference/runtime/host-main.cjs#L684615-L684624) | `method` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684615-684624](../../../../../../reference/runtime/host-main.cjs#L684615-L684624) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:684615

Calls written directly in this body: `.map`, `.sort`, `entries.filter`, `reportFallbackUnlessAbsent`, `this.folder`.

Assignment or increment targets: `entries`.

SHA-256 of the source span: `c709ce6f3119f09dabc38a48d93e0b01844a8daa1aa4fd3c5a6d210b4af1d7fa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
