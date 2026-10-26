# `recordComputerSettle`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:776882-776887](../../../../../../../reference/runtime/host-main.cjs#L776882-L776887) | `FunctionDeclaration` | no | `ctx, harness, args, result` |
| [evaluation:576527-576532](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576527-L576532) | `FunctionDeclaration` | no | `ctx, harness, args, result` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:776882-776887](../../../../../../../reference/runtime/host-main.cjs#L776882-L776887) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:576527-576532](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576527-L576532) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:776882

Calls written directly in this body: `args.actions.some`, `settleDurations.histogram`.

SHA-256 of the source span: `5f8fdf8468b97c1ba5cd811394ef9c05e46c2789b80cd197c428a74d33386fb5`.

### evaluation:576527

Calls written directly in this body: `args.actions.some`, `settleDurations.histogram`.

SHA-256 of the source span: `5f8fdf8468b97c1ba5cd811394ef9c05e46c2789b80cd197c428a74d33386fb5`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
