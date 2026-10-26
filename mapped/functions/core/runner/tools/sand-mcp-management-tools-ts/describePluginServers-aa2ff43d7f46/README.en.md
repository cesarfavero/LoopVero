# `describePluginServers`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779854-779866](../../../../../../../reference/runtime/host-main.cjs#L779854-L779866) | `FunctionDeclaration` | no | `detail, statuses` |
| [evaluation:580092-580104](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580092-L580104) | `FunctionDeclaration` | no | `detail, statuses` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779854-779866](../../../../../../../reference/runtime/host-main.cjs#L779854-L779866) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:580092-580104](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580092-L580104) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:779854

Calls written directly in this body: `.join`, `detail.servers.map`.

SHA-256 of the source span: `4f4e0a162e5a120177b6f054ec654e4bf9d5334161e18a2015158dc25b6acc52`.

### evaluation:580092

Calls written directly in this body: `.join`, `detail.servers.map`.

SHA-256 of the source span: `4f4e0a162e5a120177b6f054ec654e4bf9d5334161e18a2015158dc25b6acc52`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
