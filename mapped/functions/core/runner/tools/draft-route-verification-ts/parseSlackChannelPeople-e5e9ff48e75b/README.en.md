# `parseSlackChannelPeople`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/draft-route-verification.ts` · [Module README](../../../../../../modules/core/runner/tools/draft-route-verification-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:735148-735162](../../../../../../../reference/runtime/host-main.cjs#L735148-L735162) | `FunctionDeclaration` | no | `channelMessages` |
| [evaluation:540722-540736](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540722-L540736) | `FunctionDeclaration` | no | `channelMessages` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:735148-735162](../../../../../../../reference/runtime/host-main.cjs#L735148-L735162) | 3 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:540722-540736](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540722-L540736) | 3 | 1 | 0 | 1 | 0 | 0 |

### host:735148

Calls written directly in this body: `/^([^:<>]+):/.exec`, `/^([^<>]+?)\s*<([^\s<>]+@[^\s<>]+)>:/.exec`, `[computed].trim`, `channelMessages.split`, `line.trim`, `people.push`, `trimmed.startsWith`.

SHA-256 of the source span: `6aafbd4e0e2df9915d89bfa1cc842bf458bb7b3386a98e810f63c0b0602a25c7`.

### evaluation:540722

Calls written directly in this body: `/^([^:<>]+):/.exec`, `/^([^<>]+?)\s*<([^\s<>]+@[^\s<>]+)>:/.exec`, `[computed].trim`, `channelMessages.split`, `line.trim`, `people.push`, `trimmed.startsWith`.

SHA-256 of the source span: `6aafbd4e0e2df9915d89bfa1cc842bf458bb7b3386a98e810f63c0b0602a25c7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
