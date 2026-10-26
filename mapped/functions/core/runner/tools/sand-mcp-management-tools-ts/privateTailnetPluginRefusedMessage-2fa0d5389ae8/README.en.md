# `privateTailnetPluginRefusedMessage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780048-780050](../../../../../../../reference/runtime/host-main.cjs#L780048-L780050) | `FunctionDeclaration` | no | `args` |
| [evaluation:580293-580295](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580293-L580295) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780048-780050](../../../../../../../reference/runtime/host-main.cjs#L780048-L780050) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:580293-580295](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580293-L580295) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:780048

Calls written directly in this body: `args.urls.join`, `mcpTailnetPluginInstallRefusal`.

SHA-256 of the source span: `7af71217bf9b892ece96ba2a90ed940b788cbc9f200febfa8692d235e75c9ae2`.

### evaluation:580293

Calls written directly in this body: `args.urls.join`, `mcpTailnetPluginInstallRefusal`.

SHA-256 of the source span: `7af71217bf9b892ece96ba2a90ed940b788cbc9f200febfa8692d235e75c9ae2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
