# `../packages/context/dist/core.js/_ContextImpl.constructor`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/core.js` · [README do módulo](../../../../modules/context/core-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225291-225302](../../../../../reference/runtime/host-main.cjs#L225291-L225302) | `method` | não | `parent, signal, values, name18` |
| [evaluation:1779-1790](../../../../../reference/runtime/sand-eval-runner.cjs#L1779-L1790) | `method` | não | `parent, signal, values, name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225291-225302](../../../../../reference/runtime/host-main.cjs#L225291-L225302) | 2 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:1779-1790](../../../../../reference/runtime/sand-eval-runner.cjs#L1779-L1790) | 2 | 0 | 0 | 0 | 0 | 0 |

### host:225291

Chamadas escritas diretamente neste corpo: `new AbortController`, `new Map`.

Alvos de atribuição ou incremento: `this.name`, `this.parent`, `this.signal`, `this.values`.

SHA-256 do trecho: `2f459e13a17bac4f925d919e7261781f4d1c78aae8c9df801a70623f9fde40ae`.

### evaluation:1779

Chamadas escritas diretamente neste corpo: `new AbortController`, `new Map`.

Alvos de atribuição ou incremento: `this.name`, `this.parent`, `this.signal`, `this.values`.

SHA-256 do trecho: `2f459e13a17bac4f925d919e7261781f4d1c78aae8c9df801a70623f9fde40ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
