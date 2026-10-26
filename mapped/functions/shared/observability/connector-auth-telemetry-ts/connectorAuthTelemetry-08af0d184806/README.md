# `connectorAuthTelemetry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/observability/README.md).

**Módulo:** `shared/observability/connector-auth-telemetry.ts` · [README do módulo](../../../../../modules/shared/observability/connector-auth-telemetry-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:455725-455743](../../../../../../reference/runtime/host-main.cjs#L455725-L455743) | `FunctionDeclaration` | não | `report, surface` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:455725-455743](../../../../../../reference/runtime/host-main.cjs#L455725-L455743) | 5 | 0 | 0 | 1 | 0 | 0 |

### host:455725

Chamadas escritas diretamente neste corpo: `brandedId`, `connectorAuthTag`, `logFields`, `sandErrorTags`.

SHA-256 do trecho: `dbbc3aec8f3c24d4e1ffac89ab4d4e3ca294ff134f79fe1df016bc12611ddd21`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
