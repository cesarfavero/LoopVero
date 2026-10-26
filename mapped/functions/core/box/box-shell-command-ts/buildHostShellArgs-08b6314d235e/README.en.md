# `buildHostShellArgs`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-shell-command.ts` · [Module README](../../../../../modules/core/box/box-shell-command-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:546722-546748](../../../../../../reference/runtime/host-main.cjs#L546722-L546748) | `FunctionDeclaration` | no | `{   command,   name: name18,   workingDirectory,   toolCallId,   timeoutMs }` |
| [evaluation:490785-490811](../../../../../../reference/runtime/sand-eval-runner.cjs#L490785-L490811) | `FunctionDeclaration` | no | `{   command,   name: name18,   workingDirectory,   toolCallId,   timeoutMs }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:546722-546748](../../../../../../reference/runtime/host-main.cjs#L546722-L546748) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:490785-490811](../../../../../../reference/runtime/sand-eval-runner.cjs#L490785-L490811) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:546722

Calls written directly in this body: `new ShellArgs`, `new ShellCommandParsingResult`, `new ShellCommandParsingResult_ExecutableCommand`.

SHA-256 of the source span: `887c75f683889a88ea10567a939edf441031bce7ae34c11086286728f116d6ec`.

### evaluation:490785

Calls written directly in this body: `new ShellArgs`, `new ShellCommandParsingResult`, `new ShellCommandParsingResult_ExecutableCommand`.

SHA-256 of the source span: `887c75f683889a88ea10567a939edf441031bce7ae34c11086286728f116d6ec`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
