# `slimAvatarOverrides/createGroup`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-protocol.ts` · [Module README](../../../../modules/host/gateway-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490015-490015](../../../../../reference/runtime/host-main.cjs#L490015-L490015) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490015-490015](../../../../../reference/runtime/host-main.cjs#L490015-L490015) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:490015 uses an implicit arrow-function return.

### host:490015

Calls written directly in this body: `api.createGroup`, `stripCreateAgentResult`.

SHA-256 of the source span: `1e9e4d42a6cd70cfd089da23541779f72e13f36d17a13f08081e7f7adbb58ce0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
