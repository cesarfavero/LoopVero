# `renderReadResult2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/sand-messages-tools.ts` · [README do módulo](../../../../../../modules/core/runner/tools/sand-messages-tools-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:778042-778050](../../../../../../../reference/runtime/host-main.cjs#L778042-L778050) | `FunctionDeclaration` | não | `result, spansWholeHistory = false` |
| [evaluation:577777-577785](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577777-L577785) | `FunctionDeclaration` | não | `result, spansWholeHistory = false` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:778042-778050](../../../../../../../reference/runtime/host-main.cjs#L778042-L778050) | 3 | 0 | 0 | 3 | 0 | 0 |
| [evaluation:577777-577785](../../../../../../../reference/runtime/sand-eval-runner.cjs#L577777-L577785) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:778042

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `boundLegacyReadResult`, `truncationNotice`.

SHA-256 do trecho: `946f5196471ee3cd14a965f471db7148d0508139b7a86167ece84aa18286454a`.

### evaluation:577777

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `boundLegacyReadResult`, `truncationNotice`.

SHA-256 do trecho: `946f5196471ee3cd14a965f471db7148d0508139b7a86167ece84aa18286454a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
