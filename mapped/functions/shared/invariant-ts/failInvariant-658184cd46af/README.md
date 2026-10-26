# `failInvariant`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `shared/invariant.ts` · [README do módulo](../../../../modules/shared/invariant-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:854-871](../../../../../reference/runtime/host-main.cjs#L854-L871) | `FunctionDeclaration` | não | `message, boundary` |
| [evaluation:474335-474352](../../../../../reference/runtime/sand-eval-runner.cjs#L474335-L474352) | `FunctionDeclaration` | não | `message, boundary` |
| [state-worker:59-76](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L59-L76) | `FunctionDeclaration` | não | `message, boundary` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:854-871](../../../../../reference/runtime/host-main.cjs#L854-L871) | 4 | 0 | 0 | 0 | 1 | 0 |
| [evaluation:474335-474352](../../../../../reference/runtime/sand-eval-runner.cjs#L474335-L474352) | 4 | 0 | 0 | 0 | 1 | 0 |
| [state-worker:59-76](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L59-L76) | 4 | 0 | 0 | 0 | 1 | 0 |

### host:854

Chamadas escritas diretamente neste corpo: `Error.captureStackTrace`, `installedReporter`, `message`, `messagesStripped`, `new SandInvariantViolation`, `topApplicationFrame`.

Alvos de atribuição ou incremento: `frame`, `violationMessage`.

Alvos de lançamento explícito: `violation`.

SHA-256 do trecho: `71a8447d740ebbf37f661038b4a8afd540b96a153cb785647a370089d8473835`.

### evaluation:474335

Chamadas escritas diretamente neste corpo: `Error.captureStackTrace`, `installedReporter`, `message`, `messagesStripped`, `new SandInvariantViolation`, `topApplicationFrame`.

Alvos de atribuição ou incremento: `frame`, `violationMessage`.

Alvos de lançamento explícito: `violation`.

SHA-256 do trecho: `71a8447d740ebbf37f661038b4a8afd540b96a153cb785647a370089d8473835`.

### state-worker:59

Chamadas escritas diretamente neste corpo: `Error.captureStackTrace`, `installedReporter`, `message`, `messagesStripped`, `new SandInvariantViolation`, `topApplicationFrame`.

Alvos de atribuição ou incremento: `frame`, `violationMessage`.

Alvos de lançamento explícito: `violation`.

SHA-256 do trecho: `71a8447d740ebbf37f661038b4a8afd540b96a153cb785647a370089d8473835`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
