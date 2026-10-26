# `renderReadResult2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-messages-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778042-778050](../../../../../../../reference/runtime/host-main.cjs#L778042-L778050) | `FunctionDeclaration` | no | `result, spansWholeHistory = false` |
| [evaluation:577777-577785](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577777-L577785) | `FunctionDeclaration` | no | `result, spansWholeHistory = false` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778042-778050](../../../../../../../reference/runtime/host-main.cjs#L778042-L778050) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:577777-577785](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577777-L577785) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:778042

Calls written directly in this body: `JSON.stringify`, `boundLegacyReadResult`, `truncationNotice`.

SHA-256 of the source span: `946f5196471ee3cd14a965f471db7148d0508139b7a86167ece84aa18286454a`.

### evaluation:577777

Calls written directly in this body: `JSON.stringify`, `boundLegacyReadResult`, `truncationNotice`.

SHA-256 of the source span: `946f5196471ee3cd14a965f471db7148d0508139b7a86167ece84aa18286454a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
