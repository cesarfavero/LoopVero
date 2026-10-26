# `reportLoopMitigationObservation`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `agent-engine/loop-detection/agent-loop-detector.js` · [Module README](../../../../../modules/agent-engine/loop-detection/agent-loop-detector-js/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:624560-624565](../../../../../../reference/runtime/host-main.cjs#L624560-L624565) | `FunctionDeclaration` | no | `reporting, observation` |
| [evaluation:310692-310697](../../../../../../reference/runtime/sand-eval-runner.cjs#L310692-L310697) | `FunctionDeclaration` | no | `reporting, observation` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:624560-624565](../../../../../../reference/runtime/host-main.cjs#L624560-L624565) | 0 | 0 | 0 | 0 | 0 | 1 |
| [evaluation:310692-310697](../../../../../../reference/runtime/sand-eval-runner.cjs#L310692-L310697) | 0 | 0 | 0 | 0 | 0 | 1 |

### host:624560

Calls written directly in this body: `reporting.onMitigation`.

SHA-256 of the source span: `fbac61326418ed65f9df2064285c06c785b24f61d7c2cffff2b2c5642b03624f`.

### evaluation:310692

Calls written directly in this body: `reporting.onMitigation`.

SHA-256 of the source span: `fbac61326418ed65f9df2064285c06c785b24f61d7c2cffff2b2c5642b03624f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
