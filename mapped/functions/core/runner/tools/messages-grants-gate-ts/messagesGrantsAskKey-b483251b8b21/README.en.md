# `messagesGrantsAskKey`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/messages-grants-gate.ts` · [Module README](../../../../../../modules/core/runner/tools/messages-grants-gate-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777829-777833](../../../../../../../reference/runtime/host-main.cjs#L777829-L777833) | `FunctionDeclaration` | no | `ctx` |
| [evaluation:577564-577568](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577564-L577568) | `FunctionDeclaration` | no | `ctx` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777829-777833](../../../../../../../reference/runtime/host-main.cjs#L777829-L777833) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:577564-577568](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577564-L577568) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:777829

Calls written directly in this body: `ctx.get`.

SHA-256 of the source span: `595174a9c9bdf1bbc721e8d417d915729948ee811ebbcb3642b6c91499cce21e`.

### evaluation:577564

Calls written directly in this body: `ctx.get`.

SHA-256 of the source span: `7e66dab28b41beea9e3bfb7c4362e230b25507d8868f27d6effcc634c5359269`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
