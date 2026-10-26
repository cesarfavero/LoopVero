# `automationWakeTrustMarker`

## Responsabilidade

Decide se um prompt oculto pode carregar o marcador de **instrução de automação confiável**. A função trabalha sobre metadados fornecidos pelo chamador. [Implementação](../../../reference/runtime/sand-eval-runner.cjs#L526080-L526086).

## Regra exata

| `wake` | `untrusted === true` | `platformProactivity === true` | Saída |
| --- | --- | --- | --- |
| Ausente | Qualquer | Qualquer | String vazia |
| Presente | Sim | Qualquer | String vazia |
| Presente | Não | Sim | String vazia |
| Presente | Não | Não | Marcador atual ou legado |

`isRenamedSpelling` só escolhe entre `GROK_BOT_TRUSTED_AUTOMATION_PROMPT_MARKER` e `LEGACY_SAND_TRUSTED_AUTOMATION_PROMPT_MARKER`. Não altera a classificação de confiança.

## Onde entra no prompt

A composição do prompt acrescenta `hiddenPromptMarker`, depois o marcador de confiança e outros prefixos somente quando `options.hidden === true`. O texto com notas do turno vem em seguida. Sem execução oculta, o texto é usado sem esses marcadores. [Caller](../../../reference/runtime/sand-eval-runner.cjs#L533929-L533948).

O dispatch normal de automação marca como não confiáveis as revivals baseadas em resultados de filhos. Há, portanto, uma ligação concreta entre proveniência do trabalho e montagem do prompt; não é apenas um comentário abstrato sobre segurança. [Revival options](../../../reference/runtime/sand-eval-runner.cjs#L584052-L584062).

## O que o helper não faz

Ele não valida assinatura de evento, usuário, ownership ou destinatário. Também não escolhe uma oportunidade nem autoriza uma escrita externa. Retornar string vazia impede a promoção a instrução confiável nessa camada; não elimina o conteúdo nem impede toda execução da run.

O campo `platformProactivity` permite reconhecer uma classe de origem de plataforma sem revelar como ela foi escolhida. `automationRunTrigger` usa o mesmo campo para rótulo analítico `platform`, e o runner acrescenta o motivo de roteamento `sand-proactivity-wake`. [Rótulo](../../../reference/runtime/sand-eval-runner.cjs#L589677-L589684), [roteamento](../../../reference/runtime/sand-eval-runner.cjs#L591706-L591709).

## Exemplo de interpretação

Uma rotina explícita de agenda com `untrusted` ausente pode receber o marcador confiável. Uma iniciativa da plataforma com o mesmo texto e `platformProactivity: true` não recebe. O conteúdo textual ser igual não apaga a diferença de origem.

[Proatividade](../../components/proactivity/README.md) · [Dispatch de automação](../createAutomationSubagentDispatch/README.md).
