# `RevivingBackgroundWorkRegistry.recordWorkProvenance`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/background-work.ts` · [README do módulo](../../../../../modules/core/runner/background-work-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:490409-490413](../../../../../../reference/runtime/sand-eval-runner.cjs#L490409-L490413) | `method` | não | `id, provenance` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:490409-490413](../../../../../../reference/runtime/sand-eval-runner.cjs#L490409-L490413) | 2 | 0 | 0 | 1 | 0 | 0 |

### evaluation:490409

Chamadas escritas diretamente neste corpo: `spendRequestOwnsProvenance`, `this.provenance.delete`, `this.provenance.get`, `this.provenance.set`.

SHA-256 do trecho: `4776dd1b06fc4b558e2c9a251eba28b4c40811e3f870b5f238225a70f26da61e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
