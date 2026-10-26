# `normalizedArgKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774504-774506](../../../../../../reference/runtime/host-main.cjs#L774504-L774506) | `FunctionDeclaration` | no | `key` |
| [evaluation:573740-573742](../../../../../../reference/runtime/sand-eval-runner.cjs#L573740-L573742) | `FunctionDeclaration` | no | `key` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774504-774506](../../../../../../reference/runtime/host-main.cjs#L774504-L774506) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573740-573742](../../../../../../reference/runtime/sand-eval-runner.cjs#L573740-L573742) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:774504

Calls written directly in this body: `.replaceAll`, `key.toLowerCase`.

SHA-256 of the source span: `8f5f5860b7d74955f8d3213b85b0aa46f6e454407a697a5dd25574b9b8968469`.

### evaluation:573740

Calls written directly in this body: `.replaceAll`, `key.toLowerCase`.

SHA-256 of the source span: `8f5f5860b7d74955f8d3213b85b0aa46f6e454407a697a5dd25574b9b8968469`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
