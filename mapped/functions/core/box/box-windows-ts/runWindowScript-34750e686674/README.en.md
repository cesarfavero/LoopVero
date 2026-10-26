# `runWindowScript`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `core/box/box-windows.ts` · [Module README](../../../../../modules/core/box/box-windows-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553961-554005](../../../../../../reference/runtime/host-main.cjs#L553961-L554005) | `FunctionDeclaration` | yes | `ctx, accessor, label, windowIndex, opts = {}` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553961-554005](../../../../../../reference/runtime/host-main.cjs#L553961-L554005) | 8 | 0 | 1 | 1 | 7 | 0 |

### host:553961

Calls written directly in this body: `BOX_FILE_PATH_PATTERN.test`, `SAND_BOX_WINDOW_OWNER_TOKEN_PATTERN.test`, `accessor.get`, `buildHostShellArgs`, `isPrimaryWindowIndex`, `new SandBoxNoMonitorAvailableError`, `new SandBoxWindowBusyError`, `new SandBoxWindowError`, `new SandBoxWindowSeatStaleError`, `reportHostDiagnostic`, `shell.execute`, `windowScriptCommand`.

Explicit throw targets: `SandBoxNoMonitorAvailableError`, `SandBoxWindowBusyError`, `SandBoxWindowError`, `SandBoxWindowSeatStaleError`.

SHA-256 of the source span: `447b89a1360da4f75449bfea6de09f70095e32f4d8575faf6b5a799ffed3f2f9`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
