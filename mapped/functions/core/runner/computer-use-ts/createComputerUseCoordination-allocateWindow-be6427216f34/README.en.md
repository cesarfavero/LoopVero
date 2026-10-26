# `createComputerUseCoordination/allocateWindow`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/computer-use.ts` · [Module README](../../../../../modules/core/runner/computer-use-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:525390-525397](../../../../../../reference/runtime/sand-eval-runner.cjs#L525390-L525397) | `FunctionExpression` | no | `subagentAgentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:525390-525397](../../../../../../reference/runtime/sand-eval-runner.cjs#L525390-L525397) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:525390

Calls written directly in this body: `.includes`, `windowBySubagent.get`, `windowBySubagent.set`, `windowBySubagent.values`.

SHA-256 of the source span: `7c05c141f5d8f6ed6171f9be3fdfa0ac05d32049885176b41a9a80c3534a3d60`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
