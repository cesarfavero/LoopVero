# `playwrightRunCodeSuccessMeter`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-meter.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-meter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742514-742523](../../../../../../reference/runtime/host-main.cjs#L742514-L742523) | `FunctionDeclaration` | no | `success2` |
| [evaluation:479686-479695](../../../../../../reference/runtime/sand-eval-runner.cjs#L479686-L479695) | `FunctionDeclaration` | no | `success2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742514-742523](../../../../../../reference/runtime/host-main.cjs#L742514-L742523) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:479686-479695](../../../../../../reference/runtime/sand-eval-runner.cjs#L479686-L479695) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:742514

Calls written directly in this body: `meterOf`, `numberOf`.

SHA-256 of the source span: `606f56ae8a3bbe78d7123af5c116082982282c9b692e2ffa3a20087402751ea3`.

### evaluation:479686

Calls written directly in this body: `meterOf`, `numberOf`.

SHA-256 of the source span: `606f56ae8a3bbe78d7123af5c116082982282c9b692e2ffa3a20087402751ea3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
