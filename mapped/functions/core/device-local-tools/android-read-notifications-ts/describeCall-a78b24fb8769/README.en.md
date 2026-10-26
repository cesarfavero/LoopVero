# `describeCall`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../guide/components/tools/README.en.md).

**Module:** `core/device-local-tools/android-read-notifications.ts` · [Module README](../../../../../modules/core/device-local-tools/android-read-notifications-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:759087-759090](../../../../../../reference/runtime/host-main.cjs#L759087-L759090) | `ArrowFunctionExpression` | no | `input2` |
| [evaluation:549247-549250](../../../../../../reference/runtime/sand-eval-runner.cjs#L549247-L549250) | `ArrowFunctionExpression` | no | `input2` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759087-759090](../../../../../../reference/runtime/host-main.cjs#L759087-L759090) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:549247-549250](../../../../../../reference/runtime/sand-eval-runner.cjs#L549247-L549250) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:759087

Calls written directly in this body: `describeReadNotifications`, `readNotificationsParameters.safeParse`.

SHA-256 of the source span: `c6091b7bdd426911e5e71f139a78c50ee102502b3c909c7ffc6c6a18ae178ede`.

### evaluation:549247

Calls written directly in this body: `describeReadNotifications`, `readNotificationsParameters.safeParse`.

SHA-256 of the source span: `090ab218299fd62c36a931c227190baa6894a2f185f0a596aa62e3b7aeb089f6`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../guide/methodology/README.en.md).
