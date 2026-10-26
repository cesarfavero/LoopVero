# `commonAncestor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-path-roots.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-path-roots-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639698-639709](../../../../../../reference/runtime/host-main.cjs#L639698-L639709) | `FunctionDeclaration` | no | `first, second` |
| [evaluation:430312-430323](../../../../../../reference/runtime/sand-eval-runner.cjs#L430312-L430323) | `FunctionDeclaration` | no | `first, second` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639698-639709](../../../../../../reference/runtime/host-main.cjs#L639698-L639709) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:430312-430323](../../../../../../reference/runtime/sand-eval-runner.cjs#L430312-L430323) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:639698

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `a`, `b2`.

SHA-256 of the source span: `113a97af4c6998bd9791cbf95832189e4f4bf2f63a56dc39545ed7d4a344c6e3`.

### evaluation:430312

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `a`, `b2`.

SHA-256 of the source span: `113a97af4c6998bd9791cbf95832189e4f4bf2f63a56dc39545ed7d4a344c6e3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
