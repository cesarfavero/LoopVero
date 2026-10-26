# `mergeUserMemoryShards`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/memory/README.md).

**Módulo:** `core/runner/sand-memory.ts` · [README do módulo](../../../../../modules/core/runner/sand-memory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:536407-536442](../../../../../../reference/runtime/sand-eval-runner.cjs#L536407-L536442) | `FunctionDeclaration` | não | `shards, limits, ownAgentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:536407-536442](../../../../../../reference/runtime/sand-eval-runner.cjs#L536407-L536442) | 1 | 0 | 0 | 2 | 0 | 0 |

### evaluation:536407

Chamadas escritas diretamente neste corpo: `.map`, `JSON.stringify`, `merge4`, `sha256HexOfText`, `shards.filter`, `shards.some`.

SHA-256 do trecho: `fb5f96b7b26d65cf59e5c5e44ca74be368d2a36d725a407bfe799251711f0060`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
