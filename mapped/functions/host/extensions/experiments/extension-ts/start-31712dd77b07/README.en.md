# `start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/experiments/extension.ts` · [Module README](../../../../../../modules/host/extensions/experiments/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:553536-553602](../../../../../../../reference/runtime/host-main.cjs#L553536-L553602) | `ArrowFunctionExpression` | no | `context2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:553536-553602](../../../../../../../reference/runtime/host-main.cjs#L553536-L553602) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:553536

Calls written directly in this body: `auth2.peekAccessToken`, `auth2.subscribeToRenewal`, `context2.deps.settings.subscribeToChanges`, `context2.deps.settings.subscribeToExperimentOverrides`, `context2.deps.settings.subscribeToFeatureFlagOverrides`, `context2.onStop`, `new SandExperimentService`, `service.handleAuthChange`, `service.start`, `tokenSubjectScope`.

SHA-256 of the source span: `59483a5b6aa98c76d774a9fc95ff51a1dd2c40c112f1ef18b3e4acaa7875fbf6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
