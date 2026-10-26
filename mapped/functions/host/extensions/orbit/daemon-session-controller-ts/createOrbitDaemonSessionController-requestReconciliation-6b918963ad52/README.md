# `createOrbitDaemonSessionController/requestReconciliation`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/orbit/daemon-session-controller.ts` · [README do módulo](../../../../../../modules/host/extensions/orbit/daemon-session-controller-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:705718-705734](../../../../../../../reference/runtime/host-main.cjs#L705718-L705734) | `FunctionDeclaration` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:705718-705734](../../../../../../../reference/runtime/host-main.cjs#L705718-L705734) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:705718

Chamadas escritas diretamente neste corpo: `.then`, `cancelScheduledWake`, `drainReconciliation`.

Alvos de atribuição ou incremento: `running`, `state.reconciliationPromise`, `state.reconciliationRequested`.

SHA-256 do trecho: `ee441ad682417dd8abc746c4cbc806a32432aba3f06e9d9c21d20d58dca1709b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
