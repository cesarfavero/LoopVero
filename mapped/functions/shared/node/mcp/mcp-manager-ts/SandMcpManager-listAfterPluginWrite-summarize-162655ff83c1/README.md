# `SandMcpManager.listAfterPluginWrite/summarize`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-manager.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-manager-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690006-690022](../../../../../../../reference/runtime/host-main.cjs#L690006-L690022) | `ArrowFunctionExpression` | não | `settled2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690006-690022](../../../../../../../reference/runtime/host-main.cjs#L690006-L690022) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:690006

Chamadas escritas diretamente neste corpo: `this.cachedListing`, `this.summarizeServers`.

SHA-256 do trecho: `585e244c314a2180d71154317f7f1380d39af0e034e3bed05d8037bba6d2e9df`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
