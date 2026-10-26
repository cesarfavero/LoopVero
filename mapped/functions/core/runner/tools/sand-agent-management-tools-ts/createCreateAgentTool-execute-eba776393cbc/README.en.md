# `createCreateAgentTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757464-757472](../../../../../../../reference/runtime/host-main.cjs#L757464-L757472) | `ArrowFunctionExpression` | yes | `_ctx, args, m2` |
| [evaluation:543487-543495](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543487-L543495) | `ArrowFunctionExpression` | yes | `_ctx, args, m2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757464-757472](../../../../../../../reference/runtime/host-main.cjs#L757464-L757472) | 2 | 0 | 1 | 1 | 0 | 0 |
| [evaluation:543487-543495](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543487-L543495) | 2 | 0 | 1 | 1 | 0 | 0 |

### host:757464

Calls written directly in this body: `m2.create`.

SHA-256 of the source span: `85b1c575056821e7704bc097d3184bc041188bfc1d855cb6f447a3f030afb7b8`.

### evaluation:543487

Calls written directly in this body: `m2.create`.

SHA-256 of the source span: `85b1c575056821e7704bc097d3184bc041188bfc1d855cb6f447a3f030afb7b8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
