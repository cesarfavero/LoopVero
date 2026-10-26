# `describePluginServer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779847-779853](../../../../../../../reference/runtime/host-main.cjs#L779847-L779853) | `FunctionDeclaration` | no | `server` |
| [evaluation:580085-580091](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580085-L580091) | `FunctionDeclaration` | no | `server` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779847-779853](../../../../../../../reference/runtime/host-main.cjs#L779847-L779853) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:580085-580091](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580085-L580091) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:779847

Calls written directly in this body: `.join`, `encodeMcpAccountLabelForListing`.

SHA-256 of the source span: `25e59ca8db4b44b11f385769e70745be3332adf3b57eae3569741d7bd32c8900`.

### evaluation:580085

Calls written directly in this body: `.join`, `encodeMcpAccountLabelForListing`.

SHA-256 of the source span: `25e59ca8db4b44b11f385769e70745be3332adf3b57eae3569741d7bd32c8900`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
