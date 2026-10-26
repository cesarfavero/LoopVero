# `capabilitySections`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/prompts/README.md).

**Módulo:** `agent-engine/prompts/project-prompt.js` · [README do módulo](../../../../../modules/agent-engine/prompts/project-prompt-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:641108-641131](../../../../../../reference/runtime/host-main.cjs#L641108-L641131) | `FunctionDeclaration` | não | `options2` |
| [evaluation:431721-431744](../../../../../../reference/runtime/sand-eval-runner.cjs#L431721-L431744) | `FunctionDeclaration` | não | `options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:641108-641131](../../../../../../reference/runtime/host-main.cjs#L641108-L641131) | 4 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:431721-431744](../../../../../../reference/runtime/sand-eval-runner.cjs#L431721-L431744) | 4 | 0 | 0 | 1 | 0 | 0 |

### host:641108

Chamadas escritas diretamente neste corpo: `coordinatingWorkersSection`, `formatConsolidatedWakeGuidance`, `progressSection`, `resolvedSendMessageSection`, `sections.push`.

SHA-256 do trecho: `421bf171fb94b2de9eef8d75baf2ec3454dfcf89c3df4ce733921687f6b14dd5`.

### evaluation:431721

Chamadas escritas diretamente neste corpo: `coordinatingWorkersSection`, `formatConsolidatedWakeGuidance`, `progressSection`, `resolvedSendMessageSection`, `sections.push`.

SHA-256 do trecho: `421bf171fb94b2de9eef8d75baf2ec3454dfcf89c3df4ce733921687f6b14dd5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
