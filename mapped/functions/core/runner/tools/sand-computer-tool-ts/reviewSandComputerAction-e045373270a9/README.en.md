# `reviewSandComputerAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777410-777416](../../../../../../../reference/runtime/host-main.cjs#L777410-L777416) | `FunctionDeclaration` | yes | `resourceAccessor, config2, args` |
| [evaluation:577055-577061](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577055-L577061) | `FunctionDeclaration` | yes | `resourceAccessor, config2, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777410-777416](../../../../../../../reference/runtime/host-main.cjs#L777410-L777416) | 0 | 0 | 1 | 0 | 0 | 0 |
| [evaluation:577055-577061](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577055-L577061) | 0 | 0 | 1 | 0 | 0 | 0 |

### host:777410

Calls written directly in this body: `computerAutoReviewOptions`, `runSandComputerAutoReviewPreflight`.

SHA-256 of the source span: `5fdd6e9325adf930bf95235cf9862b4e0734edd860ca2dca9b74ceba58d36b69`.

### evaluation:577055

Calls written directly in this body: `computerAutoReviewOptions`, `runSandComputerAutoReviewPreflight`.

SHA-256 of the source span: `5fdd6e9325adf930bf95235cf9862b4e0734edd860ca2dca9b74ceba58d36b69`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
