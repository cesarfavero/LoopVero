# `SandOsNotificationDecider.account`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/desktop/os-notification.ts` · [README do módulo](../../../../../modules/shared/desktop/os-notification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:703360-703373](../../../../../../reference/runtime/host-main.cjs#L703360-L703373) | `method` | não | `agentId, messageId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703360-703373](../../../../../../reference/runtime/host-main.cjs#L703360-L703373) | 5 | 0 | 0 | 3 | 0 | 0 |

### host:703360

Chamadas escritas diretamente neste corpo: `.next`, `history.add`, `history.delete`, `history.has`, `history.values`, `new Set`, `this.accountedMessageId.set`, `this.messageHistory.get`, `this.messageHistory.set`.

Alvos de atribuição ou incremento: `history`.

SHA-256 do trecho: `11f4cd0b09b3a4e27515b6fac82c27749cfdf48cbc9e0cda36648104c611958b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
