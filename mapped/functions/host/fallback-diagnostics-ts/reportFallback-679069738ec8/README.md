# `reportFallback`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/observability/README.md).

**Módulo:** `host/fallback-diagnostics.ts` · [README do módulo](../../../../modules/host/fallback-diagnostics-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453494-453500](../../../../../reference/runtime/host-main.cjs#L453494-L453500) | `FunctionDeclaration` | não | `stage, error64` |
| [evaluation:627658-627664](../../../../../reference/runtime/sand-eval-runner.cjs#L627658-L627664) | `FunctionDeclaration` | não | `stage, error63` |
| [state-worker:723-729](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L723-L729) | `FunctionDeclaration` | não | `stage, error` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453494-453500](../../../../../reference/runtime/host-main.cjs#L453494-L453500) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:627658-627664](../../../../../reference/runtime/sand-eval-runner.cjs#L627658-L627664) | 1 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:723-729](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L723-L729) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:453494

Chamadas escritas diretamente neste corpo: `errorLogTag`, `reportHostDiagnostic`, `reported.add`, `reported.has`.

SHA-256 do trecho: `d0aef68942af888188246a803b90e20eb61681da2fb794e0f8c4576004fa4ab4`.

### evaluation:627658

Chamadas escritas diretamente neste corpo: `errorLogTag`, `reportHostDiagnostic`, `reported.add`, `reported.has`.

SHA-256 do trecho: `c0cfa3f9649b2825d1021162e996c61e166d7613fa68843bc798cd18a24941cd`.

### state-worker:723

Chamadas escritas diretamente neste corpo: `errorLogTag`, `reportHostDiagnostic`, `reported.add`, `reported.has`.

SHA-256 do trecho: `2962946a98f39bee511813d363d327b05acc0b8a3fb6003d7be584adc3ea62a2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
