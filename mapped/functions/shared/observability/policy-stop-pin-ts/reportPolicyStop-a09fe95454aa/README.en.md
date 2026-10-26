# `reportPolicyStop`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/architecture/README.en.md).

**Module:** `shared/observability/policy-stop-pin.ts` · [Module README](../../../../../modules/shared/observability/policy-stop-pin-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:431035-431041](../../../../../../reference/runtime/host-main.cjs#L431035-L431041) | `FunctionDeclaration` | no | `stop` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:431035-431041](../../../../../../reference/runtime/host-main.cjs#L431035-L431041) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:431035

Calls written directly in this body: `ERROR_CLASS_TOKEN.test`, `policyStopPin.report`.

SHA-256 of the source span: `35660bbe316e7bc3d246957eef1eb92a3f77b6f3d7eaeceaefe49060bcbed046`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
