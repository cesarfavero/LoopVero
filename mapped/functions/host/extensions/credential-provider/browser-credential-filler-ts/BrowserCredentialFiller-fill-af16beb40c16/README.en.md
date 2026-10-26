# `BrowserCredentialFiller.fill`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548103-548106](../../../../../../../reference/runtime/host-main.cjs#L548103-L548106) | `method` | yes | `request5, windowIndex, event = "allow-once"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548103-548106](../../../../../../../reference/runtime/host-main.cjs#L548103-L548106) | 1 | 0 | 2 | 1 | 0 | 0 |

### host:548103

Calls written directly in this body: `this.fillPickedTarget`, `this.pickFillTarget`.

SHA-256 of the source span: `f0f15a700e4f9d39227ead93a9840e49210b185c87585cfd75fd1ce3e4535f7d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
