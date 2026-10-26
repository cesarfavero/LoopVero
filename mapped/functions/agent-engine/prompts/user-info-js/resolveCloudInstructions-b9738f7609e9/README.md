# `resolveCloudInstructions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/user-info.js` · [README do módulo](../../../../../modules/agent-engine/prompts/user-info-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:640405-640423](../../../../../../reference/runtime/host-main.cjs#L640405-L640423) | `FunctionDeclaration` | não | `cloudRuleContent, renderedGlobalRuleBodies` |
| [evaluation:431019-431037](../../../../../../reference/runtime/sand-eval-runner.cjs#L431019-L431037) | `FunctionDeclaration` | não | `cloudRuleContent, renderedGlobalRuleBodies` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:640405-640423](../../../../../../reference/runtime/host-main.cjs#L640405-L640423) | 4 | 1 | 0 | 4 | 0 | 0 |
| [evaluation:431019-431037](../../../../../../reference/runtime/sand-eval-runner.cjs#L431019-L431037) | 4 | 1 | 0 | 4 | 0 | 0 |

### host:640405

Chamadas escritas diretamente neste corpo: `.trimStart`, `cloudRuleContent.trim`, `renderedGlobalRuleBodies.some`, `tail.startsWith`, `trimmed.slice`, `trimmed.startsWith`.

SHA-256 do trecho: `a3bf21a91c5c2d815fcaf843f451553a15d687ce3b6a542e7bcda4362fc0083e`.

### evaluation:431019

Chamadas escritas diretamente neste corpo: `.trimStart`, `cloudRuleContent.trim`, `renderedGlobalRuleBodies.some`, `tail.startsWith`, `trimmed.slice`, `trimmed.startsWith`.

SHA-256 do trecho: `a3bf21a91c5c2d815fcaf843f451553a15d687ce3b6a542e7bcda4362fc0083e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
