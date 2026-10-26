# `inspectBrowserDocument/presentable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547285-547291](../../../../../../../reference/runtime/host-main.cjs#L547285-L547291) | `ArrowFunctionExpression` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547285-547291](../../../../../../../reference/runtime/host-main.cjs#L547285-L547291) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:547285

Calls written directly in this body: `Element.prototype.matches.call`, `Number.isFinite`, `elementAndAncestorsAreVisible`, `input2.getAttribute`, `input2.getBoundingClientRect`.

SHA-256 of the source span: `aac02c4339e8783fdf0764bb4b42f195e9ec78cab96fd5ec139faa23c499b317`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
