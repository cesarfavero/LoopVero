# `inspectBrowserDocument/revealedOnceIsEligible`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547303-547310](../../../../../../../reference/runtime/host-main.cjs#L547303-L547310) | `ArrowFunctionExpression` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547303-547310](../../../../../../../reference/runtime/host-main.cjs#L547303-L547310) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:547303

Calls written directly in this body: `eligible`, `revealed.add`, `revealed.has`, `scrollIntoView.call`.

SHA-256 of the source span: `d251b57667a75b527846d975c2a10b3e9cfda3579b8d41631ebca1d547b51b01`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
