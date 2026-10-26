# `BrowserCredentialFiller.pickFillTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548107-548155](../../../../../../../reference/runtime/host-main.cjs#L548107-L548155) | `method` | yes | `request5, windowIndex, event = "allow-once"` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548107-548155](../../../../../../../reference/runtime/host-main.cjs#L548107-L548155) | 5 | 0 | 2 | 5 | 0 | 0 |

### host:548107

Calls written directly in this body: `.filter`, `chooseBrowserCredentialTarget`, `hostFromSite`, `partitionTargetsByWindow`, `refuse2`, `this.discoverTargets`, `trustedBrowserOrigin`.

SHA-256 of the source span: `b9c32eef404cd89216e3db1ca94acbf45da9574417e059c92b51d663a240e83b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
