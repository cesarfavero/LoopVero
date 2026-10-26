# `namedTitleCount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/link-items/link-items.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741140-741152](../../../../../../../../reference/runtime/host-main.cjs#L741140-L741152) | `FunctionDeclaration` | não | `text3, titles` |
| [evaluation:482087-482099](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482087-L482099) | `FunctionDeclaration` | não | `text3, titles` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741140-741152](../../../../../../../../reference/runtime/host-main.cjs#L741140-L741152) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:482087-482099](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482087-L482099) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:741140

Chamadas escritas diretamente neste corpo: `.filter`, `.sort`, `claimed.push`, `spansOf`.

Alvos de atribuição ou incremento: `named2`.

SHA-256 do trecho: `7df8677f1076b82cca9fde5fcb1186364c4c3c85914f2a5213d631ae5d6b46ec`.

### evaluation:482087

Chamadas escritas diretamente neste corpo: `.filter`, `.sort`, `claimed.push`, `spansOf`.

Alvos de atribuição ou incremento: `named2`.

SHA-256 do trecho: `7df8677f1076b82cca9fde5fcb1186364c4c3c85914f2a5213d631ae5d6b46ec`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
