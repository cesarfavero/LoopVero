# `describePluginSummary`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779805-779821](../../../../../../../reference/runtime/host-main.cjs#L779805-L779821) | `FunctionDeclaration` | no | `plugin, installed` |
| [evaluation:580043-580059](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580043-L580059) | `FunctionDeclaration` | no | `plugin, installed` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779805-779821](../../../../../../../reference/runtime/host-main.cjs#L779805-L779821) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:580043-580059](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580043-L580059) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:779805

Calls written directly in this body: `.join`, `describePluginIncludes`, `describePluginInstallState`, `describePluginSignIn`, `getDefaultMcpCustomInstruction`, `parts.join`, `parts.push`.

SHA-256 of the source span: `e236c5d0940c485ae1c522486ab9bd7b3440e07482e44109b80770c1605dff6f`.

### evaluation:580043

Calls written directly in this body: `.join`, `describePluginIncludes`, `describePluginInstallState`, `describePluginSignIn`, `getDefaultMcpCustomInstruction`, `parts.join`, `parts.push`.

SHA-256 of the source span: `e236c5d0940c485ae1c522486ab9bd7b3440e07482e44109b80770c1605dff6f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
