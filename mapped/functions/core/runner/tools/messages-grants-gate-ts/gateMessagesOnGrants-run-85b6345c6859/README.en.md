# `gateMessagesOnGrants/run`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/messages-grants-gate.ts` · [Module README](../../../../../../modules/core/runner/tools/messages-grants-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777855-777909](../../../../../../../reference/runtime/host-main.cjs#L777855-L777909) | `ArrowFunctionExpression` | yes | `ctx, op, display` |
| [evaluation:577590-577644](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577590-L577644) | `ArrowFunctionExpression` | yes | `ctx, op, display` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777855-777909](../../../../../../../reference/runtime/host-main.cjs#L777855-L777909) | 7 | 0 | 6 | 3 | 3 | 0 |
| [evaluation:577590-577644](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577590-L577644) | 7 | 0 | 6 | 3 | 3 | 0 |

### host:777855

Calls written directly in this body: `messages2.run`, `messagesGrantsMissingMessage`, `new SandLocalToolPermissionDeniedError`, `note`, `performance.now`, `probe`, `refusingAbortedTransport`.

Explicit throw targets: `SandLocalToolPermissionDeniedError`.

SHA-256 of the source span: `184b20030d27cbee43318f5f056cf0b5694841225f35b73122d9f1f485148e51`.

### evaluation:577590

Calls written directly in this body: `messages.run`, `messagesGrantsMissingMessage`, `new SandLocalToolPermissionDeniedError`, `note`, `performance.now`, `probe`, `refusingAbortedTransport`.

Explicit throw targets: `SandLocalToolPermissionDeniedError`.

SHA-256 of the source span: `11959fa7795a13da6dd5969e913da3cba835d741177ca3c3dcbada1e4631f40e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
