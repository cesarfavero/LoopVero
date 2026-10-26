# `wordsOf4`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:573706-573709](../../../../../../reference/runtime/sand-eval-runner.cjs#L573706-L573709) | `FunctionDeclaration` | no | `name18, splitCamelCase` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:573706-573709](../../../../../../reference/runtime/sand-eval-runner.cjs#L573706-L573709) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:573706

Calls written directly in this body: `.filter`, `.split`, `name18.replaceAll`, `spaced.toLowerCase`.

SHA-256 of the source span: `1f85c8edede4bf51876d0a637276866b8abcfecb40b921f52a6096d804ce41db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
