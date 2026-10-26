# `McpMetaToolServersSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640443-640450](../../../../../../reference/runtime/host-main.cjs#L640443-L640450) | `FunctionDeclaration` | não | `{ mcpMetaToolOptions, mcpInfoComplete }` |
| [evaluation:431057-431064](../../../../../../reference/runtime/sand-eval-runner.cjs#L431057-L431064) | `FunctionDeclaration` | não | `{ mcpMetaToolOptions, mcpInfoComplete }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640443-640450](../../../../../../reference/runtime/host-main.cjs#L640443-L640450) | 5 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431057-431064](../../../../../../reference/runtime/sand-eval-runner.cjs#L431057-L431064) | 5 | 0 | 0 | 2 | 0 | 0 |

### host:640443

Chamadas escritas diretamente neste corpo: `McpMetaToolServerList`, `jsx`, `jsxs`.

SHA-256 do trecho: `e4ffc87413d1a1cc874a685243fd8285e18d9f6ab215eada5bbcd822807754a2`.

### evaluation:431057

Chamadas escritas diretamente neste corpo: `McpMetaToolServerList`, `jsx`, `jsxs`.

SHA-256 do trecho: `e4ffc87413d1a1cc874a685243fd8285e18d9f6ab215eada5bbcd822807754a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
