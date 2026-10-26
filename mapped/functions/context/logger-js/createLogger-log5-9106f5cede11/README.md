# `createLogger/log5`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `context/logger.js` · [README do módulo](../../../../modules/context/logger-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:225713-225717](../../../../../reference/runtime/host-main.cjs#L225713-L225717) | `FunctionDeclaration` | não | `ctx, entry` |
| [evaluation:2201-2205](../../../../../reference/runtime/sand-eval-runner.cjs#L2201-L2205) | `FunctionDeclaration` | não | `ctx, entry` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:225713-225717](../../../../../reference/runtime/host-main.cjs#L225713-L225717) | 0 | 0 | 0 | 0 | 0 | 0 |
| [evaluation:2201-2205](../../../../../reference/runtime/sand-eval-runner.cjs#L2201-L2205) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:225713

Chamadas escritas diretamente neste corpo: `getLoggerBackend`, `logger132.log`, `new Date`.

SHA-256 do trecho: `5a286549a792e4c4514d0dc998a5f4f63896e7fcd641d2847531bea3b2f091ed`.

### evaluation:2201

Chamadas escritas diretamente neste corpo: `getLoggerBackend`, `logger132.log`, `new Date`.

SHA-256 do trecho: `e29107193e4a5602c24832c4c72a414184d885439c7e7dc5371cc247fe05aa34`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
