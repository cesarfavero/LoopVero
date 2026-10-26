# `../packages/context/dist/core.js/_ContextImpl.withTimeout`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/core.js` · [README do módulo](../../../../modules/context/core-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225328-225338](../../../../../reference/runtime/host-main.cjs#L225328-L225338) | `method` | não | `ms2` |
| [evaluation:1816-1826](../../../../../reference/runtime/sand-eval-runner.cjs#L1816-L1826) | `method` | não | `ms2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225328-225338](../../../../../reference/runtime/host-main.cjs#L225328-L225338) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:1816-1826](../../../../../reference/runtime/sand-eval-runner.cjs#L1816-L1826) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:225328

Chamadas escritas diretamente neste corpo: `controller.signal.addEventListener`, `createChildController`, `new _ContextImpl`, `setTimeout`.

SHA-256 do trecho: `81ba287e415a7616c6cee6219ec10c9b9db8662b8f48fe58981b4fa5e0a421e0`.

### evaluation:1816

Chamadas escritas diretamente neste corpo: `controller.signal.addEventListener`, `createChildController`, `new _ContextImpl`, `setTimeout`.

SHA-256 do trecho: `81ba287e415a7616c6cee6219ec10c9b9db8662b8f48fe58981b4fa5e0a421e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
