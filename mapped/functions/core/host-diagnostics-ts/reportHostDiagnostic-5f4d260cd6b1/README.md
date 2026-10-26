# `reportHostDiagnostic`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/observability/README.md).

**Módulo:** `core/host-diagnostics.ts` · [README do módulo](../../../../modules/core/host-diagnostics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:430746-430748](../../../../../reference/runtime/host-main.cjs#L430746-L430748) | `FunctionDeclaration` | não | `diagnostic` |
| [evaluation:479618-479620](../../../../../reference/runtime/sand-eval-runner.cjs#L479618-L479620) | `FunctionDeclaration` | não | `diagnostic` |
| [state-worker:717-719](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L717-L719) | `FunctionDeclaration` | não | `diagnostic` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:430746-430748](../../../../../reference/runtime/host-main.cjs#L430746-L430748) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:479618-479620](../../../../../reference/runtime/sand-eval-runner.cjs#L479618-L479620) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:717-719](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L717-L719) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:430746

Chamadas escritas diretamente neste corpo: `pinnedReporter`.

SHA-256 do trecho: `ed33d417708cc5e7e2c1e95b0e827a1f38b7243a1be34570d79b13df1d10ed9a`.

### evaluation:479618

Chamadas escritas diretamente neste corpo: `pinnedReporter`.

SHA-256 do trecho: `ed33d417708cc5e7e2c1e95b0e827a1f38b7243a1be34570d79b13df1d10ed9a`.

### state-worker:717

Chamadas escritas diretamente neste corpo: `pinnedReporter`.

SHA-256 do trecho: `ed33d417708cc5e7e2c1e95b0e827a1f38b7243a1be34570d79b13df1d10ed9a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
