# `toolPermissionOfRaw`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-tool-permissions.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-tool-permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686901-686903](../../../../../../reference/runtime/host-main.cjs#L686901-L686903) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686901-686903](../../../../../../reference/runtime/host-main.cjs#L686901-L686903) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:686901

Chamadas escritas diretamente neste corpo: `SAND_STORED_TOOL_PERMISSIONS.find`.

SHA-256 do trecho: `5bd0bb54af6c0907deedfb37eb3d61e0ad15baeae2b68da543d4975af015ed94`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
