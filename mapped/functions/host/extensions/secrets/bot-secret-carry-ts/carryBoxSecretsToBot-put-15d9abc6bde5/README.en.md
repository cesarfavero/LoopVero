# `carryBoxSecretsToBot/put`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/secrets/bot-secret-carry.ts` · [Module README](../../../../../../modules/host/extensions/secrets/bot-secret-carry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:709025-709028](../../../../../../../reference/runtime/host-main.cjs#L709025-L709028) | `ArrowFunctionExpression` | no | `serverId, secret` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:709025-709028](../../../../../../../reference/runtime/host-main.cjs#L709025-L709028) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:709025 uses an implicit arrow-function return.

### host:709025

Calls written directly in this body: `deps.client.putGrokBotSecret`.

SHA-256 of the source span: `191b585d3e57c16d9671d9726a6f14c5a6847f6d5563c4748ea26af55dc8516f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
