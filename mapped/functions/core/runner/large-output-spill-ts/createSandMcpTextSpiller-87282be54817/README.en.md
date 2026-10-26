# `createSandMcpTextSpiller`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/turns/README.en.md).

**Module:** `core/runner/large-output-spill.ts` · [Module README](../../../../../modules/core/runner/large-output-spill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:515779-515801](../../../../../../reference/runtime/sand-eval-runner.cjs#L515779-L515801) | `FunctionDeclaration` | no | `opts` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:515779-515801](../../../../../../reference/runtime/sand-eval-runner.cjs#L515779-L515801) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:515779

Calls written directly in this body: `createSandAgentToolsTextWriter`.

SHA-256 of the source span: `522645a1c042a5f21830d0e43fab3f53301f1b667647df18f1f54fa972eab25d`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
