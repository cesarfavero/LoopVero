# `createListSectionsTool`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757443-757457](../../../../../../../reference/runtime/host-main.cjs#L757443-L757457) | `FunctionDeclaration` | no | `management` |
| [evaluation:543466-543480](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543466-L543480) | `FunctionDeclaration` | no | `management` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757443-757457](../../../../../../../reference/runtime/host-main.cjs#L757443-L757457) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:543466-543480](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543466-L543480) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:757443

Calls written directly in this body: `defineCommunicateTool`, `external_exports2.object`.

SHA-256 of the source span: `c551b496968273280e18ee34dcc02f6dbd351c7036f6e4dd2f3bd40cf016cde2`.

### evaluation:543466

Calls written directly in this body: `defineCommunicateTool`, `external_exports3.object`.

SHA-256 of the source span: `e06146adc50281e95476e24912f61c4a837a26579ec064ada6164cb7b467dd97`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
