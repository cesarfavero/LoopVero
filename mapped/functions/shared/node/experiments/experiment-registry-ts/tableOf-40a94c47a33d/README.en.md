# `tableOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/experiment-registry.ts` · [Module README](../../../../../../modules/shared/node/experiments/experiment-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471128-471130](../../../../../../../reference/runtime/host-main.cjs#L471128-L471130) | `FunctionDeclaration` | no | `keys, build2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471128-471130](../../../../../../../reference/runtime/host-main.cjs#L471128-L471130) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:471128

Calls written directly in this body: `Object.fromEntries`, `keys.map`.

SHA-256 of the source span: `dc616b74893e5b8aaeaa1f6a0caa0f7126d258f6c8711a4d2bf5794b9ad03111`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
