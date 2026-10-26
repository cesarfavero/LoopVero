# `sandIsolatedDeploymentOf/refuses`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `shared/node/cursor-backend/isolated-deployment.ts` · [README do módulo](../../../../../../modules/shared/node/cursor-backend/isolated-deployment-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451619-451623](../../../../../../../reference/runtime/host-main.cjs#L451619-L451623) | `ArrowFunctionExpression` | não | `url2` |
| [evaluation:597165-597169](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597165-L597169) | `ArrowFunctionExpression` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451619-451623](../../../../../../../reference/runtime/host-main.cjs#L451619-L451623) | 2 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:597165-597169](../../../../../../../reference/runtime/sand-eval-runner.cjs#L597165-L597169) | 2 | 0 | 0 | 2 | 0 | 0 |

### host:451619

Chamadas escritas diretamente neste corpo: `URL.parse`, `httpOriginOf`, `isCommercialHostname`, `isInDeploymentZone`, `reachable.has`.

SHA-256 do trecho: `66acb515e2f23891de1936eb7ceaaedad0e16a4086902e7e544f50f4b74a60bb`.

### evaluation:597165

Chamadas escritas diretamente neste corpo: `URL.parse`, `httpOriginOf`, `isCommercialHostname`, `isInDeploymentZone`, `reachable.has`.

SHA-256 do trecho: `605bef138221ffaa6aa31aa7a53e89e14050c4d5529e92c6056ae33a0a633dd1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
