# `createTurnSettle/reportExternalSendCandidates`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-settle.ts` · [Module README](../../../../../modules/core/runner/turn-settle-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:590782-590804](../../../../../../reference/runtime/sand-eval-runner.cjs#L590782-L590804) | `ArrowFunctionExpression` | no | `calls` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:590782-590804](../../../../../../reference/runtime/sand-eval-runner.cjs#L590782-L590804) | 3 | 1 | 0 | 1 | 0 | 0 |

### evaluation:590782

Calls written directly in this body: `calls.filter`, `connectors.flatMap`, `findExternalSendConnector`, `host.externalSendConnectors`, `new Set`, `reportHostDiagnostic`.

Assignment or increment targets: `hostless`, `noConnector`.

SHA-256 of the source span: `b68f7e534deca08af5a01a436283a8ef0a9a562fe7d85d79d5d1c02e0ee9883a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
