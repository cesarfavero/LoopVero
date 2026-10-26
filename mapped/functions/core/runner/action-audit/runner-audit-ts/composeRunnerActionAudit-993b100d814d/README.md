# `composeRunnerActionAudit`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/action-audit/runner-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/runner-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490031-490054](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490031-L490054) | `FunctionDeclaration` | não | `options2, initiatedBy, navigation` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490031-490054](../../../../../../../reference/runtime/sand-eval-runner.cjs#L490031-L490054) | 3 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490031

Chamadas escritas diretamente neste corpo: `createActionAuditSequencer`, `navigation`, `new ToolDecisionAudit`, `new ToolTargetLedger`, `withEventSequence`, `withInitiatedBy`, `withToolDecisions`.

SHA-256 do trecho: `db646bec9a9e4a239ddb7239d5fb9e7b58ff1b0b400a069d722120ef9262771a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
