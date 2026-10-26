# `joined`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/rl-parity.ts` · [Module README](../../../../../modules/core/evals/rl-parity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596179-596181](../../../../../../reference/runtime/sand-eval-runner.cjs#L596179-L596181) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596179-596181](../../../../../../reference/runtime/sand-eval-runner.cjs#L596179-L596181) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:596179

Calls written directly in this body: `value.join`.

SHA-256 of the source span: `8ec24d29f3d17354d646145f8223c7819cee441d7f5d4e911315b68f128db640`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
