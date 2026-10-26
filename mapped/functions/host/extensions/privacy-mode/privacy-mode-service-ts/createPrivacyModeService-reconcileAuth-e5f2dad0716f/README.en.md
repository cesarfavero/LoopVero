# `createPrivacyModeService/reconcileAuth`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/privacy-mode/privacy-mode-service.ts` · [Module README](../../../../../../modules/host/extensions/privacy-mode/privacy-mode-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:706545-706564](../../../../../../../reference/runtime/host-main.cjs#L706545-L706564) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:706545-706564](../../../../../../../reference/runtime/host-main.cjs#L706545-L706564) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:706545

Calls written directly in this body: `activeRefresh.abort`, `auth2.peekAccessToken`, `publish`, `readAuth`, `refresh`.

Assignment or increment targets: `activeAuth`, `activeRefresh`, `generation`.

SHA-256 of the source span: `29f64725792e6f68b259fdda3781a7e90068dd3c389bc4e3706f3b989bce4328`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
