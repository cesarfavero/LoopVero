# `LocalExecSandBox.ensureReady`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `host/box/local-exec-sand-box.ts` · [Module README](../../../../../modules/host/box/local-exec-sand-box-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [evaluation:627010-627072](../../../../../../reference/runtime/sand-eval-runner.cjs#L627010-L627072) | `method` | yes | `ctx, _agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627010-627072](../../../../../../reference/runtime/sand-eval-runner.cjs#L627010-L627072) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:627010

Calls written directly in this body: `.clone`, `accessor.register`, `backgroundShellExecutor.getManager`, `createDefaultTerminalExecutor`, `ctx.get`, `new BaseShellCoreExecutor`, `new LazyX11ComputerUseExecutor`, `new LocalBackgroundShellExecutor`, `new LocalLsExecutor`, `new LocalReadExecutor`, `new LocalShellExecutor`, `new LocalShellStreamExecutor`, `new MockIgnoreService`, `new MockPermissionsService`, `new RegistryResourceAccessor`, `resolveProjectDir`, `this.options.computerUseDisplay.trim`.

SHA-256 of the source span: `1be72bb8ed66511d3526a4e6d67aa2aaea76d637ff68a34f084bd27df3201ea7`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
