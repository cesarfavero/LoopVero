# `createSandConnectTransport`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/cursor-backend/connect-transport.ts` · [Module README](../../../../../../modules/shared/node/cursor-backend/connect-transport-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:712325-712334](../../../../../../../reference/runtime/host-main.cjs#L712325-L712334) | `FunctionDeclaration` | no | `{   agent,   ...options2 }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:712325-712334](../../../../../../../reference/runtime/host-main.cjs#L712325-L712334) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:712325

Calls written directly in this body: `createConnectTransport2`.

SHA-256 of the source span: `5b4281a25c6fe34f17ca96f5edd426e251a801d1d05d524cc76c6231d53b61a2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
