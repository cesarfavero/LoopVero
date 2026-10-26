# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/browser-ua/extension.ts` · [Module README](../../../../../../modules/host/extensions/browser-ua/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:506585-506637](../../../../../../../reference/runtime/host-main.cjs#L506585-L506637) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:506585-506637](../../../../../../../reference/runtime/host-main.cjs#L506585-L506637) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:506585

Calls written directly in this body: `boxBrowserGate.reconcile`, `context2.onStop`, `createBoxBrowserGateMarkers`, `createWebBotAuthMarkerReconciler`, `experiments.pinGateOnAuthenticatedBootstrap`, `experiments.subscribe`, `reconcileAcceptLanguageEnUs`, `reconcileEnableSpoofGpu`, `reconcileHardwareProfile`, `reconcileWebBotAuth`, `writeUaTokenDisabledMarker`, `writeXhrFetchMarkerForOlderBoxImageDaemons`.

SHA-256 of the source span: `75978328b0d605054f03ab9fb13b452fed67a9feb0f831f97c8a81d5258c72b2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
