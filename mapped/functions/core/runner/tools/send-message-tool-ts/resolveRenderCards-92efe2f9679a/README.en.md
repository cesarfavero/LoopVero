# `resolveRenderCards`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:760794-760811](../../../../../../../reference/runtime/host-main.cjs#L760794-L760811) | `FunctionDeclaration` | yes | `ctx, rawArgs, renderCards` |
| [evaluation:551609-551626](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551609-L551626) | `FunctionDeclaration` | yes | `ctx, rawArgs, renderCards` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:760794-760811](../../../../../../../reference/runtime/host-main.cjs#L760794-L760811) | 6 | 1 | 1 | 2 | 3 | 0 |
| [evaluation:551609-551626](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551609-L551626) | 6 | 1 | 1 | 2 | 3 | 0 |

### host:760794

Calls written directly in this body: `entries.push`, `logShimFiring`, `new SandToolInputError`, `renderCardIdLeniency.applied`, `renderCardShownError`, `renderCards.offered`, `renderCards.registry.isShown`, `renderCards.registry.lookup`, `unknownRenderCardError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `5571e352d4ee7f6f213d300b8cc4518a69f091a3930a7370cc8ccf7a3953ea59`.

### evaluation:551609

Calls written directly in this body: `entries.push`, `logShimFiring`, `new SandToolInputError`, `renderCardIdLeniency.applied`, `renderCardShownError`, `renderCards.offered`, `renderCards.registry.isShown`, `renderCards.registry.lookup`, `unknownRenderCardError`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `5571e352d4ee7f6f213d300b8cc4518a69f091a3930a7370cc8ccf7a3953ea59`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
