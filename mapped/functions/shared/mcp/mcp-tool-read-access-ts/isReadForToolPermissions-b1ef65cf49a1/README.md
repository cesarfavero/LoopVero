# `isReadForToolPermissions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-tool-read-access.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-tool-read-access-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686993-686998](../../../../../../reference/runtime/host-main.cjs#L686993-L686998) | `FunctionDeclaration` | não | `args` |
| [evaluation:579128-579133](../../../../../../reference/runtime/sand-eval-runner.cjs#L579128-L579133) | `FunctionDeclaration` | não | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686993-686998](../../../../../../reference/runtime/host-main.cjs#L686993-L686998) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:579128-579133](../../../../../../reference/runtime/sand-eval-runner.cjs#L579128-L579133) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:686993

Chamadas escritas diretamente neste corpo: `CURSOR_HOSTED_MCP_HOSTS.has`, `args.lookupVerb`, `mcpServerHostname`.

SHA-256 do trecho: `22c314ef83552581f58a839c8cb3a5e23c27964a0181c997c8ff85e775beac36`.

### evaluation:579128

Chamadas escritas diretamente neste corpo: `CURSOR_HOSTED_MCP_HOSTS.has`, `args.lookupVerb`, `mcpServerHostname`.

SHA-256 do trecho: `22c314ef83552581f58a839c8cb3a5e23c27964a0181c997c8ff85e775beac36`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
