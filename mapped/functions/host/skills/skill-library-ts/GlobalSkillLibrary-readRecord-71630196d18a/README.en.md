# `GlobalSkillLibrary.readRecord`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-library.ts` · [Module README](../../../../../modules/host/skills/skill-library-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684629-684656](../../../../../../reference/runtime/host-main.cjs#L684629-L684656) | `method` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684629-684656](../../../../../../reference/runtime/host-main.cjs#L684629-L684656) | 2 | 0 | 0 | 3 | 0 | 2 |

### host:684629

Calls written directly in this body: `Date.now`, `Math.floor`, `parseSkillFile`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`, `this.listHelperScripts`, `this.path`.

Assignment or increment targets: `createdAt`, `raw`.

SHA-256 of the source span: `2f367a15055dcf5ea0dd6b8514d00577d43c414336c42e9ada182f1589a273af`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
