# `_SandAgentRunner.constructor/emitUpdate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593132-593136](../../../../../../reference/runtime/sand-eval-runner.cjs#L593132-L593136) | `ArrowFunctionExpression` | no | `update` |
| [evaluation:593492-593492](../../../../../../reference/runtime/sand-eval-runner.cjs#L593492-L593492) | `ArrowFunctionExpression` | no | `update, updateObservers` |
| [evaluation:593713-593713](../../../../../../reference/runtime/sand-eval-runner.cjs#L593713-L593713) | `ArrowFunctionExpression` | no | `update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593132-593136](../../../../../../reference/runtime/sand-eval-runner.cjs#L593132-L593136) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:593492-593492](../../../../../../reference/runtime/sand-eval-runner.cjs#L593492-L593492) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:593492 uses an implicit arrow-function return.
| [evaluation:593713-593713](../../../../../../reference/runtime/sand-eval-runner.cjs#L593713-L593713) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:593713 uses an implicit arrow-function return.

### evaluation:593132

Calls written directly in this body: `this.observation.recordToolActivity`, `this.transport.onUpdate`.

SHA-256 of the source span: `a3e8ddfbc5fe717d7b469f8a21b4e8a966f18c7e8595a3d77cb6ea90a2f1aa37`.

### evaluation:593492

Calls written directly in this body: `this.emitUpdate`.

SHA-256 of the source span: `3e5c652ab960d19588eba4e4c60fe2d3368781639fccb68e82419406652e8970`.

### evaluation:593713

Calls written directly in this body: `this.emitUpdate`.

SHA-256 of the source span: `2bed213c00a471aeb4429f38c6e2b90abab020579607311d7efb80d5b5153048`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
