# `parseAtlassianUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:774073-774090](../../../../../../reference/runtime/host-main.cjs#L774073-L774090) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573288-573305](../../../../../../reference/runtime/sand-eval-runner.cjs#L573288-L573305) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:774073-774090](../../../../../../reference/runtime/host-main.cjs#L774073-L774090) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:573288-573305](../../../../../../reference/runtime/sand-eval-runner.cjs#L573288-L573305) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:774073

Calls written directly in this body: `.join`, `LINEAR_ISSUE_RE.test`, `hostname4.endsWith`, `matching`, `segments.indexOf`, `segments.slice`, `segmentsOf`, `url2.hostname.toLowerCase`.

SHA-256 of the source span: `b855fe98011e695ef7acfb1e209c8752ce506903709122e5112977b6486c2c41`.

### evaluation:573288

Calls written directly in this body: `.join`, `LINEAR_ISSUE_RE.test`, `hostname3.endsWith`, `matching`, `segments.indexOf`, `segments.slice`, `segmentsOf`, `url2.hostname.toLowerCase`.

SHA-256 of the source span: `5e4c967c138c97434bb425147373319b4bdc2a71095200fcef8f56e845e832b7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
