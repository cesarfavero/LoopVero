# `GitOrNoRepositoryInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/cloud-agent.js` · [README do módulo](../../../../../modules/agent-engine/prompts/cloud-agent-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:636218-636220](../../../../../../reference/runtime/host-main.cjs#L636218-L636220) | `FunctionDeclaration` | não | `{ isRepoless, repolessPromptVariant, gitInstructionsProps }` |
| [evaluation:424274-424276](../../../../../../reference/runtime/sand-eval-runner.cjs#L424274-L424276) | `FunctionDeclaration` | não | `{ isRepoless, repolessPromptVariant, gitInstructionsProps }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:636218-636220](../../../../../../reference/runtime/host-main.cjs#L636218-L636220) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:424274-424276](../../../../../../reference/runtime/sand-eval-runner.cjs#L424274-L424276) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:636218

Chamadas escritas diretamente neste corpo: `GitInstructions`, `NoRepositoryAccessInstructions`.

SHA-256 do trecho: `3c944fe4aec8180a3a82f27278d77bdbfa82b8d69d6e052d397d1a43c44bc427`.

### evaluation:424274

Chamadas escritas diretamente neste corpo: `GitInstructions`, `NoRepositoryAccessInstructions`.

SHA-256 do trecho: `3c944fe4aec8180a3a82f27278d77bdbfa82b8d69d6e052d397d1a43c44bc427`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
