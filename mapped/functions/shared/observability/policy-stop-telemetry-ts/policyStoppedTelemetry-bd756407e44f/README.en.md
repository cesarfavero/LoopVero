# `policyStoppedTelemetry`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/observability/README.en.md).

**Module:** `shared/observability/policy-stop-telemetry.ts` · [Module README](../../../../../modules/shared/observability/policy-stop-telemetry-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:455747-455758](../../../../../../reference/runtime/host-main.cjs#L455747-L455758) | `FunctionDeclaration` | no | `stop, process3` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455747-455758](../../../../../../reference/runtime/host-main.cjs#L455747-L455758) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:455747

Calls written directly in this body: `SandError.policyStopped`, `brandLiteralEnum`, `brandedErrorClass`, `brandedOrInvalidId`, `logFields`, `sandErrorTags`.

SHA-256 of the source span: `908954aea6ebdd55f9a6c8a808a9ed80fc40504a7805b009222fb688b45a05e4`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
