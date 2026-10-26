# `../packages/context/dist/core.js/_ContextImpl.withTimeoutAndCancel`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/core.js` · [README do módulo](../../../../modules/context/core-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225352-225356](../../../../../reference/runtime/host-main.cjs#L225352-L225356) | `method` | não | `ms2` |
| [evaluation:1840-1844](../../../../../reference/runtime/sand-eval-runner.cjs#L1840-L1844) | `method` | não | `ms2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225352-225356](../../../../../reference/runtime/host-main.cjs#L225352-L225356) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:1840-1844](../../../../../reference/runtime/sand-eval-runner.cjs#L1840-L1844) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225352

Chamadas escritas diretamente neste corpo: `cancelCtx.withTimeout`, `this.withCancel`.

SHA-256 do trecho: `f9675c0fa066a28dcc3e80742d5c7fcae8299fca02c58ff60adf791fef403cfb`.

### evaluation:1840

Chamadas escritas diretamente neste corpo: `cancelCtx.withTimeout`, `this.withCancel`.

SHA-256 do trecho: `f9675c0fa066a28dcc3e80742d5c7fcae8299fca02c58ff60adf791fef403cfb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
