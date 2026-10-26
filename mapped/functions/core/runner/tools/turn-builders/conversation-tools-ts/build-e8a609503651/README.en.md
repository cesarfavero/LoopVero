# `build`

[English](README.en.md) · [Português (Brasil)](README.md)

Static reference for the original code. The complete flow and its conditions are explained in the [component guide](../../../../../../../../guide/components/tools/README.en.md).

**Module:** `core/runner/tools/turn-builders/conversation-tools.ts` · [Module README](../../../../../../../modules/core/runner/tools/turn-builders/conversation-tools-ts/README.en.md)

## Implementation and inputs

| Artifact and lines | Form | Async | Recovered parameters |
| --- | --- | --- | --- |
| [host:768998-768998](../../../../../../../../reference/runtime/host-main.cjs#L768998-L768998) | `ArrowFunctionExpression` | no | `{ host }` |
| [host:769002-769011](../../../../../../../../reference/runtime/host-main.cjs#L769002-L769011) | `ArrowFunctionExpression` | no | `{     host: { meetingRequest, meetings },     turn: { requestAutomationParentWake }   }` |
| [host:769015-769037](../../../../../../../../reference/runtime/host-main.cjs#L769015-L769037) | `ArrowFunctionExpression` | no | `{     host,     turn,     props   }` |
| [host:769041-769041](../../../../../../../../reference/runtime/host-main.cjs#L769041-L769041) | `ArrowFunctionExpression` | no | `{ host, props }` |
| [host:769045-769113](../../../../../../../../reference/runtime/host-main.cjs#L769045-L769113) | `ArrowFunctionExpression` | no | `{     host,     turn,     recordDelivery,     resolveBoxAttachment   }` |
| [host:769117-769136](../../../../../../../../reference/runtime/host-main.cjs#L769117-L769136) | `ArrowFunctionExpression` | no | `{     host,     decisions,     turn,     props,     extractAutoReviewConversationContext: extractAutoReviewConversationContext3,     recordDelivery   }` |
| [host:769147-769173](../../../../../../../../reference/runtime/host-main.cjs#L769147-L769173) | `ArrowFunctionExpression` | no | `{     host,     recordDelivery,     resolveBoxAttachment   }` |
| [host:769185-769202](../../../../../../../../reference/runtime/host-main.cjs#L769185-L769202) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |
| [host:769206-769206](../../../../../../../../reference/runtime/host-main.cjs#L769206-L769206) | `ArrowFunctionExpression` | no | `{ host }` |
| [host:769210-769222](../../../../../../../../reference/runtime/host-main.cjs#L769210-L769222) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |
| [host:769226-769226](../../../../../../../../reference/runtime/host-main.cjs#L769226-L769226) | `ArrowFunctionExpression` | no | `{ host }` |
| [host:769230-769230](../../../../../../../../reference/runtime/host-main.cjs#L769230-L769230) | `ArrowFunctionExpression` | no | `{ host, scopeLocalTool }` |
| [host:769234-769234](../../../../../../../../reference/runtime/host-main.cjs#L769234-L769234) | `ArrowFunctionExpression` | no | `{ host }` |
| [host:769238-769254](../../../../../../../../reference/runtime/host-main.cjs#L769238-L769254) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |
| [host:769271-769274](../../../../../../../../reference/runtime/host-main.cjs#L769271-L769274) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |
| [host:769278-769304](../../../../../../../../reference/runtime/host-main.cjs#L769278-L769304) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |
| [host:769316-769334](../../../../../../../../reference/runtime/host-main.cjs#L769316-L769334) | `ArrowFunctionExpression` | no | `{     host,     decisions,     turn,     props,     extractAutoReviewConversationContext: extractAutoReviewConversationContext3,     recordDelivery   }` |
| [host:769343-769350](../../../../../../../../reference/runtime/host-main.cjs#L769343-L769350) | `ArrowFunctionExpression` | no | `{     host,     props   }` |
| [host:769375-769388](../../../../../../../../reference/runtime/host-main.cjs#L769375-L769388) | `ArrowFunctionExpression` | no | `ctx` |
| [host:769392-769401](../../../../../../../../reference/runtime/host-main.cjs#L769392-L769401) | `ArrowFunctionExpression` | no | `ctx` |
| [host:769413-769434](../../../../../../../../reference/runtime/host-main.cjs#L769413-L769434) | `ArrowFunctionExpression` | no | `{     host,     turn,     resolveAgentDisplay   }` |
| [host:769438-769481](../../../../../../../../reference/runtime/host-main.cjs#L769438-L769481) | `ArrowFunctionExpression` | no | `{     host,     turn,     toolHandoff   }` |
| [host:769485-769500](../../../../../../../../reference/runtime/host-main.cjs#L769485-L769500) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |
| [host:769510-769521](../../../../../../../../reference/runtime/host-main.cjs#L769510-L769521) | `ArrowFunctionExpression` | no | `{     host,     emitCard   }` |
| [evaluation:564645-564645](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564645-L564645) | `ArrowFunctionExpression` | no | `{ host }` |
| [evaluation:564649-564658](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564649-L564658) | `ArrowFunctionExpression` | no | `{     host: { meetingRequest, meetings },     turn: { requestAutomationParentWake }   }` |
| [evaluation:564662-564684](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564662-L564684) | `ArrowFunctionExpression` | no | `{     host,     turn,     props   }` |
| [evaluation:564688-564688](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564688-L564688) | `ArrowFunctionExpression` | no | `{ host, props }` |
| [evaluation:564692-564760](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564692-L564760) | `ArrowFunctionExpression` | no | `{     host,     turn,     recordDelivery,     resolveBoxAttachment   }` |
| [evaluation:564764-564783](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564764-L564783) | `ArrowFunctionExpression` | no | `{     host,     decisions,     turn,     props,     extractAutoReviewConversationContext: extractAutoReviewConversationContext3,     recordDelivery   }` |
| [evaluation:564794-564820](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564794-L564820) | `ArrowFunctionExpression` | no | `{     host,     recordDelivery,     resolveBoxAttachment   }` |
| [evaluation:564832-564849](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564832-L564849) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |
| [evaluation:564853-564853](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564853-L564853) | `ArrowFunctionExpression` | no | `{ host }` |
| [evaluation:564857-564869](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564857-L564869) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |
| [evaluation:564873-564873](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564873-L564873) | `ArrowFunctionExpression` | no | `{ host }` |
| [evaluation:564877-564877](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564877-L564877) | `ArrowFunctionExpression` | no | `{ host, scopeLocalTool }` |
| [evaluation:564881-564881](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564881-L564881) | `ArrowFunctionExpression` | no | `{ host }` |
| [evaluation:564885-564901](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564885-L564901) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |
| [evaluation:564918-564921](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564918-L564921) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |
| [evaluation:564925-564951](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564925-L564951) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |
| [evaluation:564963-564981](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564963-L564981) | `ArrowFunctionExpression` | no | `{     host,     decisions,     turn,     props,     extractAutoReviewConversationContext: extractAutoReviewConversationContext3,     recordDelivery   }` |
| [evaluation:564990-564997](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564990-L564997) | `ArrowFunctionExpression` | no | `{     host,     props   }` |
| [evaluation:565022-565035](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565022-L565035) | `ArrowFunctionExpression` | no | `ctx` |
| [evaluation:565039-565048](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565039-L565048) | `ArrowFunctionExpression` | no | `ctx` |
| [evaluation:565060-565081](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565060-L565081) | `ArrowFunctionExpression` | no | `{     host,     turn,     resolveAgentDisplay   }` |
| [evaluation:565085-565128](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565085-L565128) | `ArrowFunctionExpression` | no | `{     host,     turn,     toolHandoff   }` |
| [evaluation:565132-565147](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565132-L565147) | `ArrowFunctionExpression` | no | `{     host,     turn   }` |
| [evaluation:565157-565168](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565157-L565168) | `ArrowFunctionExpression` | no | `{     host,     emitCard   }` |

## Flow observed in the body

| Artifact | Syntactic branches | Loops | await | Explicit return | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:768998-768998](../../../../../../../../reference/runtime/host-main.cjs#L768998-L768998) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:768998 uses an implicit arrow-function return.
| [host:769002-769011](../../../../../../../../reference/runtime/host-main.cjs#L769002-L769011) | 2 | 0 | 0 | 3 | 0 | 0 |
| [host:769015-769037](../../../../../../../../reference/runtime/host-main.cjs#L769015-L769037) | 1 | 0 | 0 | 2 | 0 | 0 |
| [host:769041-769041](../../../../../../../../reference/runtime/host-main.cjs#L769041-L769041) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769041 uses an implicit arrow-function return.
| [host:769045-769113](../../../../../../../../reference/runtime/host-main.cjs#L769045-L769113) | 6 | 0 | 0 | 1 | 0 | 0 |
| [host:769117-769136](../../../../../../../../reference/runtime/host-main.cjs#L769117-L769136) | 1 | 0 | 0 | 1 | 0 | 0 |
| [host:769147-769173](../../../../../../../../reference/runtime/host-main.cjs#L769147-L769173) | 2 | 0 | 0 | 2 | 0 | 0 |
| [host:769185-769202](../../../../../../../../reference/runtime/host-main.cjs#L769185-L769202) | 1 | 0 | 0 | 1 | 0 | 0 |
| [host:769206-769206](../../../../../../../../reference/runtime/host-main.cjs#L769206-L769206) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769206 uses an implicit arrow-function return.
| [host:769210-769222](../../../../../../../../reference/runtime/host-main.cjs#L769210-L769222) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769210 uses an implicit arrow-function return.
| [host:769226-769226](../../../../../../../../reference/runtime/host-main.cjs#L769226-L769226) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769226 uses an implicit arrow-function return.
| [host:769230-769230](../../../../../../../../reference/runtime/host-main.cjs#L769230-L769230) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769230 uses an implicit arrow-function return.
| [host:769234-769234](../../../../../../../../reference/runtime/host-main.cjs#L769234-L769234) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769234 uses an implicit arrow-function return.
| [host:769238-769254](../../../../../../../../reference/runtime/host-main.cjs#L769238-L769254) | 1 | 0 | 0 | 2 | 0 | 0 |
| [host:769271-769274](../../../../../../../../reference/runtime/host-main.cjs#L769271-L769274) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769271 uses an implicit arrow-function return.
| [host:769278-769304](../../../../../../../../reference/runtime/host-main.cjs#L769278-L769304) | 1 | 0 | 0 | 2 | 0 | 0 |
| [host:769316-769334](../../../../../../../../reference/runtime/host-main.cjs#L769316-L769334) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769316 uses an implicit arrow-function return.
| [host:769343-769350](../../../../../../../../reference/runtime/host-main.cjs#L769343-L769350) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769343 uses an implicit arrow-function return.
| [host:769375-769388](../../../../../../../../reference/runtime/host-main.cjs#L769375-L769388) | 2 | 0 | 0 | 2 | 0 | 0 |
| [host:769392-769401](../../../../../../../../reference/runtime/host-main.cjs#L769392-L769401) | 1 | 0 | 0 | 2 | 0 | 0 |
| [host:769413-769434](../../../../../../../../reference/runtime/host-main.cjs#L769413-L769434) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769413 uses an implicit arrow-function return.
| [host:769438-769481](../../../../../../../../reference/runtime/host-main.cjs#L769438-L769481) | 2 | 0 | 0 | 2 | 0 | 0 |
| [host:769485-769500](../../../../../../../../reference/runtime/host-main.cjs#L769485-L769500) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769485 uses an implicit arrow-function return.
| [host:769510-769521](../../../../../../../../reference/runtime/host-main.cjs#L769510-L769521) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at host:769510 uses an implicit arrow-function return.
| [evaluation:564645-564645](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564645-L564645) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564645 uses an implicit arrow-function return.
| [evaluation:564649-564658](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564649-L564658) | 2 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:564662-564684](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564662-L564684) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:564688-564688](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564688-L564688) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564688 uses an implicit arrow-function return.
| [evaluation:564692-564760](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564692-L564760) | 6 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564764-564783](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564764-L564783) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564794-564820](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564794-L564820) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:564832-564849](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564832-L564849) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:564853-564853](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564853-L564853) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564853 uses an implicit arrow-function return.
| [evaluation:564857-564869](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564857-L564869) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564857 uses an implicit arrow-function return.
| [evaluation:564873-564873](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564873-L564873) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564873 uses an implicit arrow-function return.
| [evaluation:564877-564877](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564877-L564877) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564877 uses an implicit arrow-function return.
| [evaluation:564881-564881](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564881-L564881) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564881 uses an implicit arrow-function return.
| [evaluation:564885-564901](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564885-L564901) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:564918-564921](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564918-L564921) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564918 uses an implicit arrow-function return.
| [evaluation:564925-564951](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564925-L564951) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:564963-564981](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564963-L564981) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564963 uses an implicit arrow-function return.
| [evaluation:564990-564997](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L564990-L564997) | 0 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:564990 uses an implicit arrow-function return.
| [evaluation:565022-565035](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565022-L565035) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:565039-565048](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565039-L565048) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:565060-565081](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565060-L565081) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:565060 uses an implicit arrow-function return.
| [evaluation:565085-565128](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565085-L565128) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:565132-565147](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565132-L565147) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:565132 uses an implicit arrow-function return.
| [evaluation:565157-565168](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L565157-L565168) | 1 | 0 | 0 | 0 | 0 | 0 |

The occurrence at evaluation:565157 uses an implicit arrow-function return.

### host:768998

Calls written directly in this body: `createSandTaskTools`.

SHA-256 of the source span: `3ae5e6263be652c214a866d7fae80000a9dce81cc28671954a61bb6a60ede6da`.

### host:769002

Calls written directly in this body: `createWakeParentTool`, `meetingRequestWakeParentTool`.

SHA-256 of the source span: `92a532ab4c289556ae4c00f0de1982e1fb31c03b6dc1674f2e53376c8ffd961e`.

### host:769015

Calls written directly in this body: `createSandTaskTool`, `sandSubagentToolName`.

SHA-256 of the source span: `33ebee8075486cad4b46e970e055f48e03b5deabf6bca1fb35d3c8fc71ed66d4`.

### host:769041

Calls written directly in this body: `createSandMultitaskTodoTool`.

SHA-256 of the source span: `56811dbf955e769738d634c3e74913d1263d274c072369c9571447f858701837`.

### host:769045

Calls written directly in this body: `createSendMessageTool2`, `meetings.replyToRequest.bind`, `new MeetingChatSender`, `turn.offerSendToUserEndTurn`.

SHA-256 of the source span: `f4e8395c21c3a59aebb4de25fad33c41241b49ecf128883f2d7ac00d6aa05481`.

### host:769117

Calls written directly in this body: `createDraftToolForTurn`.

SHA-256 of the source span: `d06b7040f93eadd9d9aec816e8fdd38a97aa7b80be4ce76f776e6053f390be16`.

### host:769147

Calls written directly in this body: `attachmentSourceDepsFor`, `createSendToAgentTool`, `offersSendToAgent`.

SHA-256 of the source span: `e00beb0fc8d33da687ed177664e0dfbd9c982d1d26f37158a0e50e67fe97e9c7`.

### host:769185

Calls written directly in this body: `createChannelsThreadTools`, `createReactToMessageTool`, `turn.offerSendToUserEndTurn`.

SHA-256 of the source span: `376d94d7a93d1cddc40be5aab4729db0ac5039a082a161a8825dc68fa5f56080`.

### host:769206

Calls written directly in this body: `createSetStatusTool`.

SHA-256 of the source span: `c11d405e92cf0ea04b49b8f79f9c13ed6ca34d94cec1e3f31fe2649bdd2271cc`.

### host:769210

Calls written directly in this body: `createSendFeedbackTool`.

SHA-256 of the source span: `9774c6a670163069f1ab49ec5459b2b2f4f33ec485bf3db11c16fad15fe775f8`.

### host:769226

Calls written directly in this body: `createCheckSubscriptionUsageTool`, `host.gates.checkSubscriptionUsage`.

SHA-256 of the source span: `96751fc6cf23c7008d2346628aaddaeac36cebc9b85acc728d7d1ff004c70529`.

### host:769230

Calls written directly in this body: `.map`, `connectedActivityTools`.

SHA-256 of the source span: `6ad49d69f87f69fb5801e9ea41072c5f6e1bcc0ff484b15c50686806e04a073c`.

### host:769234

Calls written directly in this body: `placePhoneCallTools`.

SHA-256 of the source span: `249b62be4b7a2d7f9aa168f9279b0951c5547ce36ece5dcbb259d18c860152da`.

### host:769238

Calls written directly in this body: `createDraftCalendarInviteTool`, `host.gates.calendarInviteCard`, `host.gates.widgetV0`.

SHA-256 of the source span: `64dae3e7ca4f3788ec42d4561fbccc581269f385f36a0cede372200c0637d589`.

### host:769271

Calls written directly in this body: `placesSearchToolsFor`.

SHA-256 of the source span: `b58fa86e1875273cca34780d44531af049e042ef723af793f29b547de447f432`.

### host:769278

Calls written directly in this body: `createVisualizeTool`, `host.gates.visualizations`.

SHA-256 of the source span: `bbc2605fa540264925f073425bafa0d26fb659ced949e39c54097072b9847166`.

### host:769316

Calls written directly in this body: `emailTurnTools`.

SHA-256 of the source span: `b332815b60953686620ca34213d91022e61e31cf15bf7ad812996c9d42fdaf3f`.

### host:769343

Calls written directly in this body: `host.channels.flatMap`.

SHA-256 of the source span: `12c229be471065db2f24ca4514ddbdff190f4796c4a564d76227ab5f02808b20`.

### host:769375

Calls written directly in this body: `createReadTranscriptTool`, `createSearchTranscriptsTool`, `host.gates.transcriptSearch`, `offersTranscriptSearch`, `sandSubagentToolName`, `subagentReadMode`.

SHA-256 of the source span: `6114249faa80eab31a31ee5f88e0c6179e38f964dcef4b14bca6b1e398a3a5ff`.

### host:769392

Calls written directly in this body: `createReadAgentActivityTool`, `untrustedPageDriverReview`.

SHA-256 of the source span: `0fd1c93f1f5320ddde38ade454f42cc68856d1a736937dcc22296936de4a9bdf`.

### host:769413

Calls written directly in this body: `host.gates.secureValues`, `host.gates.secureValuesAnySite`, `listAvailableSecureValuesToolsForTurn`, `mountsVaultTool`.

SHA-256 of the source span: `79b899b36b6e173ab099ddb85d6facb723f264cc0dd6f68e31e0d834bf240f08`.

### host:769438

Calls written directly in this body: `createVaultTool`, `host.gates.vaultCards`, `mountsVaultTool`, `vaultUsable`.

SHA-256 of the source span: `07391f9232a566c61b697815c83d1fe600b673f1abc3cee6c8ea87abec0696b4`.

### host:769485

Calls written directly in this body: `browserSecureFillToolsForTurn`, `createSecureFillBrowserContextResolver`, `host.gates.secureValues`, `host.gates.secureValuesAnySite`.

SHA-256 of the source span: `0ab5f6e8cc4d98aebeae1f769fd8371f2a9441893593f1c683de811a76e74d46`.

### host:769510

Calls written directly in this body: `createCredentialTurnTools`, `host.gates.secureValues`, `mountsVaultTool`, `vaultUsable`.

SHA-256 of the source span: `0fc683c6937310cc9f513c0c5a1ead61460553fc5981f8d0ca224cfc367441db`.

### evaluation:564645

Calls written directly in this body: `createSandTaskTools`.

SHA-256 of the source span: `3ae5e6263be652c214a866d7fae80000a9dce81cc28671954a61bb6a60ede6da`.

### evaluation:564649

Calls written directly in this body: `createWakeParentTool`, `meetingRequestWakeParentTool`.

SHA-256 of the source span: `92a532ab4c289556ae4c00f0de1982e1fb31c03b6dc1674f2e53376c8ffd961e`.

### evaluation:564662

Calls written directly in this body: `createSandTaskTool`, `sandSubagentToolName`.

SHA-256 of the source span: `33ebee8075486cad4b46e970e055f48e03b5deabf6bca1fb35d3c8fc71ed66d4`.

### evaluation:564688

Calls written directly in this body: `createSandMultitaskTodoTool`.

SHA-256 of the source span: `56811dbf955e769738d634c3e74913d1263d274c072369c9571447f858701837`.

### evaluation:564692

Calls written directly in this body: `createSendMessageTool2`, `meetings.replyToRequest.bind`, `new MeetingChatSender`, `turn.offerSendToUserEndTurn`.

SHA-256 of the source span: `f4e8395c21c3a59aebb4de25fad33c41241b49ecf128883f2d7ac00d6aa05481`.

### evaluation:564764

Calls written directly in this body: `createDraftToolForTurn`.

SHA-256 of the source span: `d06b7040f93eadd9d9aec816e8fdd38a97aa7b80be4ce76f776e6053f390be16`.

### evaluation:564794

Calls written directly in this body: `attachmentSourceDepsFor`, `createSendToAgentTool`, `offersSendToAgent`.

SHA-256 of the source span: `e00beb0fc8d33da687ed177664e0dfbd9c982d1d26f37158a0e50e67fe97e9c7`.

### evaluation:564832

Calls written directly in this body: `createChannelsThreadTools`, `createReactToMessageTool`, `turn.offerSendToUserEndTurn`.

SHA-256 of the source span: `376d94d7a93d1cddc40be5aab4729db0ac5039a082a161a8825dc68fa5f56080`.

### evaluation:564853

Calls written directly in this body: `createSetStatusTool`.

SHA-256 of the source span: `c11d405e92cf0ea04b49b8f79f9c13ed6ca34d94cec1e3f31fe2649bdd2271cc`.

### evaluation:564857

Calls written directly in this body: `createSendFeedbackTool`.

SHA-256 of the source span: `9774c6a670163069f1ab49ec5459b2b2f4f33ec485bf3db11c16fad15fe775f8`.

### evaluation:564873

Calls written directly in this body: `createCheckSubscriptionUsageTool`, `host.gates.checkSubscriptionUsage`.

SHA-256 of the source span: `96751fc6cf23c7008d2346628aaddaeac36cebc9b85acc728d7d1ff004c70529`.

### evaluation:564877

Calls written directly in this body: `.map`, `connectedActivityTools`.

SHA-256 of the source span: `6ad49d69f87f69fb5801e9ea41072c5f6e1bcc0ff484b15c50686806e04a073c`.

### evaluation:564881

Calls written directly in this body: `placePhoneCallTools`.

SHA-256 of the source span: `249b62be4b7a2d7f9aa168f9279b0951c5547ce36ece5dcbb259d18c860152da`.

### evaluation:564885

Calls written directly in this body: `createDraftCalendarInviteTool`, `host.gates.calendarInviteCard`, `host.gates.widgetV0`.

SHA-256 of the source span: `64dae3e7ca4f3788ec42d4561fbccc581269f385f36a0cede372200c0637d589`.

### evaluation:564918

Calls written directly in this body: `placesSearchToolsFor`.

SHA-256 of the source span: `b58fa86e1875273cca34780d44531af049e042ef723af793f29b547de447f432`.

### evaluation:564925

Calls written directly in this body: `createVisualizeTool`, `host.gates.visualizations`.

SHA-256 of the source span: `bbc2605fa540264925f073425bafa0d26fb659ced949e39c54097072b9847166`.

### evaluation:564963

Calls written directly in this body: `emailTurnTools`.

SHA-256 of the source span: `b332815b60953686620ca34213d91022e61e31cf15bf7ad812996c9d42fdaf3f`.

### evaluation:564990

Calls written directly in this body: `host.channels.flatMap`.

SHA-256 of the source span: `12c229be471065db2f24ca4514ddbdff190f4796c4a564d76227ab5f02808b20`.

### evaluation:565022

Calls written directly in this body: `createReadTranscriptTool`, `createSearchTranscriptsTool`, `host.gates.transcriptSearch`, `offersTranscriptSearch`, `sandSubagentToolName`, `subagentReadMode`.

SHA-256 of the source span: `6114249faa80eab31a31ee5f88e0c6179e38f964dcef4b14bca6b1e398a3a5ff`.

### evaluation:565039

Calls written directly in this body: `createReadAgentActivityTool`, `untrustedPageDriverReview`.

SHA-256 of the source span: `0fd1c93f1f5320ddde38ade454f42cc68856d1a736937dcc22296936de4a9bdf`.

### evaluation:565060

Calls written directly in this body: `host.gates.secureValues`, `host.gates.secureValuesAnySite`, `listAvailableSecureValuesToolsForTurn`, `mountsVaultTool`.

SHA-256 of the source span: `79b899b36b6e173ab099ddb85d6facb723f264cc0dd6f68e31e0d834bf240f08`.

### evaluation:565085

Calls written directly in this body: `createVaultTool`, `host.gates.vaultCards`, `mountsVaultTool`, `vaultUsable`.

SHA-256 of the source span: `07391f9232a566c61b697815c83d1fe600b673f1abc3cee6c8ea87abec0696b4`.

### evaluation:565132

Calls written directly in this body: `browserSecureFillToolsForTurn`, `createSecureFillBrowserContextResolver`, `host.gates.secureValues`, `host.gates.secureValuesAnySite`.

SHA-256 of the source span: `0ab5f6e8cc4d98aebeae1f769fd8371f2a9441893593f1c683de811a76e74d46`.

### evaluation:565157

Calls written directly in this body: `createCredentialTurnTools`, `host.gates.secureValues`, `mountsVaultTool`, `vaultUsable`.

SHA-256 of the source span: `0fc683c6937310cc9f513c0c5a1ead61460553fc5981f8d0ca224cfc367441db`.

## How to interpret this page

The links open the complete implementation, including conditions, return values, and failure handling. Counts exclude nested function bodies. Calls are syntactic references: they do not resolve dynamic dispatch, aliases, or permissions, and they do not prove execution in production. Assignments do not cover every mutation performed by called methods. Repeated names in the same scope group occurrences together; differences between bundles are not replaced with an assumed version.

[Catalog method and limitations](../../../../../../../../guide/methodology/README.en.md).
