# `normalizeSendToAgentArgs/pick2`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757288-757294](../../../../../../../reference/runtime/host-main.cjs#L757288-L757294) | `ArrowFunctionExpression` | no | `canonical, aliases` |
| [evaluation:543311-543317](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543311-L543317) | `ArrowFunctionExpression` | no | `canonical, aliases` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757288-757294](../../../../../../../reference/runtime/host-main.cjs#L757288-L757294) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:543311-543317](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543311-L543317) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:757288

Calls written directly in this body: `aliases.find`, `aliasesUsed.push`.

SHA-256 of the source span: `0a8ef70223e2a3fe9549a765a66dfdc681c83007b98b9ae7198c3f510eeb9efc`.

### evaluation:543311

Calls written directly in this body: `aliases.find`, `aliasesUsed.push`.

SHA-256 of the source span: `0a8ef70223e2a3fe9549a765a66dfdc681c83007b98b9ae7198c3f510eeb9efc`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
