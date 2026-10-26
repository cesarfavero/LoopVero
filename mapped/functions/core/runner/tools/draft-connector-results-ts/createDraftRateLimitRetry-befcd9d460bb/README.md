# `createDraftRateLimitRetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-connector-results.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-connector-results-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:733001-733014](../../../../../../../reference/runtime/host-main.cjs#L733001-L733014) | `FunctionDeclaration` | não | `clock = realClock` |
| [evaluation:540523-540536](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540523-L540536) | `FunctionDeclaration` | não | `clock = realClock` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:733001-733014](../../../../../../../reference/runtime/host-main.cjs#L733001-L733014) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:540523-540536](../../../../../../../reference/runtime/sand-eval-runner.cjs#L540523-L540536) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:733001

Chamadas escritas diretamente neste corpo: `createRetryPolicy`.

SHA-256 do trecho: `2fddfb8b4d96b3f604d6c0487bd9a5138e438c230589c65f2255aa97f9d0cf63`.

### evaluation:540523

Chamadas escritas diretamente neste corpo: `createRetryPolicy`.

SHA-256 do trecho: `2fddfb8b4d96b3f604d6c0487bd9a5138e438c230589c65f2255aa97f9d0cf63`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
