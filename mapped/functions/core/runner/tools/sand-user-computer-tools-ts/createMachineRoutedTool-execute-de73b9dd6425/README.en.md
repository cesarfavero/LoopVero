# `createMachineRoutedTool/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-user-computer-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-user-computer-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:778346-778375](../../../../../../../reference/runtime/host-main.cjs#L778346-L778375) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, argsStream, meta3` |
| [evaluation:578081-578110](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578081-L578110) | `ArrowFunctionExpression` | yes | `ctx, interactionHandler, argsStream, meta3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778346-778375](../../../../../../../reference/runtime/host-main.cjs#L778346-L778375) | 3 | 1 | 0 | 1 | 0 | 1 |
| [evaluation:578081-578110](../../../../../../../reference/runtime/sand-eval-runner.cjs#L578081-L578110) | 3 | 1 | 0 | 1 | 0 | 1 |

### host:778346

Calls written directly in this body: `.execute`, `Array.isArray`, `JSON.parse`, `resolveSandUserComputer`.

Assignment or increment targets: `machineId`, `rawArgs`, `targetsUserComputer`.

SHA-256 of the source span: `53a31b28a1b3664fb8ab2a0b6b88d187cf83f0b52a65e015510dc39e2b310747`.

### evaluation:578081

Calls written directly in this body: `.execute`, `Array.isArray`, `JSON.parse`, `resolveSandUserComputer`.

Assignment or increment targets: `machineId`, `rawArgs`, `targetsUserComputer`.

SHA-256 of the source span: `680ed570ded2ec219e461eaa44a8fd267410d0096a9c3ab0503419d96cad8b31`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
