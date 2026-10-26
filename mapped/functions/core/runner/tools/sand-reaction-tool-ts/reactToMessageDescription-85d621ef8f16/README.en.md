# `reactToMessageDescription`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-reaction-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-reaction-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765578-765581](../../../../../../../reference/runtime/host-main.cjs#L765578-L765581) | `FunctionDeclaration` | no | `deps` |
| [evaluation:558944-558947](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558944-L558947) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765578-765581](../../../../../../../reference/runtime/host-main.cjs#L765578-L765581) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558944-558947](../../../../../../../reference/runtime/sand-eval-runner.cjs#L558944-L558947) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:765578

Calls written directly in this body: `deps.activeReactions`.

SHA-256 of the source span: `56b56118898f9b2e07855e251ca4fa932cd9b244e7c11bf88e17a8778e5c799b`.

### evaluation:558944

Calls written directly in this body: `deps.activeReactions`.

SHA-256 of the source span: `56b56118898f9b2e07855e251ca4fa932cd9b244e7c11bf88e17a8778e5c799b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
