# `describeInstalled`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779683-779706](../../../../../../../reference/runtime/host-main.cjs#L779683-L779706) | `FunctionDeclaration` | no | `server, signOutNote` |
| [evaluation:579921-579944](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579921-L579944) | `FunctionDeclaration` | no | `server, signOutNote` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779683-779706](../../../../../../../reference/runtime/host-main.cjs#L779683-L779706) | 5 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579921-579944](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579921-L579944) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:779683

Calls written directly in this body: `encodeMcpAccountLabelForListing`, `getDefaultMcpCustomInstruction`, `parts.join`, `parts.push`, `signOutNote`, `truncateOneLine`.

SHA-256 of the source span: `150e8a3383b35fcc8520c99101361986c8fb206f784e282abff0ebf19e343913`.

### evaluation:579921

Calls written directly in this body: `encodeMcpAccountLabelForListing`, `getDefaultMcpCustomInstruction`, `parts.join`, `parts.push`, `signOutNote`, `truncateOneLine`.

SHA-256 of the source span: `150e8a3383b35fcc8520c99101361986c8fb206f784e282abff0ebf19e343913`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
