# `createIdleDesktopPark/dispose`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/idle-desktop-park.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/idle-desktop-park-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680114-680117](../../../../../../../reference/runtime/host-main.cjs#L680114-L680117) | `FunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680114-680117](../../../../../../../reference/runtime/host-main.cjs#L680114-L680117) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:680114

Calls written directly in this body: `polling.dispose`.

Assignment or increment targets: `polling`.

SHA-256 of the source span: `bf2a6a7ff23d0ac6f8a404c48cfc1c55074a9ac8d1fdc1a8bbc391a5d123a7a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
