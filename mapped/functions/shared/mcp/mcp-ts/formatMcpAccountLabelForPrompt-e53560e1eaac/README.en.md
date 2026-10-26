# `formatMcpAccountLabelForPrompt`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `shared/mcp/mcp.ts` · [Module README](../../../../../modules/shared/mcp/mcp-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:226019-226022](../../../../../../reference/runtime/host-main.cjs#L226019-L226022) | `FunctionDeclaration` | no | `rawLabel` |
| [evaluation:495242-495245](../../../../../../reference/runtime/sand-eval-runner.cjs#L495242-L495245) | `FunctionDeclaration` | no | `rawLabel` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:226019-226022](../../../../../../reference/runtime/host-main.cjs#L226019-L226022) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495242-495245](../../../../../../reference/runtime/sand-eval-runner.cjs#L495242-L495245) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:226019

Calls written directly in this body: `.replace`, `.trim`, `inert.slice`, `rawLabel.replace`.

SHA-256 of the source span: `bffd16003ed02199246e193d206f6b86ea35b25ea45371e705707d059d3d1aed`.

### evaluation:495242

Calls written directly in this body: `.replace`, `.trim`, `inert.slice`, `rawLabel.replace`.

SHA-256 of the source span: `bffd16003ed02199246e193d206f6b86ea35b25ea45371e705707d059d3d1aed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
