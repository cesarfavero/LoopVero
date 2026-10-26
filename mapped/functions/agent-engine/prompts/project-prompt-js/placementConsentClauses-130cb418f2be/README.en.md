# `placementConsentClauses`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641051-641067](../../../../../../reference/runtime/host-main.cjs#L641051-L641067) | `FunctionDeclaration` | no | `{ placementConsentEnabled, crossEnvironmentPlacementEnabled, repoPlacementEnabled }` |
| [evaluation:431664-431680](../../../../../../reference/runtime/sand-eval-runner.cjs#L431664-L431680) | `FunctionDeclaration` | no | `{ placementConsentEnabled, crossEnvironmentPlacementEnabled, repoPlacementEnabled }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641051-641067](../../../../../../reference/runtime/host-main.cjs#L641051-L641067) | 9 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431664-431680](../../../../../../reference/runtime/sand-eval-runner.cjs#L431664-L431680) | 9 | 0 | 0 | 2 | 0 | 0 |

### host:641051

Calls written directly in this body: `.join`, `rows.join`.

SHA-256 of the source span: `53f0a053d54a604ac1ede36149704bc56566f734366bfda2d27a5020599b003d`.

### evaluation:431664

Calls written directly in this body: `.join`, `rows.join`.

SHA-256 of the source span: `53f0a053d54a604ac1ede36149704bc56566f734366bfda2d27a5020599b003d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
