# `_CsnapsProcess.rejectPendingRequests`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/codebase-telemetry/csnaps-process.ts` · [README do módulo](../../../../../../modules/host/extensions/codebase-telemetry/csnaps-process-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:541629-541635](../../../../../../../reference/runtime/host-main.cjs#L541629-L541635) | `method` | não | `error64` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:541629-541635](../../../../../../../reference/runtime/host-main.cjs#L541629-L541635) | 0 | 1 | 0 | 0 | 0 | 0 |

### host:541629

Chamadas escritas diretamente neste corpo: `pending.reject`, `pending.signal.removeEventListener`, `this.pendingRequests.clear`, `this.pendingRequests.values`.

SHA-256 do trecho: `eae157751c83c449ded3b26afdc4932edd7263dd8d7810361deb81317bc57cf2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
