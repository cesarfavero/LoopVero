# `recordSteps`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/browser/playwright-box-timing.ts` · [Module README](../../../../../../../modules/core/runner/tools/browser/playwright-box-timing-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:743263-743286](../../../../../../../../reference/runtime/host-main.cjs#L743263-L743286) | `FunctionDeclaration` | no | `runtimeCtx, steps, runtimeStart, runtimeEnd` |
| [evaluation:516114-516137](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516114-L516137) | `FunctionDeclaration` | no | `runtimeCtx, steps, runtimeStart, runtimeEnd` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:743263-743286](../../../../../../../../reference/runtime/host-main.cjs#L743263-L743286) | 5 | 2 | 0 | 0 | 0 | 0 |
| [evaluation:516114-516137](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L516114-L516137) | 5 | 2 | 0 | 0 | 0 | 0 |

### host:743263

Calls written directly in this body: `open13.at`, `open13.pop`, `open13.push`, `recordComputerUseSpanAt`, `registrableHolderSite`.

SHA-256 of the source span: `43f44b89313c16ee9b7d36a4faaa89a85b3582fa791ce5229a7c00233abe8e77`.

### evaluation:516114

Calls written directly in this body: `open4.at`, `open4.pop`, `open4.push`, `recordComputerUseSpanAt`, `registrableHolderSite`.

SHA-256 of the source span: `464e0751cf86cd78ea3e2a0acce73036f584ef2fdb8f74c853af152169549035`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
