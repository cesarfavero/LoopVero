# `pinsToPage`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/playwright-browser-tools.ts` · [Module README](../../../../../../modules/core/runner/tools/playwright-browser-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:750565-750567](../../../../../../../reference/runtime/host-main.cjs#L750565-L750567) | `FunctionDeclaration` | no | `name18, args` |
| [evaluation:523416-523418](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523416-L523418) | `FunctionDeclaration` | no | `name18, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:750565-750567](../../../../../../../reference/runtime/host-main.cjs#L750565-L750567) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:523416-523418](../../../../../../../reference/runtime/sand-eval-runner.cjs#L523416-L523418) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:750565

Calls written directly in this body: `isAbsoluteHttpUrl`.

SHA-256 of the source span: `52d603dcb24d5f28d488e0b90fc99c81523ebd51090524df6f2947ef257c361e`.

### evaluation:523416

Calls written directly in this body: `isAbsoluteHttpUrl`.

SHA-256 of the source span: `52d603dcb24d5f28d488e0b90fc99c81523ebd51090524df6f2947ef257c361e`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
