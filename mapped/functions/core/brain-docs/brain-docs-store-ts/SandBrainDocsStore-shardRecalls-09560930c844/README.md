# `SandBrainDocsStore.shardRecalls`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/brain-docs-store.ts` · [README do módulo](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629514-629522](../../../../../../reference/runtime/sand-eval-runner.cjs#L629514-L629522) | `method` | não | `shardsDir, recentLimit, overrides` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629514-629522](../../../../../../reference/runtime/sand-eval-runner.cjs#L629514-L629522) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:629514

Chamadas escritas diretamente neste corpo: `shards.push`, `store.recall`, `this.shardStores`, `this.shardVia`.

SHA-256 do trecho: `3a00434a2ae7749ebf40ced0a5f1966b61264663a16118201c46c67fb9165565`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
