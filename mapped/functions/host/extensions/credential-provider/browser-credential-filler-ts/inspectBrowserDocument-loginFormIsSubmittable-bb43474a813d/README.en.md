# `inspectBrowserDocument/loginFormIsSubmittable`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547513-547518](../../../../../../../reference/runtime/host-main.cjs#L547513-L547518) | `ArrowFunctionExpression` | no | `form, controlsToFill` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547513-547518](../../../../../../../reference/runtime/host-main.cjs#L547513-L547518) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:547513

Calls written directly in this body: `.every`, `Element.prototype.hasAttribute.call`, `formControls`.

SHA-256 of the source span: `9f357deae46f19d739922d0b97e7724ed148cb89963313b1852438091831643a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
