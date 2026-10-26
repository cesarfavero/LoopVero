# `parseBoolean`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/experiment-config.gen.ts` · [Module README](../../../../../../modules/shared/node/experiments/experiment-config.gen-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471047-471052](../../../../../../../reference/runtime/host-main.cjs#L471047-L471052) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471047-471052](../../../../../../../reference/runtime/host-main.cjs#L471047-L471052) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:471047

Calls written directly in this body: `String`, `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `00ead2403f28eb86d1d7056868e601fe7943572d3a2c6f07f15a204b4ef01ed4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
