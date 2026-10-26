# `createMcpManagementTools/lastListedAccount/isAccount`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780283-780283](../../../../../../../reference/runtime/host-main.cjs#L780283-L780283) | `ArrowFunctionExpression` | no | `rowAccountKey` |
| [evaluation:580528-580528](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580528-L580528) | `ArrowFunctionExpression` | no | `rowAccountKey` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780283-780283](../../../../../../../reference/runtime/host-main.cjs#L780283-L780283) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:780283 uses an implicit arrow-function return.
| [evaluation:580528-580528](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580528-L580528) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:580528 uses an implicit arrow-function return.

### host:780283

Calls written directly in this body: `normalizeMcpAccountLabel`.

SHA-256 of the source span: `75c62e6953364ea5a5539080c7e1abeedfebbe3d64a9c8bf396689bdddfc774b`.

### evaluation:580528

Calls written directly in this body: `normalizeMcpAccountLabel`.

SHA-256 of the source span: `75c62e6953364ea5a5539080c7e1abeedfebbe3d64a9c8bf396689bdddfc774b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
