# `GlobalSkillLibrary.listIds`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-library.ts` · [Module README](../../../../../modules/host/skills/skill-library-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684612-684614](../../../../../../reference/runtime/host-main.cjs#L684612-L684614) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684612-684614](../../../../../../reference/runtime/host-main.cjs#L684612-L684614) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:684612

Calls written directly in this body: `this.dir.listSubdirectoryNames`.

SHA-256 of the source span: `45d2a0403fcdd9aee2d975c68b29f08fd91f05cbdd1635d3330d8db9cd0ed4d4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
