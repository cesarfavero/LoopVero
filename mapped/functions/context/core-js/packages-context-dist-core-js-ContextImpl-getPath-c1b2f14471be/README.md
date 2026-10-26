# `../packages/context/dist/core.js/_ContextImpl.getPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/core.js` · [README do módulo](../../../../modules/context/core-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225366-225376](../../../../../reference/runtime/host-main.cjs#L225366-L225376) | `method` | não | `(nenhum)` |
| [evaluation:1854-1864](../../../../../reference/runtime/sand-eval-runner.cjs#L1854-L1864) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225366-225376](../../../../../reference/runtime/host-main.cjs#L225366-L225376) | 1 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:1854-1864](../../../../../reference/runtime/sand-eval-runner.cjs#L1854-L1864) | 1 | 1 | 0 | 1 | 0 | 0 |

### host:225366

Chamadas escritas diretamente neste corpo: `current2.getParent`, `path33.unshift`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `a1d36da83fc6b57c6132880daf0830ffbc02ad08045ea787b637cc9e398344fb`.

### evaluation:1854

Chamadas escritas diretamente neste corpo: `current2.getParent`, `path33.unshift`.

Alvos de atribuição ou incremento: `current2`.

SHA-256 do trecho: `a1d36da83fc6b57c6132880daf0830ffbc02ad08045ea787b637cc9e398344fb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
