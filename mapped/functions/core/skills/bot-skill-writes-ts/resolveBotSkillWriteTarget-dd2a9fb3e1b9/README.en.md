# `resolveBotSkillWriteTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `core/skills/bot-skill-writes.ts` · [Module README](../../../../../modules/core/skills/bot-skill-writes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:762046-762065](../../../../../../reference/runtime/host-main.cjs#L762046-L762065) | `FunctionDeclaration` | no | `store, id` |
| [evaluation:554624-554643](../../../../../../reference/runtime/sand-eval-runner.cjs#L554624-L554643) | `FunctionDeclaration` | no | `store, id` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762046-762065](../../../../../../reference/runtime/host-main.cjs#L762046-L762065) | 7 | 0 | 0 | 5 | 0 | 0 |
| [evaluation:554624-554643](../../../../../../reference/runtime/sand-eval-runner.cjs#L554624-L554643) | 7 | 0 | 0 | 5 | 0 | 0 |

### host:762046

Calls written directly in this body: `id.trim`, `isBotSkillsPluginSkill`, `skills.find`, `store.list`, `stripSkillFile`.

SHA-256 of the source span: `40a40a6ced257a0437b0494cc606f2aef8e3953ed6c5215d5b76825453fde3ce`.

### evaluation:554624

Calls written directly in this body: `id.trim`, `isBotSkillsPluginSkill`, `skills.find`, `store.list`, `stripSkillFile`.

SHA-256 of the source span: `40a40a6ced257a0437b0494cc606f2aef8e3953ed6c5215d5b76825453fde3ce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
