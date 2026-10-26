# `MemoryFolderView.listMemories`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/brain-docs/brain-docs-store.ts` · [README do módulo](../../../../../modules/core/brain-docs/brain-docs-store-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:629278-629284](../../../../../../reference/runtime/sand-eval-runner.cjs#L629278-L629284) | `method` | não | `limit3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:629278-629284](../../../../../../reference/runtime/sand-eval-runner.cjs#L629278-L629284) | 2 | 0 | 0 | 2 | 0 | 0 |

### evaluation:629278

Chamadas escritas diretamente neste corpo: `.map`, `.slice`, `.sort`, `Math.floor`, `Number.isFinite`, `this.facts`.

SHA-256 do trecho: `3c1ffb34f05496d57c06933d371602527aef50bbf1eb7ce6b83efea579b9d0dd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
