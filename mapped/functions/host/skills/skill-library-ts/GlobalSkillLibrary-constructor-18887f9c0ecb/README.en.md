# `GlobalSkillLibrary.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-library.ts` · [Module README](../../../../../modules/host/skills/skill-library-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684567-684577](../../../../../../reference/runtime/host-main.cjs#L684567-L684577) | `method` | no | `libraryDir` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684567-684577](../../../../../../reference/runtime/host-main.cjs#L684567-L684577) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:684567

Calls written directly in this body: `createDebouncePolicy`, `new WatchedDirectory`, `this.renameLegacyRecipeFiles`.

Assignment or increment targets: `this.dir`, `this.libraryDir`.

SHA-256 of the source span: `efe9633ac1b66a987388f9ed757fad5f36f605b064ab1ca3cb35b42340c55626`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
