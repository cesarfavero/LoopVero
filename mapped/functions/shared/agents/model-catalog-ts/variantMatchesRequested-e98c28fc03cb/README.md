# `variantMatchesRequested`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/model-catalog.ts` · [README do módulo](../../../../../modules/shared/agents/model-catalog-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:567577-567580](../../../../../../reference/runtime/sand-eval-runner.cjs#L567577-L567580) | `FunctionDeclaration` | não | `variant, requested` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:567577-567580](../../../../../../reference/runtime/sand-eval-runner.cjs#L567577-L567580) | 0 | 0 | 0 | 1 | 0 | 0 |

### evaluation:567577

Chamadas escritas diretamente neste corpo: `new Map`, `requested.every`, `variant.params.map`.

SHA-256 do trecho: `c10a3aff850fc392bef2435cc0fc552b4231410359e1609ef4ea58fb6d90412f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
