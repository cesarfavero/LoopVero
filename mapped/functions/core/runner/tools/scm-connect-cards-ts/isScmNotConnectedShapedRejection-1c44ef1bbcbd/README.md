# `isScmNotConnectedShapedRejection`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-connect-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509211-509213](../../../../../../../reference/runtime/host-main.cjs#L509211-L509213) | `FunctionDeclaration` | não | `rejection` |
| [evaluation:556936-556938](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556936-L556938) | `FunctionDeclaration` | não | `rejection` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509211-509213](../../../../../../../reference/runtime/host-main.cjs#L509211-L509213) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556936-556938](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556936-L556938) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509211

Chamadas escritas diretamente neste corpo: `/is not connected to your (account|team)/i.test`.

SHA-256 do trecho: `e16a429011a8fe7b221f6377e05a21fe8dcc73c573ca0f7c55b7359acbc0f3f0`.

### evaluation:556936

Chamadas escritas diretamente neste corpo: `/is not connected to your (account|team)/i.test`.

SHA-256 do trecho: `e16a429011a8fe7b221f6377e05a21fe8dcc73c573ca0f7c55b7359acbc0f3f0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
