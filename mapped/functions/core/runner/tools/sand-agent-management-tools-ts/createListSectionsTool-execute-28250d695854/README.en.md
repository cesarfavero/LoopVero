# `createListSectionsTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757449-757455](../../../../../../../reference/runtime/host-main.cjs#L757449-L757455) | `ArrowFunctionExpression` | yes | `_ctx, _args, m2` |
| [evaluation:543472-543478](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543472-L543478) | `ArrowFunctionExpression` | yes | `_ctx, _args, m2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757449-757455](../../../../../../../reference/runtime/host-main.cjs#L757449-L757455) | 1 | 0 | 1 | 2 | 0 | 0 |
| [evaluation:543472-543478](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543472-L543478) | 1 | 0 | 1 | 2 | 0 | 0 |

### host:757449

Calls written directly in this body: `.join`, `m2.listSections`, `sections.map`.

SHA-256 of the source span: `a1c03aec0f86e3e86de6513d299aa768579aa7f65bc423edf2863e26a0637d23`.

### evaluation:543472

Calls written directly in this body: `.join`, `m2.listSections`, `sections.map`.

SHA-256 of the source span: `a1c03aec0f86e3e86de6513d299aa768579aa7f65bc423edf2863e26a0637d23`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
