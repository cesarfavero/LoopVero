# `keepRootCost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/prompts/README.en.md).

**Module:** `agent-engine/prompts/skill-catalog-path-roots.js` · [Module README](../../../../../modules/agent-engine/prompts/skill-catalog-path-roots-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:639679-639686](../../../../../../reference/runtime/host-main.cjs#L639679-L639686) | `FunctionDeclaration` | no | `node2, root` |
| [evaluation:430293-430300](../../../../../../reference/runtime/sand-eval-runner.cjs#L430293-L430300) | `FunctionDeclaration` | no | `node2, root` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:639679-639686](../../../../../../reference/runtime/host-main.cjs#L639679-L639686) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:430293-430300](../../../../../../reference/runtime/sand-eval-runner.cjs#L430293-L430300) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:639679

Calls written directly in this body: `node2.children.values`, `subtreeCost`.

Assignment or increment targets: `cost`.

SHA-256 of the source span: `93a51a999e0038b1bcbcbbccc656a2efb872deff107ac6bbaaa00490c0862128`.

### evaluation:430293

Calls written directly in this body: `node2.children.values`, `subtreeCost`.

Assignment or increment targets: `cost`.

SHA-256 of the source span: `93a51a999e0038b1bcbcbbccc656a2efb872deff107ac6bbaaa00490c0862128`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
