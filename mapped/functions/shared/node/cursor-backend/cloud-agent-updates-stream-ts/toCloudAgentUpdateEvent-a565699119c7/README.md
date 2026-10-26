# `toCloudAgentUpdateEvent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/cloud-agent-updates-stream.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/cloud-agent-updates-stream-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:537562-537568](../../../../../../../reference/runtime/host-main.cjs#L537562-L537568) | `FunctionDeclaration` | não | `event` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:537562-537568](../../../../../../../reference/runtime/host-main.cjs#L537562-L537568) | 2 | 0 | 0 | 3 | 0 | 0 |

### host:537562

Chamadas escritas diretamente neste corpo: `Number`, `event.bcId.trim`, `isPublishTimeStamped`, `runStatusFromBackendStatus`.

SHA-256 do trecho: `86a7fd729700a4a5c25bf7300fba0d351f108547033d4d8cf2eab3f03a01d110`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
