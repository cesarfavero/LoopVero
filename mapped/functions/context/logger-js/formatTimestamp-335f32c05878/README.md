# `formatTimestamp`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225458-225460](../../../../../reference/runtime/host-main.cjs#L225458-L225460) | `FunctionDeclaration` | não | `timestamp3` |
| [evaluation:1946-1948](../../../../../reference/runtime/sand-eval-runner.cjs#L1946-L1948) | `FunctionDeclaration` | não | `timestamp2` |
| [state-worker:21335-21337](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21335-L21337) | `FunctionDeclaration` | não | `timestamp` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225458-225460](../../../../../reference/runtime/host-main.cjs#L225458-L225460) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:1946-1948](../../../../../reference/runtime/sand-eval-runner.cjs#L1946-L1948) | 0 | 0 | 0 | 1 | 0 | 0 |
| [state-worker:21335-21337](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L21335-L21337) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225458

Chamadas escritas diretamente neste corpo: `.slice`, `timestamp3.toISOString`.

SHA-256 do trecho: `af09885bc92cee08d09de4d42c8f952834e3f494d99ad524d95d111ea4184018`.

### evaluation:1946

Chamadas escritas diretamente neste corpo: `.slice`, `timestamp2.toISOString`.

SHA-256 do trecho: `2412e97f43afa2572636fe020ebabb93622634bdb5e1fb87ce04ffe47c67fca7`.

### state-worker:21335

Chamadas escritas diretamente neste corpo: `.slice`, `timestamp.toISOString`.

SHA-256 do trecho: `e4521efebe293476a0db327d607208e72b8254c55cd6a938a9030ab6a7f8bcbe`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
