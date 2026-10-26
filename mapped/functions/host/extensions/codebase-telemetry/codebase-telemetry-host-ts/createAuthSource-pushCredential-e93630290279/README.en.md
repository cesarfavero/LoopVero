# `createAuthSource/pushCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/codebase-telemetry-host.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/codebase-telemetry-host-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:540919-540937](../../../../../../../reference/runtime/host-main.cjs#L540919-L540937) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:540919-540937](../../../../../../../reference/runtime/host-main.cjs#L540919-L540937) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:540919

Calls written directly in this body: `auth2.peekAccessToken`, `clearCredential`, `logger132.warn`, `parseJwtPayload`, `receiver.get`, `sender.send`.

SHA-256 of the source span: `6c305f001c581f8e432ad7d6bbcfa297c90a6279347502a83733faaaa2dfa72d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
