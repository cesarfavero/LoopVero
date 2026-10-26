# `mintTraceparent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/send-trace.ts` · [README do módulo](../../../../../modules/shared/observability/send-trace-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:528684-528693](../../../../../../reference/runtime/sand-eval-runner.cjs#L528684-L528693) | `FunctionDeclaration` | não | `sampled = true` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:528684-528693](../../../../../../reference/runtime/sand-eval-runner.cjs#L528684-L528693) | 1 | 0 | 0 | 2 | 0 | 1 |

### evaluation:528684

Chamadas escritas diretamente neste corpo: `randomHex`.

SHA-256 do trecho: `a865dfc79b73d51c086c0303ab6fa3f9645568609194d872eb6107e3f65ff6f6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
