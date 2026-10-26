# `meterOf`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-meter.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-meter-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742508-742513](../../../../../../reference/runtime/host-main.cjs#L742508-L742513) | `FunctionDeclaration` | no | `value` |
| [evaluation:479676-479681](../../../../../../reference/runtime/sand-eval-runner.cjs#L479676-L479681) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742508-742513](../../../../../../reference/runtime/host-main.cjs#L742508-L742513) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:479676-479681](../../../../../../reference/runtime/sand-eval-runner.cjs#L479676-L479681) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:742508

Calls written directly in this body: `isCount3`, `isUnknownRecord2`.

SHA-256 of the source span: `c243a2a728089b51fde62513ada60b2ab2602e4e4a3ed6c0bb4692caa02e8861`.

### evaluation:479676

Calls written directly in this body: `isCount`, `isUnknownRecord2`.

SHA-256 of the source span: `7a20258363faa6387094a2fefd6140b84c1f7adb75169884db14cff21b436cc8`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
