# `start/registerProvider`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/webauthn-proxy/extension.ts` · [Module README](../../../../../../modules/host/extensions/webauthn-proxy/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:785346-785346](../../../../../../../reference/runtime/host-main.cjs#L785346-L785346) | `ArrowFunctionExpression` | no | `send` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:785346-785346](../../../../../../../reference/runtime/host-main.cjs#L785346-L785346) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:785346 uses an implicit arrow-function return.

### host:785346

Calls written directly in this body: `bridge.registerProvider`.

SHA-256 of the source span: `4cd250b4bafc5628ed7f7afd274d79652ee7146b3aaffd06f767e01463d8b2de`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
