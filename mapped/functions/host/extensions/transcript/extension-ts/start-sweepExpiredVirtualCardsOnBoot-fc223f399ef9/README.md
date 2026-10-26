# `start/sweepExpiredVirtualCardsOnBoot`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/transcripts/README.md).

**Módulo:** `host/extensions/transcript/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/transcript/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:783745-783754](../../../../../../../reference/runtime/host-main.cjs#L783745-L783754) | `ArrowFunctionExpression` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:783745-783754](../../../../../../../reference/runtime/host-main.cjs#L783745-L783754) | 0 | 0 | 2 | 0 | 0 | 1 |

### host:783745

Chamadas escritas diretamente neste corpo: `context2.host.log`, `errorLogTag`, `manager.widgetResponses.expireAllPendingVirtualCardApprovalCards`.

SHA-256 do trecho: `242b20ac40842320c77afe15828921f99b53e5a9b67b6235cf08f43f7ef016b9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
