# `TmuxBackedShellInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/tmux-backed-shell-instructions.js` · [README do módulo](../../../../../modules/agent-engine/prompts/tmux-backed-shell-instructions-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:671693-671696](../../../../../../reference/runtime/host-main.cjs#L671693-L671696) | `FunctionDeclaration` | não | `{ sharedSessionName, selfHostedMachine = false } = {}` |
| [evaluation:465125-465128](../../../../../../reference/runtime/sand-eval-runner.cjs#L465125-L465128) | `FunctionDeclaration` | não | `{ sharedSessionName, selfHostedMachine = false } = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:671693-671696](../../../../../../reference/runtime/host-main.cjs#L671693-L671696) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:465125-465128](../../../../../../reference/runtime/sand-eval-runner.cjs#L465125-L465128) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:671693

Chamadas escritas diretamente neste corpo: `getTmuxBootstrapCommand`, `jsx`, `jsxs`, `tmuxCommand`, `tmuxConfigGuidance`.

SHA-256 do trecho: `8cb11e9cd7b28a9b70c6fcfd70440729f7e72e57c5ee44c819d0557a0075e49b`.

### evaluation:465125

Chamadas escritas diretamente neste corpo: `getTmuxBootstrapCommand`, `jsx`, `jsxs`, `tmuxCommand`, `tmuxConfigGuidance`.

SHA-256 do trecho: `8cb11e9cd7b28a9b70c6fcfd70440729f7e72e57c5ee44c819d0557a0075e49b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
