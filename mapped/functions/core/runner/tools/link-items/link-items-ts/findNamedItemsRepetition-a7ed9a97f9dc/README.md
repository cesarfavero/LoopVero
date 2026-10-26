# `findNamedItemsRepetition`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/link-items/link-items.ts` · [README do módulo](../../../../../../../modules/core/runner/tools/link-items/link-items-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:741153-741163](../../../../../../../../reference/runtime/host-main.cjs#L741153-L741163) | `FunctionDeclaration` | não | `lead, items` |
| [evaluation:482100-482110](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482100-L482110) | `FunctionDeclaration` | não | `lead, items` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:741153-741163](../../../../../../../../reference/runtime/host-main.cjs#L741153-L741163) | 3 | 0 | 0 | 4 | 0 | 0 |
| [evaluation:482100-482110](../../../../../../../../reference/runtime/sand-eval-runner.cjs#L482100-L482110) | 3 | 0 | 0 | 4 | 0 | 0 |

### host:741153

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `hrefsIn`, `items.hrefs.some`, `items.titles.map`, `lead.split`, `lead.toLowerCase`, `listLines.some`, `namedTitleCount`, `new Set`.

SHA-256 do trecho: `e6f0070c4fbf47bbb543ae4a53ee08ff99d9136072bc129b0715fc94d48f7192`.

### evaluation:482100

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `hrefsIn`, `items.hrefs.some`, `items.titles.map`, `lead.split`, `lead.toLowerCase`, `listLines.some`, `namedTitleCount`, `new Set`.

SHA-256 do trecho: `e6f0070c4fbf47bbb543ae4a53ee08ff99d9136072bc129b0715fc94d48f7192`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../../guide/methodology/README.md).
