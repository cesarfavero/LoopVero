# `StructuredLogTransport.buildLogEntry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/structured-log-transport.ts` · [README do módulo](../../../../../modules/shared/observability/structured-log-transport-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453327-453335](../../../../../../reference/runtime/host-main.cjs#L453327-L453335) | `method` | não | `level, message, metadata2, timestampMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453327-453335](../../../../../../reference/runtime/host-main.cjs#L453327-L453335) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:453327

Chamadas escritas diretamente neste corpo: `BigInt`, `new ClientLogEntry`, `toClientLogLevel`.

SHA-256 do trecho: `858a6b57ff0a3d00072cbc18c004fefbcaaa692de8068316662e042a5e8e75c4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
