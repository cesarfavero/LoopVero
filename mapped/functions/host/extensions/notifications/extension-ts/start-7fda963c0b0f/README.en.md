# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/notifications/extension.ts` · [Module README](../../../../../../modules/host/extensions/notifications/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:703522-703551](../../../../../../../reference/runtime/host-main.cjs#L703522-L703551) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703522-703551](../../../../../../../reference/runtime/host-main.cjs#L703522-L703551) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:703522

Calls written directly in this body: `context2.host.events.subscribe`, `context2.onStop`, `createSandCursorBackendClient`, `createSandMobilePushSender`, `new SandMobilePushNotifier`.

SHA-256 of the source span: `26f12b1c15f8512fffb71895e4490628fc9c04175010cf693e156ce5c65ec7b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
