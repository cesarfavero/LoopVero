# `mcpToolRoute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `core/mcp/mcp-tool-call-telemetry.ts` · [README do módulo](../../../../../modules/core/mcp/mcp-tool-call-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:693280-693294](../../../../../../reference/runtime/host-main.cjs#L693280-L693294) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:693280-693294](../../../../../../reference/runtime/host-main.cjs#L693280-L693294) | 5 | 0 | 0 | 6 | 0 | 0 |

### host:693280

Chamadas escritas diretamente neste corpo: `.hostname.toLowerCase`, `GROK_CONNECTORS_GATEWAY_HOST.test`, `GROK_MINTED_SERVER_IDENTIFIER.test`, `URL.canParse`, `getRestMcpProviderIdForUrlOnHost`, `new URL`.

SHA-256 do trecho: `12deb4a490d3dba1ceb235db89779d004a2250e74071372312e82629d1ec4d45`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
