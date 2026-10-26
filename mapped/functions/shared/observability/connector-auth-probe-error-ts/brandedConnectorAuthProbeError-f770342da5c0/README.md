# `brandedConnectorAuthProbeError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/connector-auth-probe-error.ts` · [README do módulo](../../../../../modules/shared/observability/connector-auth-probe-error-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685459-685461](../../../../../../reference/runtime/host-main.cjs#L685459-L685461) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685459-685461](../../../../../../reference/runtime/host-main.cjs#L685459-L685461) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:685459

Chamadas escritas diretamente neste corpo: `brandProbeError`, `connectorAuthProbeError`.

SHA-256 do trecho: `d90ac709c1a802af0b882d6189079caf7c0ffc931b193d7a0d8b9ffde20a84ee`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
