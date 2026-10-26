# `describeGrokUnavailableAuthRefusal`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779742-779749](../../../../../../../reference/runtime/host-main.cjs#L779742-L779749) | `FunctionDeclaration` | no | `resolution` |
| [evaluation:579980-579987](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579980-L579987) | `FunctionDeclaration` | no | `resolution` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779742-779749](../../../../../../../reference/runtime/host-main.cjs#L779742-L779749) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579980-579987](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579980-L579987) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:779742

Calls written directly in this body: `resolution.serverId.startsWith`.

SHA-256 of the source span: `68578df1a618c0b34d6780444057517c4bff37d3771ae049d4db2e07080856a7`.

### evaluation:579980

Calls written directly in this body: `resolution.serverId.startsWith`.

SHA-256 of the source span: `68578df1a618c0b34d6780444057517c4bff37d3771ae049d4db2e07080856a7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
