# `_SandAgentRunner.constructor/constructRunner`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/sand-agent-runner.ts` · [Module README](../../../../../modules/core/runner/sand-agent-runner-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:593579-593655](../../../../../../reference/runtime/sand-eval-runner.cjs#L593579-L593655) | `ArrowFunctionExpression` | no | `childOptions` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:593579-593655](../../../../../../reference/runtime/sand-eval-runner.cjs#L593579-L593655) | 31 | 0 | 0 | 1 | 0 | 0 |

### evaluation:593579

Calls written directly in this body: `new _SandAgentRunner`, `parentHostOptionsForSubagent`, `resolveSandAgentKind`, `sandAgentKindReadsAgentEmail`, `secureValuesForChildRunner`, `subagentChannelPorts`.

Assignment or increment targets: `inheritedOptions`.

SHA-256 of the source span: `fbf6626116d169c5340bf63b604a2d72236fca09afacca8494bc13d6c9f6345e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
