# `parseVisualId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `shared/ids.ts` · [Module README](../../../../modules/shared/ids-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:476782-476784](../../../../../reference/runtime/host-main.cjs#L476782-L476784) | `FunctionDeclaration` | no | `raw` |
| [evaluation:475394-475396](../../../../../reference/runtime/sand-eval-runner.cjs#L475394-L475396) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476782-476784](../../../../../reference/runtime/host-main.cjs#L476782-L476784) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475394-475396](../../../../../reference/runtime/sand-eval-runner.cjs#L475394-L475396) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:476782

Calls written directly in this body: `isVisualId`.

SHA-256 of the source span: `68001bddd3e6d6d43de1fd7c5289023ba68f440e67731e8ef2e8b9506c879dc5`.

### evaluation:475394

Calls written directly in this body: `isVisualId`.

SHA-256 of the source span: `68001bddd3e6d6d43de1fd7c5289023ba68f440e67731e8ef2e8b9506c879dc5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
