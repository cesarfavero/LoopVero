# `sandMaxBlockUntilMs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/integrations/README.en.md).

**Module:** `core/runner/tools/mcp-meta-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/mcp-meta-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761838-761843](../../../../../../../reference/runtime/host-main.cjs#L761838-L761843) | `FunctionDeclaration` | no | `isComputerUseSubagent` |
| [evaluation:554104-554109](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554104-L554109) | `FunctionDeclaration` | no | `isComputerUseSubagent` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761838-761843](../../../../../../../reference/runtime/host-main.cjs#L761838-L761843) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554104-554109](../../../../../../../reference/runtime/sand-eval-runner.cjs#L554104-L554109) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761838

Calls written directly in this body: `Math.min`, `sandToolCallExecutionTimeoutMs`.

SHA-256 of the source span: `e808144fd84945c47ef6bd3ece99051c54d7da6b0729f8af24bb288c2c651a42`.

### evaluation:554104

Calls written directly in this body: `Math.min`, `sandToolCallExecutionTimeoutMs`.

SHA-256 of the source span: `e808144fd84945c47ef6bd3ece99051c54d7da6b0729f8af24bb288c2c651a42`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
