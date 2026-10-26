# `createSandEvalRunnerFailureResult`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/architecture/README.en.md).

**Module:** `evaluation/protocol.ts` · [Module README](../../../../modules/evaluation/protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:628321-628338](../../../../../reference/runtime/sand-eval-runner.cjs#L628321-L628338) | `FunctionDeclaration` | no | `runId, error63, priorResult` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:628321-628338](../../../../../reference/runtime/sand-eval-runner.cjs#L628321-L628338) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:628321

Calls written directly in this body: `serializeSandEvalRunnerError`.

SHA-256 of the source span: `298424f416d27e1272a07edf85bc53655f35e47240c7c13e5c79b13f855825d9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
