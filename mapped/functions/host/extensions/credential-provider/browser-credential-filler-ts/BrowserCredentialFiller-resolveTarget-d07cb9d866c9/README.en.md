# `BrowserCredentialFiller.resolveTarget`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:548008-548102](../../../../../../../reference/runtime/host-main.cjs#L548008-L548102) | `method` | yes | `item, siteHint, windowIndex` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:548008-548102](../../../../../../../reference/runtime/host-main.cjs#L548008-L548102) | 9 | 0 | 3 | 7 | 0 | 0 |

### host:548008

Calls written directly in this body: `asyncMapValues`, `chooseBrowserCredentialTarget`, `credentialFillFailureDetail`, `eligible.map`, `inspected.every`, `inspected.filter`, `inspected.flatMap`, `inspected.map`, `inspected.some`, `mergedPageDiagnostics`, `new Map`, `partitionTargetsByWindow`, `this.discoverTargets`, `trustedBrowserOrigin`.

SHA-256 of the source span: `50aefeab0f33a466c969e5eeea3204df9ba4ce7355a83ab6e3ceda6b8e69da35`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
