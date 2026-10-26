# `startManagedSetupWhenAuthenticated/start`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../guide/architecture/README.en.md).

**Module:** `host/extensions/managed-setup/extension.ts` · [Module README](../../../../../../modules/host/extensions/managed-setup/extension-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:684118-684123](../../../../../../../reference/runtime/host-main.cjs#L684118-L684123) | `ArrowFunctionExpression` | no | `(none)` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:684118-684123](../../../../../../../reference/runtime/host-main.cjs#L684118-L684123) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:684118

Calls written directly in this body: `options2.startManagedSetup`, `options2.startManagedSkills`.

Assignment or increment targets: `started2`.

SHA-256 of the source span: `94e28e03d1b74545a01903691e52bb306cdd38b0e27b201df2f2f53e83aced30`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../guide/methodology/README.en.md).
