# `labelDisambiguationFor`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727224-727231](../../../../../../../reference/runtime/host-main.cjs#L727224-L727231) | `FunctionDeclaration` | no | `playwright2, target` |
| [evaluation:561741-561748](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561741-L561748) | `FunctionDeclaration` | no | `playwright2, target` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727224-727231](../../../../../../../reference/runtime/host-main.cjs#L727224-L727231) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:561741-561748](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561741-L561748) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:727224

Calls written directly in this body: `target.frame.trim`.

SHA-256 of the source span: `369d93ef3b7f3cc0830f2853dbd23023fadb9fad8f9860c2cffa128481a834c3`.

### evaluation:561741

Calls written directly in this body: `target.frame.trim`.

SHA-256 of the source span: `369d93ef3b7f3cc0830f2853dbd23023fadb9fad8f9860c2cffa128481a834c3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
