# `AlwaysAppliedWorkspaceRulesSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640064-640066](../../../../../../reference/runtime/host-main.cjs#L640064-L640066) | `FunctionDeclaration` | não | `{ globalRules, description: description9 = "These are workspace-level rules that the agent must always follow." }` |
| [evaluation:430678-430680](../../../../../../reference/runtime/sand-eval-runner.cjs#L430678-L430680) | `FunctionDeclaration` | não | `{ globalRules, description: description9 = "These are workspace-level rules that the agent must always follow." }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640064-640066](../../../../../../reference/runtime/host-main.cjs#L640064-L640066) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430678-430680](../../../../../../reference/runtime/sand-eval-runner.cjs#L430678-L430680) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:640064

Chamadas escritas diretamente neste corpo: `globalRules.map`, `jsx`.

SHA-256 do trecho: `d71367910cd7c07109b2543256d49dac64faf7344f937da1d8cf4aeebba65bd8`.

### evaluation:430678

Chamadas escritas diretamente neste corpo: `globalRules.map`, `jsx`.

SHA-256 do trecho: `d71367910cd7c07109b2543256d49dac64faf7344f937da1d8cf4aeebba65bd8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
