# `wrapReadExecutorForFileTransferAudit/execute`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/action-audit/file-transfer-audit.ts` · [README do módulo](../../../../../../modules/core/runner/action-audit/file-transfer-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:569150-569166](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569150-L569166) | `ArrowFunctionExpression` | sim | `ctx, args, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:569150-569166](../../../../../../../reference/runtime/sand-eval-runner.cjs#L569150-L569166) | 1 | 0 | 1 | 1 | 1 | 1 |

### evaluation:569150

Chamadas escritas diretamente neste corpo: `bindFileTransferAudit`, `failedFileTransferResult`, `inner.execute`, `readFileTransferResult`, `record4`, `resolveMachineId2`.

Alvos de atribuição ou incremento: `result`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `365c285ef0bad197c505c6a2faac591b9efbe6f61c8dada1bf5286a3967746ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
