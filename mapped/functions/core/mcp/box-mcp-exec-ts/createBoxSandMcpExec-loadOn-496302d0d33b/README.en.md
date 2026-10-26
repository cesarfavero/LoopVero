# `createBoxSandMcpExec/loadOn`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684888-684894](../../../../../../reference/runtime/host-main.cjs#L684888-L684894) | `ArrowFunctionExpression` | yes | `host, configJson, load2` |
| [evaluation:514676-514682](../../../../../../reference/runtime/sand-eval-runner.cjs#L514676-L514682) | `ArrowFunctionExpression` | yes | `host, configJson, load2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684888-684894](../../../../../../reference/runtime/host-main.cjs#L684888-L684894) | 1 | 0 | 2 | 0 | 0 | 0 |
| [evaluation:514676-514682](../../../../../../reference/runtime/sand-eval-runner.cjs#L514676-L514682) | 1 | 0 | 2 | 0 | 0 | 0 |

### host:684888

Calls written directly in this body: `boxLoadMcpServers`, `host.loadMcpServers`.

SHA-256 of the source span: `bc85e57fcbe074fbe68d76f632db14ed4fe76fc229ce702c5891e3da45a26271`.

### evaluation:514676

Calls written directly in this body: `boxLoadMcpServers`, `host.loadMcpServers`.

SHA-256 of the source span: `bc85e57fcbe074fbe68d76f632db14ed4fe76fc229ce702c5891e3da45a26271`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
