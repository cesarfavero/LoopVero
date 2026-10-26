# `cappedInteger`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/approvals/README.en.md).

**Module:** `host/extensions/telemetry/cookie-origin-approval-telemetry.ts` · [Module README](../../../../../../modules/host/extensions/telemetry/cookie-origin-approval-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:456161-456164](../../../../../../../reference/runtime/host-main.cjs#L456161-L456164) | `FunctionDeclaration` | no | `value, cap` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:456161-456164](../../../../../../../reference/runtime/host-main.cjs#L456161-L456164) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:456161

Calls written directly in this body: `Math.max`, `Math.min`, `Math.round`, `Number.isFinite`.

SHA-256 of the source span: `92fcf5b628e154ff3d09abecd92493f856039361966890cbe6b8129ee3ef6bbb`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
