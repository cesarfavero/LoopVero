# `escapeEventText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:528218-528220](../../../../../../reference/runtime/sand-eval-runner.cjs#L528218-L528220) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528218-528220](../../../../../../reference/runtime/sand-eval-runner.cjs#L528218-L528220) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:528218

Chamadas escritas diretamente neste corpo: `.replace`, `value.replace`.

SHA-256 do trecho: `9f6d2988c7d1a7841405d13df8b341470a50b429c5a9c3def501e73c1783e8fb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
