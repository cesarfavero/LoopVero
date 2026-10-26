# `createChildController/abort`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/core.js` · [README do módulo](../../../../modules/context/core-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225268-225271](../../../../../reference/runtime/host-main.cjs#L225268-L225271) | `FunctionExpression` | não | `reason` |
| [evaluation:1756-1759](../../../../../reference/runtime/sand-eval-runner.cjs#L1756-L1759) | `FunctionExpression` | não | `reason` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225268-225271](../../../../../reference/runtime/host-main.cjs#L225268-L225271) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:1756-1759](../../../../../reference/runtime/sand-eval-runner.cjs#L1756-L1759) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225268

Chamadas escritas diretamente neste corpo: `controller.abort`, `parentSignal.removeEventListener`.

SHA-256 do trecho: `43503bc75305f202e579f1a10db8dc2d7ed1a2d36969a7f24f931f3863c2b704`.

### evaluation:1756

Chamadas escritas diretamente neste corpo: `controller.abort`, `parentSignal.removeEventListener`.

SHA-256 do trecho: `43503bc75305f202e579f1a10db8dc2d7ed1a2d36969a7f24f931f3863c2b704`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
