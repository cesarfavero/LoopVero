# `parseGateOverrides`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `shared/node/experiments/gate-overrides.ts` · [Module README](../../../../../../modules/shared/node/experiments/gate-overrides-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:451431-451440](../../../../../../../reference/runtime/host-main.cjs#L451431-L451440) | `FunctionDeclaration` | no | `raw` |
| [evaluation:597038-597047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597038-L597047) | `FunctionDeclaration` | no | `raw` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451431-451440](../../../../../../../reference/runtime/host-main.cjs#L451431-L451440) | 2 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:597038-597047](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597038-L597047) | 2 | 1 | 0 | 2 | 0 | 0 |

### host:451431

Calls written directly in this body: `.map`, `Object.hasOwn`, `pair.split`, `raw.split`.

Assignment or increment targets: `overrides[computed]`.

SHA-256 of the source span: `3f1a8c2fbb165410a00bf2b61bb5556ff43faf1a839b8263d0d720dcc033615c`.

### evaluation:597038

Calls written directly in this body: `.map`, `Object.hasOwn`, `pair.split`, `raw.split`.

Assignment or increment targets: `overrides[computed]`.

SHA-256 of the source span: `3f1a8c2fbb165410a00bf2b61bb5556ff43faf1a839b8263d0d720dcc033615c`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
