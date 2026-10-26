# `wrapToolCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777192-777194](../../../../../../../reference/runtime/host-main.cjs#L777192-L777194) | `FunctionDeclaration` | no | `value` |
| [evaluation:576837-576839](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576837-L576839) | `FunctionDeclaration` | no | `value` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777192-777194](../../../../../../../reference/runtime/host-main.cjs#L777192-L777194) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:576837-576839](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576837-L576839) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:777192

Calls written directly in this body: `new ToolCall`.

SHA-256 of the source span: `e8a2fe76529b73b89641425d2b7c60e9b855349efc0ad51aed7834f0091e49a4`.

### evaluation:576837

Calls written directly in this body: `new ToolCall`.

SHA-256 of the source span: `e8a2fe76529b73b89641425d2b7c60e9b855349efc0ad51aed7834f0091e49a4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
