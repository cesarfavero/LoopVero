# `createHostMcp/completeOAuth`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/host-mcp.ts` · [README do módulo](../../../../../modules/core/mcp/host-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:701313-701320](../../../../../../reference/runtime/host-main.cjs#L701313-L701320) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:701313-701320](../../../../../../reference/runtime/host-main.cjs#L701313-L701320) | 1 | 0 | 2 | 0 | 0 | 0 |

### host:701313

Chamadas escritas diretamente neste corpo: `accountKeyFromOAuthCompletion`, `deps.backendMcpExec.completeOAuth`, `manager.noteAuthCallbackReceived`.

SHA-256 do trecho: `8117629161017400f22a7fc39dd50207388afa320872fcdf3758775bc72a276a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
