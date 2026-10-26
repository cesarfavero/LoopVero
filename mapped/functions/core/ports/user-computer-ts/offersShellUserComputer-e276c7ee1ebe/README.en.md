# `offersShellUserComputer`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/browser-computer/README.en.md).

**Module:** `core/ports/user-computer.ts` · [Module README](../../../../../modules/core/ports/user-computer-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:742461-742463](../../../../../../reference/runtime/host-main.cjs#L742461-L742463) | `FunctionDeclaration` | no | `host` |
| [evaluation:479437-479439](../../../../../../reference/runtime/sand-eval-runner.cjs#L479437-L479439) | `FunctionDeclaration` | no | `host` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:742461-742463](../../../../../../reference/runtime/host-main.cjs#L742461-L742463) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:479437-479439](../../../../../../reference/runtime/sand-eval-runner.cjs#L479437-L479439) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:742461

Calls written directly in this body: `host.hasShellUserComputer`, `host.hasUserComputer`.

SHA-256 of the source span: `0b9d15c3e095a8bd41e20478758c7ce088325289ff3ee6d9fe616521d111c3f3`.

### evaluation:479437

Calls written directly in this body: `host.hasShellUserComputer`, `host.hasUserComputer`.

SHA-256 of the source span: `0b9d15c3e095a8bd41e20478758c7ce088325289ff3ee6d9fe616521d111c3f3`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
