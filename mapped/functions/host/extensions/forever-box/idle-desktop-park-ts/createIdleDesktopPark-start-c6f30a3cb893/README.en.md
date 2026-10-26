# `createIdleDesktopPark/start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/idle-desktop-park.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/idle-desktop-park-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680105-680113](../../../../../../../reference/runtime/host-main.cjs#L680105-L680113) | `FunctionExpression` | no | `policy` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680105-680113](../../../../../../../reference/runtime/host-main.cjs#L680105-L680113) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:680105

Calls written directly in this body: `policy.start`.

Assignment or increment targets: `polling`.

SHA-256 of the source span: `2238b7d86c144cdf4d9d54025989ab82242c06b7e1ced66c56639cde7a96ce90`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
