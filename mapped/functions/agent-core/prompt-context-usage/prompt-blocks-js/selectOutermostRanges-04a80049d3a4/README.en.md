# `selectOutermostRanges`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-blocks.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476192-476209](../../../../../../reference/runtime/host-main.cjs#L476192-L476209) | `FunctionDeclaration` | no | `ranges` |
| [evaluation:255502-255519](../../../../../../reference/runtime/sand-eval-runner.cjs#L255502-L255519) | `FunctionDeclaration` | no | `ranges` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476192-476209](../../../../../../reference/runtime/host-main.cjs#L476192-L476209) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:255502-255519](../../../../../../reference/runtime/sand-eval-runner.cjs#L255502-L255519) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:476192

Calls written directly in this body: `.sort`, `selected.push`.

Assignment or increment targets: `coveredUntil`.

SHA-256 of the source span: `1fba5bb07e63801e05e10f9236600427fd02a4db30074bc85c8b2138185fa955`.

### evaluation:255502

Calls written directly in this body: `.sort`, `selected.push`.

Assignment or increment targets: `coveredUntil`.

SHA-256 of the source span: `1fba5bb07e63801e05e10f9236600427fd02a4db30074bc85c8b2138185fa955`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
