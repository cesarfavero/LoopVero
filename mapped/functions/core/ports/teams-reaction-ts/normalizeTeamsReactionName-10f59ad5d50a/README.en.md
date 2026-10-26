# `normalizeTeamsReactionName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/teams-reaction.ts` · [Module README](../../../../../modules/core/ports/teams-reaction-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768291-768298](../../../../../../reference/runtime/host-main.cjs#L768291-L768298) | `FunctionDeclaration` | no | `raw` |
| [evaluation:563807-563814](../../../../../../reference/runtime/sand-eval-runner.cjs#L563807-L563814) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768291-768298](../../../../../../reference/runtime/host-main.cjs#L768291-L768298) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:563807-563814](../../../../../../reference/runtime/sand-eval-runner.cjs#L563807-L563814) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:768291

Calls written directly in this body: `TEAMS_REACTION_NAMES.find`, `lowered.endsWith`, `lowered.slice`, `lowered.startsWith`, `raw.trim`, `trimmed.toLowerCase`.

SHA-256 of the source span: `2251952fe86de185b9c12fe8ad6170b85f759cef4cf3087ba26ebf3f0f1a1377`.

### evaluation:563807

Calls written directly in this body: `TEAMS_REACTION_NAMES.find`, `lowered.endsWith`, `lowered.slice`, `lowered.startsWith`, `raw.trim`, `trimmed.toLowerCase`.

SHA-256 of the source span: `2251952fe86de185b9c12fe8ad6170b85f759cef4cf3087ba26ebf3f0f1a1377`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
