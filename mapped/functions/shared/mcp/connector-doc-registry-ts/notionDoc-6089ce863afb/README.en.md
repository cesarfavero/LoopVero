# `notionDoc`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773978-773981](../../../../../../reference/runtime/host-main.cjs#L773978-L773981) | `FunctionDeclaration` | no | `raw` |
| [evaluation:573193-573196](../../../../../../reference/runtime/sand-eval-runner.cjs#L573193-L573196) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773978-773981](../../../../../../reference/runtime/host-main.cjs#L773978-L773981) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:573193-573196](../../../../../../reference/runtime/sand-eval-runner.cjs#L573193-L573196) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:773978

Calls written directly in this body: `normalizeNotionId`.

SHA-256 of the source span: `e0a3a26de3e8a282e4c1d335b7a0785844379bf37d4749648edaab6975553804`.

### evaluation:573193

Calls written directly in this body: `normalizeNotionId`.

SHA-256 of the source span: `e0a3a26de3e8a282e4c1d335b7a0785844379bf37d4749648edaab6975553804`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
