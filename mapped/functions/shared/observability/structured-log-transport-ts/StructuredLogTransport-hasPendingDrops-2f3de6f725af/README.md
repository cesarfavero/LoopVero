# `StructuredLogTransport.hasPendingDrops`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/structured-log-transport.ts` · [README do módulo](../../../../../modules/shared/observability/structured-log-transport-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453257-453262](../../../../../../reference/runtime/host-main.cjs#L453257-L453262) | `method` | não | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453257-453262](../../../../../../reference/runtime/host-main.cjs#L453257-L453262) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:453257

Chamadas escritas diretamente neste corpo: `TELEMETRY_DROP_REASONS.some`.

SHA-256 do trecho: `d178dd257b4851a357070e5b4f674286fc4b50a8530731949a3f9d89b6e69976`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
