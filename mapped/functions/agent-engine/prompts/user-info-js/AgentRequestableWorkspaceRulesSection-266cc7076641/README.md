# `AgentRequestableWorkspaceRulesSection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640067-640075](../../../../../../reference/runtime/host-main.cjs#L640067-L640075) | `FunctionDeclaration` | não | `{ agentRequestableRules, readToolName }` |
| [evaluation:430681-430689](../../../../../../reference/runtime/sand-eval-runner.cjs#L430681-L430689) | `FunctionDeclaration` | não | `{ agentRequestableRules, readToolName }` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640067-640075](../../../../../../reference/runtime/host-main.cjs#L640067-L640075) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:430681-430689](../../../../../../reference/runtime/sand-eval-runner.cjs#L430681-L430689) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:640067

Chamadas escritas diretamente neste corpo: `agentRequestableRules.map`, `jsx`.

SHA-256 do trecho: `46c756423c64ad27a4bdae9b2c60c062235a740d34530889e842e17b70468fb6`.

### evaluation:430681

Chamadas escritas diretamente neste corpo: `agentRequestableRules.map`, `jsx`.

SHA-256 do trecho: `46c756423c64ad27a4bdae9b2c60c062235a740d34530889e842e17b70468fb6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
