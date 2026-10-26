# `formatFirstProjectOnboardingOverlay`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/project-prompt.js` · [Module README](../../../../../modules/agent-engine/prompts/project-prompt-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:641153-641166](../../../../../../reference/runtime/host-main.cjs#L641153-L641166) | `FunctionDeclaration` | no | `args` |
| [evaluation:431766-431779](../../../../../../reference/runtime/sand-eval-runner.cjs#L431766-L431779) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641153-641166](../../../../../../reference/runtime/host-main.cjs#L641153-L641166) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431766-431779](../../../../../../reference/runtime/sand-eval-runner.cjs#L431766-L431779) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:641153

Calls written directly in this body: `firstProjectKickoffScript`, `sections.join`, `sections.push`.

SHA-256 of the source span: `5d36f1d6d7def900348c0cada1bdc878beb4f7fdb10c6ce8a5705ce115759c7e`.

### evaluation:431766

Calls written directly in this body: `firstProjectKickoffScript`, `sections.join`, `sections.push`.

SHA-256 of the source span: `5d36f1d6d7def900348c0cada1bdc878beb4f7fdb10c6ce8a5705ce115759c7e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
