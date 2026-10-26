# `automationTriggerSchema`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/state-tools/trigger-schema.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/state-tools/trigger-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:762341-762472](../../../../../../../../reference/runtime/host-main.cjs#L762341-L762472) | `FunctionDeclaration` | não | `copy` |
| [evaluation:554951-555082](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554951-L555082) | `FunctionDeclaration` | não | `copy` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:762341-762472](../../../../../../../../reference/runtime/host-main.cjs#L762341-L762472) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:554951-555082](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L554951-L555082) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:762341

Chamadas escritas diretamente neste corpo: `.describe`, `.int`, `.min`, `.optional`, `.positive`, `.superRefine`, `.trim`, `automationSchedule.describe`, `described`, `external_exports2.array`, `external_exports2.boolean`, `external_exports2.discriminatedUnion`, `external_exports2.enum`, `external_exports2.literal`, `external_exports2.number`, `external_exports2.object`, `external_exports2.preprocess`, `external_exports2.string`, `external_exports2.union`, `linearTriggerSchema`.

SHA-256 do trecho: `bacf26c25a3679ce8f88f6592134bc195b7fc60dcb067d80f93d2a62b1b87619`.

### evaluation:554951

Chamadas escritas diretamente neste corpo: `.describe`, `.int`, `.min`, `.optional`, `.positive`, `.superRefine`, `.trim`, `automationSchedule.describe`, `described`, `external_exports3.array`, `external_exports3.boolean`, `external_exports3.discriminatedUnion`, `external_exports3.enum`, `external_exports3.literal`, `external_exports3.number`, `external_exports3.object`, `external_exports3.preprocess`, `external_exports3.string`, `external_exports3.union`, `linearTriggerSchema`.

SHA-256 do trecho: `bbf37e6cba417de2dc1a0990d299fd820a847674c84c95d847fbcd77d98a2f6d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
