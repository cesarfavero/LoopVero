# `resolveSandUserComputer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/ports/user-computer.ts` · [Module README](../../../../../modules/core/ports/user-computer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742470-742497](../../../../../../reference/runtime/host-main.cjs#L742470-L742497) | `FunctionDeclaration` | no | `userComputers, machineId, scope` |
| [evaluation:479446-479473](../../../../../../reference/runtime/sand-eval-runner.cjs#L479446-L479473) | `FunctionDeclaration` | no | `userComputers, machineId, scope` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742470-742497](../../../../../../reference/runtime/host-main.cjs#L742470-L742497) | 5 | 0 | 0 | 1 | 4 | 0 |
| [evaluation:479446-479473](../../../../../../reference/runtime/sand-eval-runner.cjs#L479446-L479473) | 5 | 0 | 0 | 1 | 4 | 0 |

### host:742470

Calls written directly in this body: `machines.filter`, `new SandUserComputerResolutionError`, `userComputers.list`, `userComputers.resolve`.

Assignment or increment targets: `resolvedId`.

Explicit throw targets: `SandUserComputerResolutionError`.

SHA-256 of the source span: `c923ae8dc18a698c3f7d12cd9a88e26e667eac7ccb00e142970c97c8a519a81a`.

### evaluation:479446

Calls written directly in this body: `machines.filter`, `new SandUserComputerResolutionError`, `userComputers.list`, `userComputers.resolve`.

Assignment or increment targets: `resolvedId`.

Explicit throw targets: `SandUserComputerResolutionError`.

SHA-256 of the source span: `c923ae8dc18a698c3f7d12cd9a88e26e667eac7ccb00e142970c97c8a519a81a`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
