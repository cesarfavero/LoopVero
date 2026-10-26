# `fieldSniffText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/user-form-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/user-form-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:726178-726180](../../../../../../../reference/runtime/host-main.cjs#L726178-L726180) | `FunctionDeclaration` | no | `field` |
| [evaluation:560796-560798](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560796-L560798) | `FunctionDeclaration` | no | `field` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:726178-726180](../../../../../../../reference/runtime/host-main.cjs#L726178-L726180) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:560796-560798](../../../../../../../reference/runtime/sand-eval-runner.cjs#L560796-L560798) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:726178

Calls written directly in this body: `.replace`, `new RegExp`.

SHA-256 of the source span: `128bd10f2e90dd74bd51f5f211f19fafb757beb5aafd30e55538b806cba5cebf`.

### evaluation:560796

Calls written directly in this body: `.replace`, `new RegExp`.

SHA-256 of the source span: `128bd10f2e90dd74bd51f5f211f19fafb757beb5aafd30e55538b806cba5cebf`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
