# `UserFormService.createRunnerOnce`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/session/user-form-service.ts` · [Module README](../../../../../../modules/host/extensions/session/user-form-service-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:728147-728168](../../../../../../../reference/runtime/host-main.cjs#L728147-L728168) | `method` | yes | `agentId` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:728147-728168](../../../../../../../reference/runtime/host-main.cjs#L728147-L728168) | 1 | 0 | 1 | 3 | 0 | 1 |

### host:728147

Calls written directly in this body: `boxAgentWindowIndex`, `createSandBrowserOpRunner`, `reportFallback`, `this.deps.box.ensureReady`.

Assignment or increment targets: `connection`.

SHA-256 of the source span: `d5d9901b07c1c3bf0f6a20782f6df5dff05d9c8123516d1948df1d731611f3ff`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
