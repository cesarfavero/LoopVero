# `createServerAgentProxy/emit`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/server-agent-proxy/server-agent-proxy.ts` · [Module README](../../../../../../modules/host/extensions/server-agent-proxy/server-agent-proxy-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:714619-714626](../../../../../../../reference/runtime/host-main.cjs#L714619-L714626) | `ArrowFunctionExpression` | no | `event` |
| [host:714685-714688](../../../../../../../reference/runtime/host-main.cjs#L714685-L714688) | `ArrowFunctionExpression` | no | `event` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:714619-714626](../../../../../../../reference/runtime/host-main.cjs#L714619-L714626) | 2 | 0 | 0 | 1 | 0 | 0 |
| [host:714685-714688](../../../../../../../reference/runtime/host-main.cjs#L714685-L714688) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:714619

Calls written directly in this body: `activityOverlays.delete`, `activityOverlays.set`, `boundRunStateChanged`.

SHA-256 of the source span: `4327ea7a4f1aeb993f655b09942babdff6c6afa9873cce9bb6ba0238459a29ac`.

### host:714685

Calls written directly in this body: `boundEmit`, `indexer.noteEvent`.

SHA-256 of the source span: `9976d46980bf6308d29af67500b108ee02ed91f0f62aa8010171580d0b8de96c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
