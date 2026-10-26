# `jsonReplacer3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/main.ts` · [Module README](../../../../modules/evaluation/main-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:630742-630748](../../../../../reference/runtime/sand-eval-runner.cjs#L630742-L630748) | `FunctionDeclaration` | no | `_key, value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630742-630748](../../../../../reference/runtime/sand-eval-runner.cjs#L630742-L630748) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:630742

Calls written directly in this body: `.toString`, `Buffer.from`, `value.toString`.

SHA-256 of the source span: `a9e2ac6e5297464bd50ba01b34e07fac26661a043c26d72402b81fde56c0a1b5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
