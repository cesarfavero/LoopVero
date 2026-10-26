# `createConsentedHostBelt/markLost`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727357-727361](../../../../../../../reference/runtime/host-main.cjs#L727357-L727361) | `ArrowFunctionExpression` | no | `host` |
| [evaluation:561863-561867](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561863-L561867) | `ArrowFunctionExpression` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727357-727361](../../../../../../../reference/runtime/host-main.cjs#L727357-L727361) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561863-561867](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561863-L561867) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:727357

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `liveHost`, `lost`.

SHA-256 of the source span: `50f0dccd1842fe95b63f0f6cdce1404de56c32da30dc58bbd5d5d5ed725b9729`.

### evaluation:561863

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `liveHost`, `lost`.

SHA-256 of the source span: `50f0dccd1842fe95b63f0f6cdce1404de56c32da30dc58bbd5d5d5ed725b9729`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
