# `validateRemoteMcpUrl`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:779582-779596](../../../../../../../reference/runtime/host-main.cjs#L779582-L779596) | `FunctionDeclaration` | no | `rawUrl` |
| [evaluation:579820-579834](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579820-L579834) | `FunctionDeclaration` | no | `rawUrl` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:779582-779596](../../../../../../../reference/runtime/host-main.cjs#L779582-L779596) | 2 | 0 | 0 | 4 | 0 | 1 |
| [evaluation:579820-579834](../../../../../../../reference/runtime/sand-eval-runner.cjs#L579820-L579834) | 2 | 0 | 0 | 4 | 0 | 1 |

### host:779582

Calls written directly in this body: `new URL`.

Assignment or increment targets: `parsed2`.

SHA-256 of the source span: `779dba681798d28353e2605e4601ac9035fc382843b9390b85e362dec893f650`.

### evaluation:579820

Calls written directly in this body: `new URL`.

Assignment or increment targets: `parsed`.

SHA-256 of the source span: `0ed9e296f5e9260a4520a436bfbc958d2e903a158f007a43f33eecfde6b9caed`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
