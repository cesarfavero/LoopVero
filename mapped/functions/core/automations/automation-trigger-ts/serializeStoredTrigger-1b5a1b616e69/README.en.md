# `serializeStoredTrigger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/automations/README.en.md).

**Module:** `core/automations/automation-trigger.ts` · [Module README](../../../../../modules/core/automations/automation-trigger-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:716436-716444](../../../../../../reference/runtime/host-main.cjs#L716436-L716444) | `FunctionDeclaration` | no | `trigger2` |
| [evaluation:528119-528127](../../../../../../reference/runtime/sand-eval-runner.cjs#L528119-L528127) | `FunctionDeclaration` | no | `trigger` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716436-716444](../../../../../../reference/runtime/host-main.cjs#L716436-L716444) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:528119-528127](../../../../../../reference/runtime/sand-eval-runner.cjs#L528119-L528127) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:716436

Calls written directly in this body: `serializeTriggerMember`, `trigger2.listeners.map`.

SHA-256 of the source span: `78b74e04b37f88326b7b0b143d48b6a8b27e884679422fb0ebedb38c4a66728f`.

### evaluation:528119

Calls written directly in this body: `serializeTriggerMember`, `trigger.listeners.map`.

SHA-256 of the source span: `0a6b666ccf81dae1e17b24bf1b8687bf01630f0ef0c11afb82173a9e2dcff901`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
