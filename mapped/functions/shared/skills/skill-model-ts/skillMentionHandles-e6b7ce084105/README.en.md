# `skillMentionHandles`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683164-683174](../../../../../../reference/runtime/host-main.cjs#L683164-L683174) | `FunctionDeclaration` | no | `skill` |
| [evaluation:534200-534210](../../../../../../reference/runtime/sand-eval-runner.cjs#L534200-L534210) | `FunctionDeclaration` | no | `skill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683164-683174](../../../../../../reference/runtime/host-main.cjs#L683164-L683174) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:534200-534210](../../../../../../reference/runtime/sand-eval-runner.cjs#L534200-L534210) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:683164

Calls written directly in this body: `.toLowerCase`, `handles.add`, `name18.replace`, `new Set`, `skill.id.trim`, `skill.name.trim`.

SHA-256 of the source span: `d70da42b8d1bdd423728bb5b40e17258f9fb558eda115e1c89daddebe319ccce`.

### evaluation:534200

Calls written directly in this body: `.toLowerCase`, `handles.add`, `name18.replace`, `new Set`, `skill.id.trim`, `skill.name.trim`.

SHA-256 of the source span: `d70da42b8d1bdd423728bb5b40e17258f9fb558eda115e1c89daddebe319ccce`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
