# `startWorkingStateExport/isTurnInFlight`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/working-state-export/extension.ts` · [Module README](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:786075-786075](../../../../../../../reference/runtime/host-main.cjs#L786075-L786075) | `ArrowFunctionExpression` | no | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786075-786075](../../../../../../../reference/runtime/host-main.cjs#L786075-L786075) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:786075 uses an implicit arrow-function return.

### host:786075

Calls written directly in this body: `.has`, `context2.deps.transcript.liveRunningAgentIds`.

SHA-256 of the source span: `0129ab8d61c9698130b98293cc82ec969cce49ec5f46ca081beccb1c7ffd6402`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
