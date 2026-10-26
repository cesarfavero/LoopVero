# `requestVoiceCallHarness/getMachineId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/voice-call-harness-request.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/voice-call-harness-request-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709737-709737](../../../../../../../reference/runtime/host-main.cjs#L709737-L709737) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709737-709737](../../../../../../../reference/runtime/host-main.cjs#L709737-L709737) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:709737 uses an implicit arrow-function return.

### host:709737

Calls written directly in this body: `deps.getMachineId`.

SHA-256 of the source span: `086d9915b575e1ba32441ba477068a14e8cc754c61e94212e90ac9a7c9815964`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
