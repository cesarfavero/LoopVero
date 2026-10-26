# `resolveSendToAgentImages`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/sand-agent-management-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-agent-management-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:757370-757379](../../../../../../../reference/runtime/host-main.cjs#L757370-L757379) | `FunctionDeclaration` | yes | `ctx, images, deps` |
| [evaluation:543393-543402](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543393-L543402) | `FunctionDeclaration` | yes | `ctx, images, deps` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:757370-757379](../../../../../../../reference/runtime/host-main.cjs#L757370-L757379) | 3 | 1 | 2 | 1 | 0 | 0 |
| [evaluation:543393-543402](../../../../../../../reference/runtime/sand-eval-runner.cjs#L543393-L543402) | 3 | 1 | 2 | 1 | 0 | 0 |

### host:757370

Calls written directly in this body: `deps.resolveImageSource`, `resolved.push`, `sendToAgentImageDimensions`.

SHA-256 of the source span: `cd1da840368ebed31c7657ea21b936423b1e744e829abaebd893b21a66cdb20b`.

### evaluation:543393

Calls written directly in this body: `deps.resolveImageSource`, `resolved.push`, `sendToAgentImageDimensions`.

SHA-256 of the source span: `cd1da840368ebed31c7657ea21b936423b1e744e829abaebd893b21a66cdb20b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
