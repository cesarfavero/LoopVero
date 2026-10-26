# `formatProjectPrompt`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641174-641207](../../../../../../reference/runtime/host-main.cjs#L641174-L641207) | `FunctionDeclaration` | não | `kind, options2 = {}` |
| [evaluation:431787-431820](../../../../../../reference/runtime/sand-eval-runner.cjs#L431787-L431820) | `FunctionDeclaration` | não | `kind, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641174-641207](../../../../../../reference/runtime/host-main.cjs#L641174-L641207) | 8 | 0 | 0 | 4 | 1 | 0 |
| [evaluation:431787-431820](../../../../../../reference/runtime/sand-eval-runner.cjs#L431787-L431820) | 8 | 0 | 0 | 4 | 1 | 0 |

### host:641174

Chamadas escritas diretamente neste corpo: `formatFirstProjectOnboardingOverlay`, `new Error`, `openingLine`, `promptOverrideOrDefault`, `rootPromptFrom`, `suppliedBody`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `732e31dc1bcc3c15cd2fcd077ac0c4adc7e7893055b4683f32e4379ee8478182`.

### evaluation:431787

Chamadas escritas diretamente neste corpo: `formatFirstProjectOnboardingOverlay`, `new Error`, `openingLine`, `promptOverrideOrDefault`, `rootPromptFrom`, `suppliedBody`.

Alvos de lançamento explícito: `Error`.

SHA-256 do trecho: `732e31dc1bcc3c15cd2fcd077ac0c4adc7e7893055b4683f32e4379ee8478182`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
