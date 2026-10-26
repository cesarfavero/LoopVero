# `startAgentIdentity/rollbackRemoteAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496906-496906](../../../../../../../reference/runtime/host-main.cjs#L496906-L496906) | `ArrowFunctionExpression` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496906-496906](../../../../../../../reference/runtime/host-main.cjs#L496906-L496906) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:496906 uses an implicit arrow-function return.

### host:496906

Calls written directly in this body: `service.rollbackRemoteAgent`.

SHA-256 of the source span: `51d310864c3e4f9c687ca0d4efaddfecf68df04a5269b33ae3a4cd640666c45c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
