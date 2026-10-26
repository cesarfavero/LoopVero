# `jsonParamsOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/cursor-experiments.ts` · [Module README](../../../../../../modules/shared/node/experiments/cursor-experiments-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:552514-552520](../../../../../../../reference/runtime/host-main.cjs#L552514-L552520) | `FunctionDeclaration` | no | `params` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:552514-552520](../../../../../../../reference/runtime/host-main.cjs#L552514-L552520) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:552514

Calls written directly in this body: `Object.entries`, `isJsonValue`.

Assignment or increment targets: `result[computed]`.

SHA-256 of the source span: `3f3b24f638a4b1394ac88fd00a97b16d7a12b98d3f4bbb7d382ba1ad5de187da`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
