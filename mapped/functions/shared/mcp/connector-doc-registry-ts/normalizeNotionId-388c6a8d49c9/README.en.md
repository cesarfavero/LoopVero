# `normalizeNotionId`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/connector-doc-registry.ts` · [Module README](../../../../../modules/shared/mcp/connector-doc-registry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:773972-773977](../../../../../../reference/runtime/host-main.cjs#L773972-L773977) | `FunctionDeclaration` | no | `raw` |
| [evaluation:573187-573192](../../../../../../reference/runtime/sand-eval-runner.cjs#L573187-L573192) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:773972-773977](../../../../../../reference/runtime/host-main.cjs#L773972-L773977) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:573187-573192](../../../../../../reference/runtime/sand-eval-runner.cjs#L573187-L573192) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:773972

Calls written directly in this body: `.toLowerCase`, `NOTION_ID_RE.test`, `NOTION_UUID_RE.test`, `raw.trim`, `trimmed.replaceAll`, `trimmed.toLowerCase`.

SHA-256 of the source span: `838d0da880e8f215f684c91326fe776af2c6b753b4cb21d55a4d184d3a61e2e4`.

### evaluation:573187

Calls written directly in this body: `.toLowerCase`, `NOTION_ID_RE.test`, `NOTION_UUID_RE.test`, `raw.trim`, `trimmed.replaceAll`, `trimmed.toLowerCase`.

SHA-256 of the source span: `838d0da880e8f215f684c91326fe776af2c6b753b4cb21d55a4d184d3a61e2e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
