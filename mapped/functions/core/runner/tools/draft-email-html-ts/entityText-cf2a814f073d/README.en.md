# `entityText`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-email-html.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-email-html-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:732573-732577](../../../../../../../reference/runtime/host-main.cjs#L732573-L732577) | `FunctionDeclaration` | no | `name18` |
| [evaluation:539585-539589](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539585-L539589) | `FunctionDeclaration` | no | `name18` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:732573-732577](../../../../../../../reference/runtime/host-main.cjs#L732573-L732577) | 3 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:539585-539589](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539585-L539589) | 3 | 0 | 0 | 2 | 0 | 0 |

### host:732573

Calls written directly in this body: `Number`, `String.fromCodePoint`, `name18.slice`, `name18.startsWith`, `parseInt`.

SHA-256 of the source span: `72da96ba4defa8c24b9399171b3ad3d70d3ae1d3673e4c686de7c57442913f74`.

### evaluation:539585

Calls written directly in this body: `Number`, `String.fromCodePoint`, `name18.slice`, `name18.startsWith`, `parseInt`.

SHA-256 of the source span: `72da96ba4defa8c24b9399171b3ad3d70d3ae1d3673e4c686de7c57442913f74`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
