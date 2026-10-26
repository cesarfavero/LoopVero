# `getTmuxBootstrapCommand`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/tmux-backed-shell-instructions.js` · [README do módulo](../../../../../modules/agent-engine/prompts/tmux-backed-shell-instructions-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:671675-671679](../../../../../../reference/runtime/host-main.cjs#L671675-L671679) | `FunctionDeclaration` | não | `{ sharedSessionName, selfHostedMachine = false } = {}` |
| [evaluation:465107-465111](../../../../../../reference/runtime/sand-eval-runner.cjs#L465107-L465111) | `FunctionDeclaration` | não | `{ sharedSessionName, selfHostedMachine = false } = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:671675-671679](../../../../../../reference/runtime/host-main.cjs#L671675-L671679) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:465107-465111](../../../../../../reference/runtime/sand-eval-runner.cjs#L465107-L465111) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:671675

Chamadas escritas diretamente neste corpo: `tmuxCommand`.

SHA-256 do trecho: `cb97efb2bbb7cedb9f787138c661f76ad23ce1f109828126a22df9086ecb8911`.

### evaluation:465107

Chamadas escritas diretamente neste corpo: `tmuxCommand`.

SHA-256 do trecho: `cb97efb2bbb7cedb9f787138c661f76ad23ce1f109828126a22df9086ecb8911`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
