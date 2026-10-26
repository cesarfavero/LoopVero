# `playwrightErrorHead`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/mcp/playwright-run-code-errors.ts` · [Module README](../../../../../modules/core/mcp/playwright-run-code-errors-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:700135-700143](../../../../../../reference/runtime/host-main.cjs#L700135-L700143) | `FunctionDeclaration` | no | `message` |
| [evaluation:513913-513921](../../../../../../reference/runtime/sand-eval-runner.cjs#L513913-L513921) | `FunctionDeclaration` | no | `message` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:700135-700143](../../../../../../reference/runtime/host-main.cjs#L700135-L700143) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:513913-513921](../../../../../../reference/runtime/sand-eval-runner.cjs#L513913-L513921) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:700135

Calls written directly in this body: `PLAYWRIGHT_ERROR_HEAD.exec`, `message.split`.

SHA-256 of the source span: `cf694e37db1e022e4ded9c42f8fafff46adca5b4c691980b0214ae0b5efa2c8f`.

### evaluation:513913

Calls written directly in this body: `PLAYWRIGHT_ERROR_HEAD.exec`, `message.split`.

SHA-256 of the source span: `cf694e37db1e022e4ded9c42f8fafff46adca5b4c691980b0214ae0b5efa2c8f`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
