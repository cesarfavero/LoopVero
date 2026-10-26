# `createDashboardClient`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/marketplace/cursor-marketplace-client.ts` · [README do módulo](../../../../../../modules/shared/node/marketplace/cursor-marketplace-client-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:404286-404291](../../../../../../../reference/runtime/host-main.cjs#L404286-L404291) | `FunctionDeclaration` | não | `backend, getAccessToken, getMachineId, getTeamId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:404286-404291](../../../../../../../reference/runtime/host-main.cjs#L404286-L404291) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:404286

Chamadas escritas diretamente neste corpo: `createSandCursorBackendClient`, `marketplaceBackendClientOptions`.

SHA-256 do trecho: `47bd92dd39ff2555f79cad315786df072d890a39667ef291be53ce0ccd263062`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
