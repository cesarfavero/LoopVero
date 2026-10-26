# `toAction`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/runner/tools/sand-computer-tool.ts` · [Module README](../../../../../../modules/core/runner/tools/sand-computer-tool-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:777120-777191](../../../../../../../reference/runtime/host-main.cjs#L777120-L777191) | `FunctionDeclaration` | no | `args` |
| [evaluation:576765-576836](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576765-L576836) | `FunctionDeclaration` | no | `args` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:777120-777191](../../../../../../../reference/runtime/host-main.cjs#L777120-L777191) | 9 | 0 | 0 | 8 | 1 | 0 |
| [evaluation:576765-576836](../../../../../../../reference/runtime/sand-eval-runner.cjs#L576765-L576836) | 9 | 0 | 0 | 8 | 1 | 0 |

### host:777120

Calls written directly in this body: `coordinate`, `dragPath`, `new ClickAction`, `new ComputerUseAction`, `new DragAction`, `new KeyAction`, `new MouseMoveAction`, `new SandToolInputError`, `new ScreenshotAction`, `new ScrollAction`, `new TypeAction`, `new WaitAction`, `path33.map`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `efa57bc6580df185ea9ae1ac220fc59fba037dc9c240002fef1eb8cecea93414`.

### evaluation:576765

Calls written directly in this body: `coordinate`, `dragPath`, `new ClickAction`, `new ComputerUseAction`, `new DragAction`, `new KeyAction`, `new MouseMoveAction`, `new SandToolInputError`, `new ScreenshotAction`, `new ScrollAction`, `new TypeAction`, `new WaitAction`, `path33.map`.

Explicit throw targets: `SandToolInputError`.

SHA-256 of the source span: `efa57bc6580df185ea9ae1ac220fc59fba037dc9c240002fef1eb8cecea93414`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
