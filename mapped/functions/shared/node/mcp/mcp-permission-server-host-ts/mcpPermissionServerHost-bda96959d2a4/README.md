# `mcpPermissionServerHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-permission-server-host.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-permission-server-host-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:688419-688427](../../../../../../../reference/runtime/host-main.cjs#L688419-L688427) | `FunctionDeclaration` | não | `url2, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:688419-688427](../../../../../../../reference/runtime/host-main.cjs#L688419-L688427) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:688419

Chamadas escritas diretamente neste corpo: `.hostname.toLowerCase`, `URL.canParse`, `getRestMcpProviderIdForUrlOnHost`, `new URL`.

SHA-256 do trecho: `362890f834e060ff746935882abb9f9665543f16e482529e2a8b76b91eaee1f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
