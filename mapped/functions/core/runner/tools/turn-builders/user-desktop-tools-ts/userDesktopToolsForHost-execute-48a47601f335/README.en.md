# `userDesktopToolsForHost/execute`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/user-desktop-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/user-desktop-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:781839-781856](../../../../../../../../reference/runtime/host-main.cjs#L781839-L781856) | `FunctionExpression` | yes | `ctx, args` |
| [evaluation:582184-582201](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582184-L582201) | `FunctionExpression` | yes | `ctx, args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:781839-781856](../../../../../../../../reference/runtime/host-main.cjs#L781839-L781856) | 2 | 0 | 1 | 3 | 0 | 0 |
| [evaluation:582184-582201](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L582184-L582201) | 2 | 0 | 1 | 3 | 0 | 0 |

### host:781839

Calls written directly in this body: `.map`, `Object.entries`, `Object.fromEntries`, `host.getTranscriptId`, `port.run`, `refusal3`, `userDesktopToolResult`.

SHA-256 of the source span: `d99db4018e1c9ee459b3f91a5a6d2bc4fd9cc9970ca4098395669dc431f108e7`.

### evaluation:582184

Calls written directly in this body: `.map`, `Object.entries`, `Object.fromEntries`, `host.getTranscriptId`, `port.run`, `refusal3`, `userDesktopToolResult`.

SHA-256 of the source span: `d99db4018e1c9ee459b3f91a5a6d2bc4fd9cc9970ca4098395669dc431f108e7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
