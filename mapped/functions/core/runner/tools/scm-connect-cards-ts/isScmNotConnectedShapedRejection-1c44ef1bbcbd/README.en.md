# `isScmNotConnectedShapedRejection`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/scm-connect-cards.ts` · [Module README](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:509211-509213](../../../../../../../reference/runtime/host-main.cjs#L509211-L509213) | `FunctionDeclaration` | no | `rejection` |
| [evaluation:556936-556938](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556936-L556938) | `FunctionDeclaration` | no | `rejection` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509211-509213](../../../../../../../reference/runtime/host-main.cjs#L509211-L509213) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556936-556938](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556936-L556938) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509211

Calls written directly in this body: `/is not connected to your (account|team)/i.test`.

SHA-256 of the source span: `e16a429011a8fe7b221f6377e05a21fe8dcc73c573ca0f7c55b7359acbc0f3f0`.

### evaluation:556936

Calls written directly in this body: `/is not connected to your (account|team)/i.test`.

SHA-256 of the source span: `e16a429011a8fe7b221f6377e05a21fe8dcc73c573ca0f7c55b7359acbc0f3f0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
