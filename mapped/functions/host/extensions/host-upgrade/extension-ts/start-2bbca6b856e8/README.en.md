# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/host-upgrade/extension.ts` · [Module README](../../../../../../modules/host/extensions/host-upgrade/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:681835-681890](../../../../../../../reference/runtime/host-main.cjs#L681835-L681890) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:681835-681890](../../../../../../../reference/runtime/host-main.cjs#L681835-L681890) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:681835

Calls written directly in this body: `Math.min`, `context2.onStop`, `createMarkerStore`, `createPollingPolicy2`, `new HostUpgradeService`, `resolveHostBundleWatchIntervalMs`, `service.startMarkerForwardWake`.

SHA-256 of the source span: `15c045dfbe95d7a504b0a688b8e01cbcb10f4d1013f9bef026128e6db5fb07bd`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
