# `visitPart`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-core/prompt-context-usage/prompt-context-parts.js` · [Module README](../../../../../modules/agent-core/prompt-context-usage/prompt-context-parts-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476369-476384](../../../../../../reference/runtime/host-main.cjs#L476369-L476384) | `FunctionDeclaration` | no | `scope, value, categoryId, ranges, tagName2` |
| [evaluation:255679-255694](../../../../../../reference/runtime/sand-eval-runner.cjs#L255679-L255694) | `FunctionDeclaration` | no | `scope, value, categoryId, ranges, tagName` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476369-476384](../../../../../../reference/runtime/host-main.cjs#L476369-L476384) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255679-255694](../../../../../../reference/runtime/sand-eval-runner.cjs#L255679-L255694) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:476369

Calls written directly in this body: `scope.visit`.

SHA-256 of the source span: `4333339753417ad61f63a5416391faefbcd01ba88c71245dbd1b829d76dd12e8`.

### evaluation:255679

Calls written directly in this body: `scope.visit`.

SHA-256 of the source span: `6853aa3d0a970124b6431ee1866f4020995d07457d9305244bf7f36e8ab796ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
