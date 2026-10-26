# `collectMentionedSkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/skills/README.en.md).

**Module:** `shared/skills/skill-model.ts` · [Module README](../../../../../modules/shared/skills/skill-model-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:683176-683227](../../../../../../reference/runtime/host-main.cjs#L683176-L683227) | `FunctionDeclaration` | no | `prompt, skills` |
| [evaluation:534212-534263](../../../../../../reference/runtime/sand-eval-runner.cjs#L534212-L534263) | `FunctionDeclaration` | no | `prompt, skills` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:683176-683227](../../../../../../reference/runtime/host-main.cjs#L683176-L683227) | 4 | 8 | 0 | 2 | 0 | 0 |
| [evaluation:534212-534263](../../../../../../reference/runtime/sand-eval-runner.cjs#L534212-L534263) | 4 | 8 | 0 | 2 | 0 | 0 |

### host:683176

Calls written directly in this body: `byId.has`, `byId.set`, `claimedPositions.add`, `claimedPositions.has`, `found.add`, `handles.push`, `handles.sort`, `isMentionWordChar`, `lower.indexOf`, `match2[computed].toLowerCase`, `new Map`, `new Set`, `prompt.matchAll`, `prompt.toLowerCase`, `skill.id.toLowerCase`, `skillMentionHandles`, `skills.filter`.

Assignment or increment targets: `index`, `overlaps`, `position`.

SHA-256 of the source span: `997503c5f782b49262832c8f3a68698074856181c81b5dad447b785879272443`.

### evaluation:534212

Calls written directly in this body: `byId.has`, `byId.set`, `claimedPositions.add`, `claimedPositions.has`, `found.add`, `handles.push`, `handles.sort`, `isMentionWordChar`, `lower.indexOf`, `match2[computed].toLowerCase`, `new Map`, `new Set`, `prompt.matchAll`, `prompt.toLowerCase`, `skill.id.toLowerCase`, `skillMentionHandles`, `skills.filter`.

Assignment or increment targets: `index`, `overlaps`, `position`.

SHA-256 of the source span: `997503c5f782b49262832c8f3a68698074856181c81b5dad447b785879272443`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
