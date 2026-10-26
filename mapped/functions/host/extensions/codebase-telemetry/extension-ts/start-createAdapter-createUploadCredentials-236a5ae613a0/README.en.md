# `start/createAdapter/createUploadCredentials`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `host/extensions/codebase-telemetry/extension.ts` · [Module README](../../../../../../modules/host/extensions/codebase-telemetry/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:541700-541710](../../../../../../../reference/runtime/host-main.cjs#L541700-L541710) | `ArrowFunctionExpression` | yes | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541700-541710](../../../../../../../reference/runtime/host-main.cjs#L541700-L541710) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:541700

Calls written directly in this body: `context2.deps.auth.getMachineId`, `createCursorChecksum`, `credentials.authToken.get`, `getSandBackendClientHeaders`.

SHA-256 of the source span: `be9f4c9a23d13b2be59a1fa31ac5be78df7231fa33efa0a8c137e4dc57bce0ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
