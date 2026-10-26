# `isLocalToolRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/action-audit/file-transfer-audit.ts` · [Module README](../../../../../../modules/core/runner/action-audit/file-transfer-audit-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:770395-770397](../../../../../../../reference/runtime/host-main.cjs#L770395-L770397) | `FunctionDeclaration` | no | `error64` |
| [evaluation:569118-569120](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569118-L569120) | `FunctionDeclaration` | no | `error63` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:770395-770397](../../../../../../../reference/runtime/host-main.cjs#L770395-L770397) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:569118-569120](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569118-L569120) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:770395

Calls written directly in this body: `DAEMON_REFUSAL_CODES.has`, `isMessagesDecline`, `sandMessagesErrorCode`.

SHA-256 of the source span: `b9bb657ae3d22d1af502713cced8ef4dee4f44fc1e029deae5de2c05c2bc2cba`.

### evaluation:569118

Calls written directly in this body: `DAEMON_REFUSAL_CODES.has`, `isMessagesDecline`, `sandMessagesErrorCode`.

SHA-256 of the source span: `7b205fbbaf9a5bb1b56697c2daecce63db02833ffac1329f31107030a6a9c29b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
