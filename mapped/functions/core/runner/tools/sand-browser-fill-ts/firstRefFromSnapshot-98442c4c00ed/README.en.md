# `firstRefFromSnapshot`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-browser-fill.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-browser-fill-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:727120-727122](../../../../../../../reference/runtime/host-main.cjs#L727120-L727122) | `FunctionDeclaration` | no | `snapshot` |
| [evaluation:561731-561733](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561731-L561733) | `FunctionDeclaration` | no | `snapshot` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:727120-727122](../../../../../../../reference/runtime/host-main.cjs#L727120-L727122) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:561731-561733](../../../../../../../reference/runtime/sand-eval-runner.cjs#L561731-L561733) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:727120

Calls written directly in this body: `SNAPSHOT_REF_PATTERN.exec`.

SHA-256 of the source span: `fa7c9358a08cf54425792cb3a7eedc9f1fa8403458e739c0ca69d0ed6f40bbca`.

### evaluation:561731

Calls written directly in this body: `SNAPSHOT_REF_PATTERN.exec`.

SHA-256 of the source span: `fa7c9358a08cf54425792cb3a7eedc9f1fa8403458e739c0ca69d0ed6f40bbca`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
