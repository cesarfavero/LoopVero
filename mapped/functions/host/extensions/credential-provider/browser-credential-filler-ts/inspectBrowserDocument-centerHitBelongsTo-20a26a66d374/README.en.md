# `inspectBrowserDocument/centerHitBelongsTo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `host/extensions/credential-provider/browser-credential-filler.ts` · [Module README](../../../../../../modules/host/extensions/credential-provider/browser-credential-filler-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:547242-547268](../../../../../../../reference/runtime/host-main.cjs#L547242-L547268) | `ArrowFunctionExpression` | no | `input2, rect` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:547242-547268](../../../../../../../reference/runtime/host-main.cjs#L547242-L547268) | 4 | 1 | 0 | 4 | 0 | 0 |

### host:547242

Calls written directly in this body: `.some`, `boundaryRoot.elementFromPoint`, `documentBoundary.getRootNode`, `input2.contains`, `input2.getRootNode`, `input2.ownerDocument.elementFromPoint`, `labelsFor`, `root.elementFromPoint`.

Assignment or increment targets: `boundaryRoot`, `documentBoundary`, `hit`.

SHA-256 of the source span: `cc5ea5f806d132106509ff9d6b1e34d1cde27133fe932b2dcdc442855a6d4203`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
