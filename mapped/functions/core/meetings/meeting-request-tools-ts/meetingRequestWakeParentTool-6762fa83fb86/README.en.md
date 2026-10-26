# `meetingRequestWakeParentTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/meetings/meeting-request-tools.ts` · [Module README](../../../../../modules/core/meetings/meeting-request-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:763453-763455](../../../../../../reference/runtime/host-main.cjs#L763453-L763455) | `FunctionDeclaration` | no | `deps` |
| [evaluation:556418-556420](../../../../../../reference/runtime/sand-eval-runner.cjs#L556418-L556420) | `FunctionDeclaration` | no | `deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:763453-763455](../../../../../../reference/runtime/host-main.cjs#L763453-L763455) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556418-556420](../../../../../../reference/runtime/sand-eval-runner.cjs#L556418-L556420) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:763453

Calls written directly in this body: `wakeParentTool`.

SHA-256 of the source span: `b2e571bb6b05b7faaffd63869ba34cd16bc0f363b6230850775db71320543ead`.

### evaluation:556418

Calls written directly in this body: `wakeParentTool`.

SHA-256 of the source span: `b2e571bb6b05b7faaffd63869ba34cd16bc0f363b6230850775db71320543ead`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
