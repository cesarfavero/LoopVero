# `GlobalSkillLibrary.list`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `host/skills/skill-library.ts` · [Module README](../../../../../modules/host/skills/skill-library-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684660-684667](../../../../../../reference/runtime/host-main.cjs#L684660-L684667) | `method` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684660-684667](../../../../../../reference/runtime/host-main.cjs#L684660-L684667) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:684660

Calls written directly in this body: `records2.push`, `records2.sort`, `this.get`, `this.listIds`.

SHA-256 of the source span: `180c60e9606aed4f1686448318d7076c40a07c4b8986b39c886abf3190f4f352`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
