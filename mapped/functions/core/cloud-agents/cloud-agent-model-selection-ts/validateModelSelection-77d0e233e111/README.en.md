# `validateModelSelection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/cloud-agents/cloud-agent-model-selection.ts` · [Module README](../../../../../modules/core/cloud-agents/cloud-agent-model-selection-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:567655-567682](../../../../../../reference/runtime/sand-eval-runner.cjs#L567655-L567682) | `FunctionDeclaration` | yes | `api, modelId, modelParams` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567655-567682](../../../../../../reference/runtime/sand-eval-runner.cjs#L567655-L567682) | 6 | 0 | 1 | 5 | 0 | 1 |

### evaluation:567655

Calls written directly in this body: `.join`, `Object.keys`, `api.listModels`, `catalog.map`, `errors.join`, `findCatalogEntry`, `modelId.trim`, `resolveModelMaxMode`, `validateModelParams`.

Assignment or increment targets: `catalog`.

SHA-256 of the source span: `087a0de5d5fbc787afa4264827733f02deeb6db6d640a283bd57d3c409bfe637`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
