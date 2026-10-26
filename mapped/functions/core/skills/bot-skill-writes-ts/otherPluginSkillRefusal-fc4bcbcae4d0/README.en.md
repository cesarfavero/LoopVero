# `otherPluginSkillRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/skills/bot-skill-writes.ts` · [Module README](../../../../../modules/core/skills/bot-skill-writes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762067-762069](../../../../../../reference/runtime/host-main.cjs#L762067-L762069) | `FunctionDeclaration` | no | `skillId` |
| [evaluation:554645-554647](../../../../../../reference/runtime/sand-eval-runner.cjs#L554645-L554647) | `FunctionDeclaration` | no | `skillId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762067-762069](../../../../../../reference/runtime/host-main.cjs#L762067-L762069) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554645-554647](../../../../../../reference/runtime/sand-eval-runner.cjs#L554645-L554647) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762067

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `48c120701f9b6194eba3b00c259637ac34948c525077c411577f7977a197bd45`.

### evaluation:554645

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `48c120701f9b6194eba3b00c259637ac34948c525077c411577f7977a197bd45`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
