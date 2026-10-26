# `parseFigmaUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774051-774058](../../../../../../reference/runtime/host-main.cjs#L774051-L774058) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573266-573273](../../../../../../reference/runtime/sand-eval-runner.cjs#L573266-L573273) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774051-774058](../../../../../../reference/runtime/host-main.cjs#L774051-L774058) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573266-573273](../../../../../../reference/runtime/sand-eval-runner.cjs#L573266-L573273) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:774051

Calls written directly in this body: `FIGMA_EDITORS.get`, `isHostOf`, `matching`, `segmentsOf`.

SHA-256 of the source span: `c0c53b1aeb39e1237947b3413803a992b7f81f777ede3c88b693392b03e02456`.

### evaluation:573266

Calls written directly in this body: `FIGMA_EDITORS.get`, `isHostOf`, `matching`, `segmentsOf`.

SHA-256 of the source span: `c0c53b1aeb39e1237947b3413803a992b7f81f777ede3c88b693392b03e02456`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
