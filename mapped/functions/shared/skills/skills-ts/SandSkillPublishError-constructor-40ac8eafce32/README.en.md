# `SandSkillPublishError.constructor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skills.ts` · [Module README](../../../../../modules/shared/skills/skills-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:488877-488881](../../../../../../reference/runtime/host-main.cjs#L488877-L488881) | `method` | no | `reason, refusalKind` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:488877-488881](../../../../../../reference/runtime/host-main.cjs#L488877-L488881) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:488877

Calls written directly in this body: `super`.

Assignment or increment targets: `this.name`, `this.refusalKind`.

SHA-256 of the source span: `ac471f79cce1cdc3a7b2b3e77b88269f3ecb878803e5a8e4ec783a8eaf01ea8d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
