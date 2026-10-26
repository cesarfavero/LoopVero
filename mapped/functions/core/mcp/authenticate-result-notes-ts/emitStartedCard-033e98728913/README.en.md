# `emitStartedCard`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/authenticate-result-notes.ts` · [Module README](../../../../../modules/core/mcp/authenticate-result-notes-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779340-779343](../../../../../../reference/runtime/host-main.cjs#L779340-L779343) | `FunctionDeclaration` | yes | `request5, emission, armAuthWait` |
| [evaluation:579514-579517](../../../../../../reference/runtime/sand-eval-runner.cjs#L579514-L579517) | `FunctionDeclaration` | yes | `request3, emission, armAuthWait` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779340-779343](../../../../../../reference/runtime/host-main.cjs#L779340-L779343) | 1 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:579514-579517](../../../../../../reference/runtime/sand-eval-runner.cjs#L579514-L579517) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:779340

Calls written directly in this body: `request5.emitConnectorCard`.

SHA-256 of the source span: `2d0b927a23f866d082efe81b3415e50b7d19d9dd6f10971b75c7377faa849ea6`.

### evaluation:579514

Calls written directly in this body: `request3.emitConnectorCard`.

SHA-256 of the source span: `4885956dc15300a4046192345f3d8ddd2b0d25be12affc61930f976ca6b25b0c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
