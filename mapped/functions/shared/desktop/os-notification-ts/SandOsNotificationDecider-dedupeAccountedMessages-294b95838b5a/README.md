# `SandOsNotificationDecider.dedupeAccountedMessages`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/desktop/os-notification.ts` · [README do módulo](../../../../../modules/shared/desktop/os-notification-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:703336-703344](../../../../../../reference/runtime/host-main.cjs#L703336-L703344) | `method` | não | `transitions` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:703336-703344](../../../../../../reference/runtime/host-main.cjs#L703336-L703344) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:703336

Chamadas escritas diretamente neste corpo: `out.push`, `this.account`, `this.wasAccounted`.

SHA-256 do trecho: `ceae1a33a6d439e73532aeb2629d0013ac34cdc0e72f107f920045a47f5c1dc2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
