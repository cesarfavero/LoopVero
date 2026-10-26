# `normalizeMcpAccountLabel`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp.ts` · [Module README](../../../../../modules/shared/mcp/mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:225992-225994](../../../../../../reference/runtime/host-main.cjs#L225992-L225994) | `FunctionDeclaration` | no | `rawLabel` |
| [evaluation:495216-495218](../../../../../../reference/runtime/sand-eval-runner.cjs#L495216-L495218) | `FunctionDeclaration` | no | `rawLabel` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225992-225994](../../../../../../reference/runtime/host-main.cjs#L225992-L225994) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495216-495218](../../../../../../reference/runtime/sand-eval-runner.cjs#L495216-L495218) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225992

Calls written directly in this body: `.toLowerCase`, `rawLabel.trim`.

SHA-256 of the source span: `edc24b47b738581b4deb6a8b564a5dbe029434d1c7f95007c88cbc8d613a40fc`.

### evaluation:495216

Calls written directly in this body: `.toLowerCase`, `rawLabel.trim`.

SHA-256 of the source span: `edc24b47b738581b4deb6a8b564a5dbe029434d1c7f95007c88cbc8d613a40fc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
