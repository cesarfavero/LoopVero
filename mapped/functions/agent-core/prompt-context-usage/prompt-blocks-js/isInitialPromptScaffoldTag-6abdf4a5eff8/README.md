# `isInitialPromptScaffoldTag`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-core/prompt-context-usage/prompt-blocks.js` · [README do módulo](../../../../../modules/agent-core/prompt-context-usage/prompt-blocks-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:476160-476162](../../../../../../reference/runtime/host-main.cjs#L476160-L476162) | `FunctionDeclaration` | não | `tagName2` |
| [evaluation:255470-255472](../../../../../../reference/runtime/sand-eval-runner.cjs#L255470-L255472) | `FunctionDeclaration` | não | `tagName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:476160-476162](../../../../../../reference/runtime/host-main.cjs#L476160-L476162) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:255470-255472](../../../../../../reference/runtime/sand-eval-runner.cjs#L255470-L255472) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:476160

Chamadas escritas diretamente neste corpo: `INITIAL_PROMPT_SCAFFOLD_TAGS_NON_MCP.some`, `isToolDiscoveryBlockTag`.

SHA-256 do trecho: `5f06d3ffda0ed3b5e866fa271f16da7a08d920709014119746e9fd99c7637a4a`.

### evaluation:255470

Chamadas escritas diretamente neste corpo: `INITIAL_PROMPT_SCAFFOLD_TAGS_NON_MCP.some`, `isToolDiscoveryBlockTag`.

SHA-256 do trecho: `f0a381a0b97e398ffe590b9ace1376a51182ae1870616a88492413cf4c1a4b64`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
