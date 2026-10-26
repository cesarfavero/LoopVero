# `SandInvariantViolation.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `shared/invariant.ts` · [README do módulo](../../../../modules/shared/invariant-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:474307-474310](../../../../../reference/runtime/sand-eval-runner.cjs#L474307-L474310) | `method` | não | `message` |
| [state-worker:31-34](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L31-L34) | `method` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:474307-474310](../../../../../reference/runtime/sand-eval-runner.cjs#L474307-L474310) | 0 | 0 | 0 | 0 | 0 | 0 |
| [state-worker:31-34](../../../../../reference/runtime/workers/state/agent-store-worker.cjs#L31-L34) | 0 | 0 | 0 | 0 | 0 | 0 |

### evaluation:474307

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.name`.

SHA-256 do trecho: `6cabc5d08ccd6f8fbff9cf7233597dd8e02bd9beb17d62ffebaf0b93f8f05e8a`.

### state-worker:31

Chamadas escritas diretamente neste corpo: `super`.

Alvos de atribuição ou incremento: `this.name`.

SHA-256 do trecho: `6cabc5d08ccd6f8fbff9cf7233597dd8e02bd9beb17d62ffebaf0b93f8f05e8a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
