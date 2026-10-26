# `clampAgentActivityRequest`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/ports/agent-activity.ts` · [Module README](../../../../../modules/core/ports/agent-activity-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:765362-765380](../../../../../../reference/runtime/host-main.cjs#L765362-L765380) | `FunctionDeclaration` | no | `request5` |
| [evaluation:558729-558747](../../../../../../reference/runtime/sand-eval-runner.cjs#L558729-L558747) | `FunctionDeclaration` | no | `request3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:765362-765380](../../../../../../reference/runtime/host-main.cjs#L765362-L765380) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:558729-558747](../../../../../../reference/runtime/sand-eval-runner.cjs#L558729-L558747) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:765362

Calls written directly in this body: `clampPositiveInt`.

SHA-256 of the source span: `3579d178a2fec900f5ee5760e7cadd3d2e295d2498ad3430eabb36b53aa47380`.

### evaluation:558729

Calls written directly in this body: `clampPositiveInt`.

SHA-256 of the source span: `c06d3cbaa8f641b24fdcf331e298dfb44ccc457537178c240f9c2830a039763f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
