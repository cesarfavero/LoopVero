# `createIdleDesktopPark/backingOff`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/idle-desktop-park.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/idle-desktop-park-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680027-680030](../../../../../../../reference/runtime/host-main.cjs#L680027-L680030) | `ArrowFunctionExpression` | no | `key, now` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680027-680030](../../../../../../../reference/runtime/host-main.cjs#L680027-L680030) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:680027

Calls written directly in this body: `elapsedMs`, `unparked2.get`, `unparkedBackoffMs`.

SHA-256 of the source span: `96b00bf897615cadf0ba4d724df4055b2e551552093a076b5ad164448e61cb25`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
