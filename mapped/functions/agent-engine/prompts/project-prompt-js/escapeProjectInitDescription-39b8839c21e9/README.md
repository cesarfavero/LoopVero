# `escapeProjectInitDescription`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640968-640974](../../../../../../reference/runtime/host-main.cjs#L640968-L640974) | `FunctionDeclaration` | não | `initDescription` |
| [evaluation:431581-431587](../../../../../../reference/runtime/sand-eval-runner.cjs#L431581-L431587) | `FunctionDeclaration` | não | `initDescription` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640968-640974](../../../../../../reference/runtime/host-main.cjs#L640968-L640974) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:431581-431587](../../../../../../reference/runtime/sand-eval-runner.cjs#L431581-L431587) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:640968

Chamadas escritas diretamente neste corpo: `.join`, `.slice`, `collapseWhitespace`, `escapeForPrompt`.

SHA-256 do trecho: `a849bf88139fcfba7b1af89739878afb0e1b427dd319e71941edf66f6ad3d5f4`.

### evaluation:431581

Chamadas escritas diretamente neste corpo: `.join`, `.slice`, `collapseWhitespace`, `escapeForPrompt`.

SHA-256 do trecho: `a849bf88139fcfba7b1af89739878afb0e1b427dd319e71941edf66f6ad3d5f4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
