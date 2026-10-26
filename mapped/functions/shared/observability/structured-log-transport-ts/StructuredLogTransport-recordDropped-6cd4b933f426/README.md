# `StructuredLogTransport.recordDropped`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/structured-log-transport.ts` · [README do módulo](../../../../../modules/shared/observability/structured-log-transport-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453052-453054](../../../../../../reference/runtime/host-main.cjs#L453052-L453054) | `method` | não | `reason, count2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453052-453054](../../../../../../reference/runtime/host-main.cjs#L453052-L453054) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453052

Chamadas escritas diretamente neste corpo: `this.recordDrop`.

SHA-256 do trecho: `353db20d81c80829f624a16006741193418b14e0b39a3cfa3c7f5f76469a6211`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
