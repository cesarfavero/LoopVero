# `automationToolNameToSnakeCase`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/automations/README.md).

**Módulo:** `agent-engine/prompts/bugbot/automations.js` · [README do módulo](../../../../../../modules/agent-engine/prompts/bugbot/automations-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:631414-631416](../../../../../../../reference/runtime/host-main.cjs#L631414-L631416) | `FunctionDeclaration` | não | `name18` |
| [evaluation:410599-410601](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410599-L410601) | `FunctionDeclaration` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:631414-631416](../../../../../../../reference/runtime/host-main.cjs#L631414-L631416) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:410599-410601](../../../../../../../reference/runtime/sand-eval-runner.cjs#L410599-L410601) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:631414

Chamadas escritas diretamente neste corpo: `.replace`, `.toLowerCase`, `name18.replace`.

SHA-256 do trecho: `bc44aac59db69659b3bad6ce03f1d322e1cbc28ae2cc4510551e6741244c58bf`.

### evaluation:410599

Chamadas escritas diretamente neste corpo: `.replace`, `.toLowerCase`, `name18.replace`.

SHA-256 do trecho: `bc44aac59db69659b3bad6ce03f1d322e1cbc28ae2cc4510551e6741244c58bf`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
