# `escapeProjectName`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640964-640967](../../../../../../reference/runtime/host-main.cjs#L640964-L640967) | `FunctionDeclaration` | não | `projectName` |
| [evaluation:431577-431580](../../../../../../reference/runtime/sand-eval-runner.cjs#L431577-L431580) | `FunctionDeclaration` | não | `projectName` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640964-640967](../../../../../../reference/runtime/host-main.cjs#L640964-L640967) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431577-431580](../../../../../../reference/runtime/sand-eval-runner.cjs#L431577-L431580) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:640964

Chamadas escritas diretamente neste corpo: `escapeForPrompt`, `normalizeProjectName`.

SHA-256 do trecho: `5256a8f28aa7a19a8b80ee58475289abcd8ca8cd8ce1ceedc974a1d9907e770f`.

### evaluation:431577

Chamadas escritas diretamente neste corpo: `escapeForPrompt`, `normalizeProjectName`.

SHA-256 do trecho: `5256a8f28aa7a19a8b80ee58475289abcd8ca8cd8ce1ceedc974a1d9907e770f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
