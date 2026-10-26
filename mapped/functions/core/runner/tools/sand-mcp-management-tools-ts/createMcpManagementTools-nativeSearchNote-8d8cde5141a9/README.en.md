# `createMcpManagementTools/nativeSearchNote`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780203-780203](../../../../../../../reference/runtime/host-main.cjs#L780203-L780203) | `ArrowFunctionExpression` | no | `query2` |
| [evaluation:580448-580448](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580448-L580448) | `ArrowFunctionExpression` | no | `query2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780203-780203](../../../../../../../reference/runtime/host-main.cjs#L780203-L780203) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:780203 uses an implicit arrow-function return.
| [evaluation:580448-580448](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580448-L580448) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:580448 uses an implicit arrow-function return.

### host:780203

Calls written directly in this body: `nativeProviderSearchNote`, `options2.onePasswordConnectOffered`.

SHA-256 of the source span: `119c8591caa1086ba8f145d5f25f9a3fe02a5d5cb761e4d4e54540f879c3a8f8`.

### evaluation:580448

Calls written directly in this body: `nativeProviderSearchNote`, `options2.onePasswordConnectOffered`.

SHA-256 of the source span: `119c8591caa1086ba8f145d5f25f9a3fe02a5d5cb761e4d4e54540f879c3a8f8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
