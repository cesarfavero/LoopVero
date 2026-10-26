# `airtableDoc`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774173-774176](../../../../../../reference/runtime/host-main.cjs#L774173-L774176) | `FunctionDeclaration` | no | `raw` |
| [evaluation:573388-573391](../../../../../../reference/runtime/sand-eval-runner.cjs#L573388-L573391) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774173-774176](../../../../../../reference/runtime/host-main.cjs#L774173-L774176) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573388-573391](../../../../../../reference/runtime/sand-eval-runner.cjs#L573388-L573391) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:774173

Calls written directly in this body: `matching`, `raw.trim`.

SHA-256 of the source span: `04bbcd47a3bc0388c46a6f55b270fbbac4034a88fd069602bf9a7e8013a21065`.

### evaluation:573388

Calls written directly in this body: `matching`, `raw.trim`.

SHA-256 of the source span: `04bbcd47a3bc0388c46a6f55b270fbbac4034a88fd069602bf9a7e8013a21065`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
