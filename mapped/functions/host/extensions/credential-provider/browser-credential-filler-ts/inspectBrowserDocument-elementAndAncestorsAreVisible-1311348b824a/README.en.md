# `inspectBrowserDocument/elementAndAncestorsAreVisible`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547269-547284](../../../../../../../reference/runtime/host-main.cjs#L547269-L547284) | `ArrowFunctionExpression` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547269-547284](../../../../../../../reference/runtime/host-main.cjs#L547269-L547284) | 3 | 1 | 0 | 4 | 0 | 0 |

### host:547269

Calls written directly in this body: `Element.prototype.hasAttribute.call`, `Number.isFinite`, `Number.parseFloat`, `composedParent`, `getComputedStyle`, `input2.getAttribute`.

Assignment or increment targets: `element`.

SHA-256 of the source span: `ccd6ed899f5dbef2f729ff7b475a80c56461727076884d8c016e7749dbb831e8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
