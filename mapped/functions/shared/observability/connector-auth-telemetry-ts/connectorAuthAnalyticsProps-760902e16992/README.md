# `connectorAuthAnalyticsProps`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/observability/README.md).

**Módulo:** `shared/observability/connector-auth-telemetry.ts` · [README do módulo](../../../../../modules/shared/observability/connector-auth-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:455697-455724](../../../../../../reference/runtime/host-main.cjs#L455697-L455724) | `FunctionDeclaration` | não | `report, surface` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455697-455724](../../../../../../reference/runtime/host-main.cjs#L455697-L455724) | 16 | 0 | 0 | 1 | 0 | 0 |

### host:455697

Chamadas escritas diretamente neste corpo: `analyticsOnlyUnboundedConnectorDomain`, `brandedHost`, `brandedId`, `connectorAuthTag`, `sandErrorTags`.

SHA-256 do trecho: `906c13fc4a613e828e2bc3711e0162a0b369895f4fc6e2ed9544ebd9c36114ae`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
