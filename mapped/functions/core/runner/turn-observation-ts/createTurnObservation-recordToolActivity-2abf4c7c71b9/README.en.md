# `createTurnObservation/recordToolActivity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/turn-observation.ts` · [Module README](../../../../../modules/core/runner/turn-observation-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:588738-588752](../../../../../../reference/runtime/sand-eval-runner.cjs#L588738-L588752) | `FunctionDeclaration` | no | `update` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:588738-588752](../../../../../../reference/runtime/sand-eval-runner.cjs#L588738-L588752) | 4 | 0 | 0 | 1 | 0 | 0 |

### evaluation:588738

Calls written directly in this body: `modelToolNamesByCallId.delete`, `modelToolNamesByCallId.get`, `observedToolCallNames.push`, `recentActivity.push`, `recentActivity.splice`.

Assignment or increment targets: `observedToolCallCount`.

SHA-256 of the source span: `b945df3e60d4f7eaa14af90c1c628e1dc5544edea8a43bec3ef48c0769168a46`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
