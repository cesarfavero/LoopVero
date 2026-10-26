# `widgetIntroDeferringTo`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/send-message-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/send-message-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:761133-761135](../../../../../../../reference/runtime/host-main.cjs#L761133-L761135) | `FunctionDeclaration` | no | `headings` |
| [evaluation:551948-551950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551948-L551950) | `FunctionDeclaration` | no | `headings` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761133-761135](../../../../../../../reference/runtime/host-main.cjs#L761133-L761135) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:551948-551950](../../../../../../../reference/runtime/sand-eval-runner.cjs#L551948-L551950) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761133

Calls written directly in this body: `headings.widget.join`.

SHA-256 of the source span: `60693c27185154d421e7a49574498d80ccfa1cf31acdc59dcbcae04d86c1d35b`.

### evaluation:551948

Calls written directly in this body: `headings.widget.join`.

SHA-256 of the source span: `60693c27185154d421e7a49574498d80ccfa1cf31acdc59dcbcae04d86c1d35b`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
