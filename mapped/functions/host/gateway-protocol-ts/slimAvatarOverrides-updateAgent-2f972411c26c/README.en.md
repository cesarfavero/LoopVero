# `slimAvatarOverrides/updateAgent`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../guide/components/gateway/README.en.md).

**Module:** `host/gateway-protocol.ts` · [Module README](../../../../modules/host/gateway-protocol-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:490005-490005](../../../../../reference/runtime/host-main.cjs#L490005-L490005) | `ArrowFunctionExpression` | yes | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:490005-490005](../../../../../reference/runtime/host-main.cjs#L490005-L490005) | 0 | 0 | 1 | 0 | 0 | 0 |

The occurrence at host:490005 uses an implicit arrow-function return.

### host:490005

Calls written directly in this body: `api.updateAgent`, `stripNullableSummary`.

SHA-256 of the source span: `27a17293d7793b1cd271206d670d4bbbe5d687f0e0ce1350eb1129b8a8691310`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../guide/methodology/README.en.md).
