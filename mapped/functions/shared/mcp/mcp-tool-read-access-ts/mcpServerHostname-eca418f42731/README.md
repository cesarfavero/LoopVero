# `mcpServerHostname`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-tool-read-access.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-tool-read-access-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686986-686988](../../../../../../reference/runtime/host-main.cjs#L686986-L686988) | `FunctionDeclaration` | não | `serverHost` |
| [evaluation:579121-579123](../../../../../../reference/runtime/sand-eval-runner.cjs#L579121-L579123) | `FunctionDeclaration` | não | `serverHost` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686986-686988](../../../../../../reference/runtime/host-main.cjs#L686986-L686988) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:579121-579123](../../../../../../reference/runtime/sand-eval-runner.cjs#L579121-L579123) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:686986

Chamadas escritas diretamente neste corpo: `.split`, `serverHost.toLowerCase`.

SHA-256 do trecho: `e25041c4111bb3f5e3e854d390d2e5cd1fa8b71821ad835434bf72ef55643ee3`.

### evaluation:579121

Chamadas escritas diretamente neste corpo: `.split`, `serverHost.toLowerCase`.

SHA-256 do trecho: `e25041c4111bb3f5e3e854d390d2e5cd1fa8b71821ad835434bf72ef55643ee3`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
