# `SandBrainDocsStore.shardStores`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/brain-docs-store.ts` · [README do módulo](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629506-629513](../../../../../../reference/runtime/sand-eval-runner.cjs#L629506-L629513) | `method` | não | `shardsDir, overrides` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629506-629513](../../../../../../reference/runtime/sand-eval-runner.cjs#L629506-L629513) | 1 | 1 | 0 | 1 | 0 | 0 |

### evaluation:629506

Chamadas escritas diretamente neste corpo: `.map`, `.sort`, `ids.add`, `new Set`, `overrides.keys`, `this.boxFamilies.has`, `this.subdirectories`.

SHA-256 do trecho: `fad03852321e2984aa1986aaebc878ea51d53813ae2bf83689e3a72459d7e30a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
