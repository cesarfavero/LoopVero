# `createTurnAgentComposition/buildAgentForRun/loadableSkills`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-agent-composition.ts` · [Module README](../../../../../modules/core/runner/turn-agent-composition-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588214-588214](../../../../../../reference/runtime/sand-eval-runner.cjs#L588214-L588214) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588214-588214](../../../../../../reference/runtime/sand-eval-runner.cjs#L588214-L588214) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:588214 uses an implicit arrow-function return.

### evaluation:588214

Calls written directly in this body: `listLoadableSkills`, `turnToolHost.gates.skillSearch`.

SHA-256 of the source span: `6c07097f2c321f1b326acae0a4449339fe0e7e7b977b270afd371847b1b0454f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
