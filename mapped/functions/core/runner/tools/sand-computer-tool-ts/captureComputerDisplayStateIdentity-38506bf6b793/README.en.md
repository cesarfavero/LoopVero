# `captureComputerDisplayStateIdentity`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777352-777397](../../../../../../../reference/runtime/host-main.cjs#L777352-L777397) | `FunctionDeclaration` | yes | `ctx, resourceAccessor, toolCallId, resolveDisplayNumber` |
| [evaluation:576997-577042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576997-L577042) | `FunctionDeclaration` | yes | `ctx, resourceAccessor, toolCallId, resolveDisplayNumber` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777352-777397](../../../../../../../reference/runtime/host-main.cjs#L777352-L777397) | 4 | 0 | 2 | 2 | 4 | 2 |
| [evaluation:576997-577042](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576997-L577042) | 4 | 0 | 2 | 2 | 4 | 2 |

### host:777352

Calls written directly in this body: `.execute`, `buildHostShellArgs`, `classifyNavigationProbeResult`, `computeSandComputerPageStateIdentity`, `navigationProbeCommand`, `new SandComputerAutoReviewBlockedError`, `resolveDisplayNumber`, `resourceAccessor.get`.

Assignment or increment targets: `displayNumber`, `result`.

Explicit throw targets: `SandComputerAutoReviewBlockedError`.

SHA-256 of the source span: `e56f6113caf41ef4ac1a15c4585170471a3ccd629cb44d426b3f64da0fbff393`.

### evaluation:576997

Calls written directly in this body: `.execute`, `buildHostShellArgs`, `classifyNavigationProbeResult`, `computeSandComputerPageStateIdentity`, `navigationProbeCommand`, `new SandComputerAutoReviewBlockedError`, `resolveDisplayNumber`, `resourceAccessor.get`.

Assignment or increment targets: `displayNumber`, `result`.

Explicit throw targets: `SandComputerAutoReviewBlockedError`.

SHA-256 of the source span: `e56f6113caf41ef4ac1a15c4585170471a3ccd629cb44d426b3f64da0fbff393`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
