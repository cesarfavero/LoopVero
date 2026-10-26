# `startAgentIdentity/createAgentFromTemplate`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/agent-identity/extension.ts` · [Module README](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:496901-496904](../../../../../../../reference/runtime/host-main.cjs#L496901-L496904) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496901-496904](../../../../../../../reference/runtime/host-main.cjs#L496901-L496904) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:496901 uses an implicit arrow-function return.

### host:496901

Calls written directly in this body: `service.createRemoteAgentFromTemplate`.

SHA-256 of the source span: `61bc70b14d5c7218b71581d7ff16a5b79240e02f9ff76e56a8b57509b1309d49`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
