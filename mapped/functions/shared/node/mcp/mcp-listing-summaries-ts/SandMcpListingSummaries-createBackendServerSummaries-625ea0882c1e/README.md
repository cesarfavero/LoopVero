# `SandMcpListingSummaries.createBackendServerSummaries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-listing-summaries.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-listing-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688842-688867](../../../../../../../reference/runtime/host-main.cjs#L688842-L688867) | `method` | não | `server, backendEntries, authStateFor` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688842-688867](../../../../../../../reference/runtime/host-main.cjs#L688842-L688867) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:688842

Chamadas escritas diretamente neste corpo: `backendEntries.find`, `slots.map`, `this.createBackendServerSummary`.

SHA-256 do trecho: `cf75a3845b6249647ed408adf5f5334512f1be8ace6dadf7e48f96ff28047d20`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
