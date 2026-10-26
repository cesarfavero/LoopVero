# `withRecordedToolCallNames/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/tool-wrappers.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/tool-wrappers-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768979-768982](../../../../../../../../reference/runtime/host-main.cjs#L768979-L768982) | `ArrowFunctionExpression` | no | `ctx, interactionHandler, argsStream, meta3` |
| [evaluation:564579-564582](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564579-L564582) | `ArrowFunctionExpression` | no | `ctx, interactionHandler, argsStream, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768979-768982](../../../../../../../../reference/runtime/host-main.cjs#L768979-L768982) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564579-564582](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564579-L564582) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:768979

Calls written directly in this body: `record3`, `tool.execute`.

SHA-256 of the source span: `98ac11239b389a2cc513d73bf7cbbebf832888a4299b3c3e92ac9a655e764fb1`.

### evaluation:564579

Calls written directly in this body: `record4`, `tool.execute`.

SHA-256 of the source span: `306a821906a2b04f8c417cc6549a061226ac229e3f0be6fbd4a04fd2656daf84`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
