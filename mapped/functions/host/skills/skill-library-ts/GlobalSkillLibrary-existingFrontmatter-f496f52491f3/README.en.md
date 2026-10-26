# `GlobalSkillLibrary.existingFrontmatter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-library.ts` · [Module README](../../../../../modules/host/skills/skill-library-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684712-684721](../../../../../../reference/runtime/host-main.cjs#L684712-L684721) | `method` | no | `id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684712-684721](../../../../../../reference/runtime/host-main.cjs#L684712-L684721) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:684712

Calls written directly in this body: `parseSkillFile`, `readSandDataFileSync`, `reportFallbackUnlessAbsent`, `this.path`.

Assignment or increment targets: `raw`.

SHA-256 of the source span: `8ec0c97608b87a39b1774ad17fb0875d1625945c4a528b53f7e6e698cb42bd2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
