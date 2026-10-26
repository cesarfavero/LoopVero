# `getTmuxBackedShellSessionsSectionText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/tmux-backed-shell-instructions.js` · [README do módulo](../../../../../modules/agent-engine/prompts/tmux-backed-shell-instructions-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:671680-671692](../../../../../../reference/runtime/host-main.cjs#L671680-L671692) | `FunctionDeclaration` | não | `{ sharedSessionName, selfHostedMachine = false } = {}` |
| [evaluation:465112-465124](../../../../../../reference/runtime/sand-eval-runner.cjs#L465112-L465124) | `FunctionDeclaration` | não | `{ sharedSessionName, selfHostedMachine = false } = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:671680-671692](../../../../../../reference/runtime/host-main.cjs#L671680-L671692) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:465112-465124](../../../../../../reference/runtime/sand-eval-runner.cjs#L465112-L465124) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:671680

Chamadas escritas diretamente neste corpo: `getTmuxBootstrapCommand`, `tmuxCommand`, `tmuxConfigGuidance`.

SHA-256 do trecho: `a5615d33773171fdfc0896432df04731e229b1f69b8e10c1958f71ac728d5cd0`.

### evaluation:465112

Chamadas escritas diretamente neste corpo: `getTmuxBootstrapCommand`, `tmuxCommand`, `tmuxConfigGuidance`.

SHA-256 do trecho: `a5615d33773171fdfc0896432df04731e229b1f69b8e10c1958f71ac728d5cd0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
