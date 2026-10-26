# `createHostGatewayApi/duplicateAgent`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/gateway/README.md).

**Módulo:** `host/host-gateway-api.ts` · [README do módulo](../../../../modules/host/host-gateway-api-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:492632-492674](../../../../../reference/runtime/host-main.cjs#L492632-L492674) | `ArrowFunctionExpression` | sim | `args` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:492632-492674](../../../../../reference/runtime/host-main.cjs#L492632-L492674) | 3 | 0 | 1 | 1 | 1 | 1 |

### host:492632

Chamadas escritas diretamente neste corpo: `.logs.reportAgentDuplicated`, `deps.extensions.api`, `identity.noteAgentMinted`, `identity.rollbackRemoteAgent`, `manager.cloneAgent`.

Alvos de lançamento explícito: `error64`.

SHA-256 do trecho: `581fbc490749a8f67e1b6c313cb1dbf9022b242d4d4c49b75049ccd3884dbd75`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
