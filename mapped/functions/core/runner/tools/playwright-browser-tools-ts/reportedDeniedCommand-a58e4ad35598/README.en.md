# `reportedDeniedCommand`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750664-750667](../../../../../../../reference/runtime/host-main.cjs#L750664-L750667) | `FunctionDeclaration` | no | `value` |
| [evaluation:523515-523518](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523515-L523518) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750664-750667](../../../../../../../reference/runtime/host-main.cjs#L750664-L750667) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523515-523518](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523515-L523518) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750664

Calls written directly in this body: `brandLiteralEnum`, `brandedErrorClass`, `reportedDeniedCommandSchema.safeParse`.

SHA-256 of the source span: `bc4d3c1b9b1a70f9d397c45a154ec8ec1decec3f9776b21972627fd6ba9aee30`.

### evaluation:523515

Calls written directly in this body: `brandLiteralEnum`, `brandedErrorClass`, `reportedDeniedCommandSchema.safeParse`.

SHA-256 of the source span: `b8e64ef2cd7ff8a86d9eb6677e7eaa7092e19142ec6b903263bdea35968790b3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
