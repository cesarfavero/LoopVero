# `fileBasename`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `core/sand-activity.ts` · [Module README](../../../../modules/core/sand-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742157-742161](../../../../../reference/runtime/host-main.cjs#L742157-L742161) | `FunctionDeclaration` | no | `path33` |
| [evaluation:577255-577259](../../../../../reference/runtime/sand-eval-runner.cjs#L577255-L577259) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742157-742161](../../../../../reference/runtime/host-main.cjs#L742157-L742161) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:577255-577259](../../../../../reference/runtime/sand-eval-runner.cjs#L577255-L577259) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:742157

Calls written directly in this body: `.filter`, `path33.split`, `segments.at`.

SHA-256 of the source span: `861070b38d0f4b1b69cb0844a64a3e95171e7b95dc32d72421397e1c075403d9`.

### evaluation:577255

Calls written directly in this body: `.filter`, `path33.split`, `segments.at`.

SHA-256 of the source span: `861070b38d0f4b1b69cb0844a64a3e95171e7b95dc32d72421397e1c075403d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
