# `reachableOriginsOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/isolated-deployment.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451578-451585](../../../../../../../reference/runtime/host-main.cjs#L451578-L451585) | `FunctionDeclaration` | não | `urls` |
| [evaluation:597124-597131](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597124-L597131) | `FunctionDeclaration` | não | `urls` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451578-451585](../../../../../../../reference/runtime/host-main.cjs#L451578-L451585) | 2 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:597124-597131](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597124-L597131) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:451578

Chamadas escritas diretamente neste corpo: `URL.parse`, `httpOriginOf`, `new Set`, `origins.add`, `raw.trim`.

SHA-256 do trecho: `bdbd85c1ebf56d1759726b55f6205d8e7f1a0b67ebb0ec0954c2e8a37d2b02b7`.

### evaluation:597124

Chamadas escritas diretamente neste corpo: `URL.parse`, `httpOriginOf`, `new Set`, `origins.add`, `raw.trim`.

SHA-256 do trecho: `946939a5497801b364b1eef09803215f8e49dee2a4148e3430b1b3a34d2de36a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
