# `extendAgentTools/omit2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tool-policy/agent-tools.ts` · [Module README](../../../../../../modules/core/runner/tool-policy/agent-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:756635-756638](../../../../../../../reference/runtime/host-main.cjs#L756635-L756638) | `ArrowFunctionExpression` | no | `tool, reason` |
| [evaluation:542555-542558](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542555-L542558) | `ArrowFunctionExpression` | no | `tool, reason` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:756635-756638](../../../../../../../reference/runtime/host-main.cjs#L756635-L756638) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:542555-542558](../../../../../../../reference/runtime/sand-eval-runner.cjs#L542555-L542558) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:756635

Calls written directly in this body: `offered.delete`, `omitted.set`.

SHA-256 of the source span: `8d050f772c2b39abf4fc7e7214ea256952f0fa723294b3f5d7ae9d6a740ca60e`.

### evaluation:542555

Calls written directly in this body: `offered.delete`, `omitted.set`.

SHA-256 of the source span: `8d050f772c2b39abf4fc7e7214ea256952f0fa723294b3f5d7ae9d6a740ca60e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
