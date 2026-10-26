# `defineZod4CommunicateTool/coerce3`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/communicate-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/communicate-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:725115-725118](../../../../../../../reference/runtime/host-main.cjs#L725115-L725118) | `ArrowFunctionExpression` | no | `raw` |
| [evaluation:480086-480089](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480086-L480089) | `ArrowFunctionExpression` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:725115-725118](../../../../../../../reference/runtime/host-main.cjs#L725115-L725118) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480086-480089](../../../../../../../reference/runtime/sand-eval-runner.cjs#L480086-L480089) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:725115

Calls written directly in this body: `coerceToolArgsToJsonSchema`, `toJSONSchema`.

Assignment or increment targets: `jsonSchema3`.

SHA-256 of the source span: `0872a6700d82abd3666cbf3eeaebdb235d5d49e7ca7eac0b63949b977fc76a97`.

### evaluation:480086

Calls written directly in this body: `coerceToolArgsToJsonSchema`, `toJSONSchema`.

Assignment or increment targets: `jsonSchema3`.

SHA-256 of the source span: `0872a6700d82abd3666cbf3eeaebdb235d5d49e7ca7eac0b63949b977fc76a97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
