# `startWorkingStateExport/readBlobs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/working-state-export/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/working-state-export/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:786079-786079](../../../../../../../reference/runtime/host-main.cjs#L786079-L786079) | `ArrowFunctionExpression` | não | `agentId, blobIdsHex` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:786079-786079](../../../../../../../reference/runtime/host-main.cjs#L786079-L786079) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:786079 usa retorno implícito de arrow function.

### host:786079

Chamadas escritas diretamente neste corpo: `sessionStore.readConversationBlobsByHexIds`.

SHA-256 do trecho: `982bca3af6c4b9b049e328d87683839b252cebcfed9a514e157da2ce029c0500`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
