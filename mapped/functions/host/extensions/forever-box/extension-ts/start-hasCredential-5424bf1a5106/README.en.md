# `start/hasCredential`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/extension.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681066-681066](../../../../../../../reference/runtime/host-main.cjs#L681066-L681066) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681066-681066](../../../../../../../reference/runtime/host-main.cjs#L681066-L681066) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:681066 uses an implicit arrow-function return.

### host:681066

Calls written directly in this body: `context2.deps.auth.peekAccessToken`.

SHA-256 of the source span: `b5522cd75a438a271c81c334ffd22e6854b31650a28b4c97309e2f2572c41c71`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
