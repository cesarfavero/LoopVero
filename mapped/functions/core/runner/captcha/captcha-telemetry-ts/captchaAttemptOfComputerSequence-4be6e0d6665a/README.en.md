# `captchaAttemptOfComputerSequence`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/observability/README.en.md).

**Module:** `core/runner/captcha/captcha-telemetry.ts` · [Module README](../../../../../../modules/core/runner/captcha/captcha-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:699012-699025](../../../../../../../reference/runtime/host-main.cjs#L699012-L699025) | `FunctionDeclaration` | no | `sequence` |
| [evaluation:489600-489613](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489600-L489613) | `FunctionDeclaration` | no | `sequence` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699012-699025](../../../../../../../reference/runtime/host-main.cjs#L699012-L699025) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:489600-489613](../../../../../../../reference/runtime/sand-eval-runner.cjs#L489600-L489613) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:699012

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `holdMs`, `holds`, `pointer`.

SHA-256 of the source span: `1b15aca067d3298dfb58dc990bda20cd743c3b2c5351d779df8e257b748c2ed2`.

### evaluation:489600

Calls written directly in this body: no calls identifiable by name.

Assignment or increment targets: `holdMs`, `holds`, `pointer`.

SHA-256 of the source span: `1b15aca067d3298dfb58dc990bda20cd743c3b2c5351d779df8e257b748c2ed2`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
