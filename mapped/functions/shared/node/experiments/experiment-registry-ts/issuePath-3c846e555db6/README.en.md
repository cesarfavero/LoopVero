# `issuePath`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/experiment-registry.ts` · [Module README](../../../../../../modules/shared/node/experiments/experiment-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471092-471094](../../../../../../../reference/runtime/host-main.cjs#L471092-L471094) | `FunctionDeclaration` | no | `path33` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471092-471094](../../../../../../../reference/runtime/host-main.cjs#L471092-L471094) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:471092

Calls written directly in this body: `.join`, `path33.map`.

SHA-256 of the source span: `e2243663f85c73eafd87773979bfef330bac491c3247862080b902e6923778f5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
