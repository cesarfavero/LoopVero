# `createTurnShellExecutorEntries`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-composition/shell-executors.ts` · [Module README](../../../../../../modules/core/runner/turn-composition/shell-executors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:587508-587541](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587508-L587541) | `FunctionDeclaration` | no | `host, turnToolHost, boxConnection, machineIds` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:587508-587541](../../../../../../../reference/runtime/sand-eval-runner.cjs#L587508-L587541) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:587508

Calls written directly in this body: `base.get`, `resourceEntry`, `turnToolHost.getConversationId`, `wrapBackgroundShellExecutorForAudit`, `wrapShellStreamExecutorForAudit`.

SHA-256 of the source span: `6961bcf95d7ba0c8eea181423267e80399ac489e4a1b2eddfa2bc2616676f8aa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
