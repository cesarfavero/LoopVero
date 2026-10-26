# `termSignalOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-errors.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700254-700256](../../../../../../reference/runtime/host-main.cjs#L700254-L700256) | `FunctionDeclaration` | no | `exitCode, exitSignal` |
| [evaluation:514035-514037](../../../../../../reference/runtime/sand-eval-runner.cjs#L514035-L514037) | `FunctionDeclaration` | no | `exitCode, exitSignal` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700254-700256](../../../../../../reference/runtime/host-main.cjs#L700254-L700256) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:514035-514037](../../../../../../reference/runtime/sand-eval-runner.cjs#L514035-L514037) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:700254

Calls written directly in this body: `signalOfBwrapExitCode`.

SHA-256 of the source span: `af36b0b6930e6107c4358260844c9c1b8bda987cf2eb76889c5c60d9ac7e352c`.

### evaluation:514035

Calls written directly in this body: `signalOfBwrapExitCode`.

SHA-256 of the source span: `af36b0b6930e6107c4358260844c9c1b8bda987cf2eb76889c5c60d9ac7e352c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
