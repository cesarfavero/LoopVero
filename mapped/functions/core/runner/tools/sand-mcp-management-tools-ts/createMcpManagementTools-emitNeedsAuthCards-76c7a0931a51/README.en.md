# `createMcpManagementTools/emitNeedsAuthCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/sand-mcp-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-mcp-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:780331-780345](../../../../../../../reference/runtime/host-main.cjs#L780331-L780345) | `ArrowFunctionExpression` | yes | `before, after` |
| [evaluation:580576-580590](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580576-L580590) | `ArrowFunctionExpression` | yes | `before, after` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:780331-780345](../../../../../../../reference/runtime/host-main.cjs#L780331-L780345) | 2 | 1 | 1 | 2 | 0 | 0 |
| [evaluation:580576-580590](../../../../../../../reference/runtime/sand-eval-runner.cjs#L580576-L580590) | 2 | 1 | 1 | 2 | 0 | 0 |

### host:780331

Calls written directly in this body: `describeNewNeedsAuthCards`, `emitConnectorCard`, `newNeedsAuthRows`, `options2.connectCardFollowUp`, `outcomes.push`.

SHA-256 of the source span: `4e6746f90852eb9cb427558121f504dada87a977e0e1b841e1caf79fb20616fa`.

### evaluation:580576

Calls written directly in this body: `describeNewNeedsAuthCards`, `emitConnectorCard`, `newNeedsAuthRows`, `options2.connectCardFollowUp`, `outcomes.push`.

SHA-256 of the source span: `4e6746f90852eb9cb427558121f504dada87a977e0e1b841e1caf79fb20616fa`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
