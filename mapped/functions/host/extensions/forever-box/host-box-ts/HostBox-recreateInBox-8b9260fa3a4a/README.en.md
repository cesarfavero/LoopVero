# `HostBox.recreateInBox`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/forever-box/host-box.ts` · [Module README](../../../../../../modules/host/extensions/forever-box/host-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:680636-680641](../../../../../../../reference/runtime/host-main.cjs#L680636-L680641) | `method` | yes | `ctx, opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:680636-680641](../../../../../../../reference/runtime/host-main.cjs#L680636-L680641) | 1 | 0 | 1 | 1 | 1 | 0 |

### host:680636

Calls written directly in this body: `new SandBoxCapabilityError2`, `this.inner.recreateInBox`.

Explicit throw targets: `SandBoxCapabilityError2`.

SHA-256 of the source span: `b736abae5844ba1120c1d0e22d4f59b1c19ddf2466ea824eadeded7689ffad4d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
