# `parseEnum/parserFn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/experiment-config.gen.ts` · [Module README](../../../../../../modules/shared/node/experiments/experiment-config.gen-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:471037-471044](../../../../../../../reference/runtime/host-main.cjs#L471037-L471044) | `ArrowFunctionExpression` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:471037-471044](../../../../../../../reference/runtime/host-main.cjs#L471037-L471044) | 1 | 0 | 0 | 1 | 1 | 0 |

### host:471037

Calls written directly in this body: `String`, `enumValues.findIndex`, `enumValues.join`, `new Error`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `26cf9d66ca376a28850bc42ec35ff4918384bab693a5c119854f9d4b6d8501a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
