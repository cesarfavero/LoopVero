# `parseNotionUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773982-773990](../../../../../../reference/runtime/host-main.cjs#L773982-L773990) | `FunctionDeclaration` | no | `url2` |
| [evaluation:573197-573205](../../../../../../reference/runtime/sand-eval-runner.cjs#L573197-L573205) | `FunctionDeclaration` | no | `url2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773982-773990](../../../../../../reference/runtime/host-main.cjs#L773982-L773990) | 4 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:573197-573205](../../../../../../reference/runtime/sand-eval-runner.cjs#L573197-L573205) | 4 | 0 | 0 | 4 | 0 | 0 |

### host:773982

Calls written directly in this body: `.at`, `NOTION_SLUG_ID_RE.exec`, `isHostOf`, `notionDoc`, `segmentsOf`, `url2.searchParams.get`.

SHA-256 of the source span: `d25ec0cf19115713fec038da2ade0db2e519fc7a990fc29d5826b999a4ef2c2e`.

### evaluation:573197

Calls written directly in this body: `.at`, `NOTION_SLUG_ID_RE.exec`, `isHostOf`, `notionDoc`, `segmentsOf`, `url2.searchParams.get`.

SHA-256 of the source span: `d25ec0cf19115713fec038da2ade0db2e519fc7a990fc29d5826b999a4ef2c2e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
