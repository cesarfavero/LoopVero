# `sanitizeTitle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/library-docs/mcp-doc-touches.ts` · [Module README](../../../../../../modules/core/runner/library-docs/mcp-doc-touches-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774528-774533](../../../../../../../reference/runtime/host-main.cjs#L774528-L774533) | `FunctionDeclaration` | no | `raw` |
| [evaluation:573907-573912](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573907-L573912) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774528-774533](../../../../../../../reference/runtime/host-main.cjs#L774528-L774533) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573907-573912](../../../../../../../reference/runtime/sand-eval-runner.cjs#L573907-L573912) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:774528

Calls written directly in this body: `.replaceAll`, `.trim`, `raw.replaceAll`, `title.slice`.

SHA-256 of the source span: `8a1782c06ab7a504411c6460636fd0e869c751bdd2788e6f29ab86148b7cf62e`.

### evaluation:573907

Calls written directly in this body: `.replaceAll`, `.trim`, `raw.replaceAll`, `title.slice`.

SHA-256 of the source span: `8a1782c06ab7a504411c6460636fd0e869c751bdd2788e6f29ab86148b7cf62e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
