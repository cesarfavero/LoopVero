# `SandOsNotificationDecider.decideAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/desktop/os-notification.ts` · [README do módulo](../../../../../modules/shared/desktop/os-notification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:703313-703323](../../../../../../reference/runtime/host-main.cjs#L703313-L703323) | `method` | não | `agent, input2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703313-703323](../../../../../../reference/runtime/host-main.cjs#L703313-L703323) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:703313

Chamadas escritas diretamente neste corpo: `diffAgentNotificationTransitions`, `this.account`, `this.accountedMessageId.has`, `this.gateTransitions`, `this.previous.set`.

SHA-256 do trecho: `957349f18b222f049f114ec766a1112f35153a333c543d446e93ba4533fdac65`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
