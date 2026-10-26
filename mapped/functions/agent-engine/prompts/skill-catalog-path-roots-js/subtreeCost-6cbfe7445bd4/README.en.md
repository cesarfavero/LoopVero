# `subtreeCost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-path-roots.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-path-roots-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639665-639672](../../../../../../reference/runtime/host-main.cjs#L639665-L639672) | `FunctionDeclaration` | no | `node2, root` |
| [evaluation:430279-430286](../../../../../../reference/runtime/sand-eval-runner.cjs#L430279-L430286) | `FunctionDeclaration` | no | `node2, root` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639665-639672](../../../../../../reference/runtime/host-main.cjs#L639665-L639672) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430279-430286](../../../../../../reference/runtime/sand-eval-runner.cjs#L430279-L430286) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:639665

Calls written directly in this body: `Math.min`, `keepRootCost`, `node2.costByRoot.get`, `node2.costByRoot.set`, `openRootCost`.

Assignment or increment targets: `cost`.

SHA-256 of the source span: `ca379ff6a5b318ba3eb4cf703e74a2454486b6f87c730032220c284df57416a0`.

### evaluation:430279

Calls written directly in this body: `Math.min`, `keepRootCost`, `node2.costByRoot.get`, `node2.costByRoot.set`, `openRootCost`.

Assignment or increment targets: `cost`.

SHA-256 of the source span: `ca379ff6a5b318ba3eb4cf703e74a2454486b6f87c730032220c284df57416a0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
