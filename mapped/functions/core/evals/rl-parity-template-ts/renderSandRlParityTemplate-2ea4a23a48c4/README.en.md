# `renderSandRlParityTemplate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/evals/rl-parity-template.ts` · [Module README](../../../../../modules/core/evals/rl-parity-template-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:596123-596160](../../../../../../reference/runtime/sand-eval-runner.cjs#L596123-L596160) | `FunctionDeclaration` | no | `template, values` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:596123-596160](../../../../../../reference/runtime/sand-eval-runner.cjs#L596123-L596160) | 8 | 1 | 0 | 1 | 2 | 0 |

### evaluation:596123

Calls written directly in this body: `.replace`, `BLOCK_TAG.exec`, `LONE_VARIABLE.exec`, `line.replace`, `line.trim`, `new Error`, `open4.includes`, `open4.pop`, `open4.push`, `out.join`, `out.push`, `present`.

Assignment or increment targets: `lastWasBlank`.

Explicit throw targets: `Error`.

SHA-256 of the source span: `6f590b964763b275bbdf4e7a1e0be8959a0fa6bddaa5d0fef5331829ad6345f7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
