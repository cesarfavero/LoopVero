# `botSkillMatchesLooseId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/skills/bot-skill-writes.ts` · [Module README](../../../../../modules/core/skills/bot-skill-writes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762038-762045](../../../../../../reference/runtime/host-main.cjs#L762038-L762045) | `FunctionDeclaration` | no | `skill, id` |
| [evaluation:554616-554623](../../../../../../reference/runtime/sand-eval-runner.cjs#L554616-L554623) | `FunctionDeclaration` | no | `skill, id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762038-762045](../../../../../../reference/runtime/host-main.cjs#L762038-L762045) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:554616-554623](../../../../../../reference/runtime/sand-eval-runner.cjs#L554616-L554623) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:762038

Calls written directly in this body: `botSkillSlugFromPath`, `folder.endsWith`, `id.trim`, `slugifySkillName`, `stripSkillFile`.

SHA-256 of the source span: `6c138d3f125a1982c5256d7526eebefc42be4e474f853391055e3ef169ef3e94`.

### evaluation:554616

Calls written directly in this body: `botSkillSlugFromPath`, `folder.endsWith`, `id.trim`, `slugifySkillName`, `stripSkillFile`.

SHA-256 of the source span: `6c138d3f125a1982c5256d7526eebefc42be4e474f853391055e3ef169ef3e94`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
