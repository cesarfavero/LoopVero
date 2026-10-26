# `formatMcpAccountDisplayName`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp.ts` · [Module README](../../../../../modules/shared/mcp/mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226023-226025](../../../../../../reference/runtime/host-main.cjs#L226023-L226025) | `FunctionDeclaration` | no | `name18, accountKey` |
| [evaluation:495246-495248](../../../../../../reference/runtime/sand-eval-runner.cjs#L495246-L495248) | `FunctionDeclaration` | no | `name18, accountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226023-226025](../../../../../../reference/runtime/host-main.cjs#L226023-L226025) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495246-495248](../../../../../../reference/runtime/sand-eval-runner.cjs#L495246-L495248) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:226023

Calls written directly in this body: `formatMcpAccountLabelForPrompt`.

SHA-256 of the source span: `25a5a10a2186e3cc63dd0f13226ae6c8f4af01ca53a905b826444de5394198c0`.

### evaluation:495246

Calls written directly in this body: `formatMcpAccountLabelForPrompt`.

SHA-256 of the source span: `25a5a10a2186e3cc63dd0f13226ae6c8f4af01ca53a905b826444de5394198c0`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
