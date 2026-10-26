# `buildGoalPursuitGuidelines`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `agent-core/goal-pursuit-guidelines.js` · [Module README](../../../../modules/agent-core/goal-pursuit-guidelines-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:475488-475522](../../../../../reference/runtime/host-main.cjs#L475488-L475522) | `FunctionDeclaration` | no | `toolNames = {}` |
| [evaluation:254708-254742](../../../../../reference/runtime/sand-eval-runner.cjs#L254708-L254742) | `FunctionDeclaration` | no | `toolNames = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475488-475522](../../../../../reference/runtime/host-main.cjs#L475488-L475522) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:254708-254742](../../../../../reference/runtime/sand-eval-runner.cjs#L254708-L254742) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:475488

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `4fed54890736b915226363bb6a1ea3aca444c6a28003521129db219c1df16bc6`.

### evaluation:254708

Calls written directly in this body: no calls identifiable by name.

SHA-256 of the source span: `4fed54890736b915226363bb6a1ea3aca444c6a28003521129db219c1df16bc6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
