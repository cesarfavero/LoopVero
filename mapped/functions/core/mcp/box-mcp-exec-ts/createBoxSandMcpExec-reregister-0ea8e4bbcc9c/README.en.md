# `createBoxSandMcpExec/reregister`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/mcp/box-mcp-exec.ts` · [Module README](../../../../../modules/core/mcp/box-mcp-exec-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684904-684918](../../../../../../reference/runtime/host-main.cjs#L684904-L684918) | `ArrowFunctionExpression` | yes | `host, serverIdentifier` |
| [evaluation:514692-514706](../../../../../../reference/runtime/sand-eval-runner.cjs#L514692-L514706) | `ArrowFunctionExpression` | yes | `host, serverIdentifier` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684904-684918](../../../../../../reference/runtime/host-main.cjs#L684904-L684918) | 4 | 0 | 3 | 4 | 0 | 0 |
| [evaluation:514692-514706](../../../../../../reference/runtime/sand-eval-runner.cjs#L514692-L514706) | 4 | 0 | 3 | 4 | 0 | 0 |

### host:684904

Calls written directly in this body: `configThatRestartsServer`, `configWithoutServer`, `loadOn`, `loadOptions`.

SHA-256 of the source span: `851f59463e8b09ffc576b8e150fff89cce28d37aea9c597eb4adb2ad237128f6`.

### evaluation:514692

Calls written directly in this body: `configThatRestartsServer`, `configWithoutServer`, `loadOn`, `loadOptions`.

SHA-256 of the source span: `851f59463e8b09ffc576b8e150fff89cce28d37aea9c597eb4adb2ad237128f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
