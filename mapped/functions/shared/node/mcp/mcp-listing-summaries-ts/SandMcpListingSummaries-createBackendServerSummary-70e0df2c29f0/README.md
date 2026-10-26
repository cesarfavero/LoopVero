# `SandMcpListingSummaries.createBackendServerSummary`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-listing-summaries.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-listing-summaries-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688868-688905](../../../../../../../reference/runtime/host-main.cjs#L688868-L688905) | `method` | não | `{     server,     backend,     isListed,     accountKey,     slot,     authStateFor   }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688868-688905](../../../../../../../reference/runtime/host-main.cjs#L688868-L688905) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:688868

Chamadas escritas diretamente neste corpo: `authStateFor`, `backendSummaryStatus`, `displayCommand`, `displayTransport`, `displayUrl`, `pluginAttributionFromDisplayServer`, `provisionalMcpAccountServerIdentifier`, `this.countEnabledTools`, `this.resolveServerCustomInstruction`, `unnamedMcpRowIdentifier`.

SHA-256 do trecho: `788bdc5b65c0bd02f7d2ed3886b63bca65433d40f8a988992904f3f67ca00104`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
