# `StructuredLogTransport.enqueue`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/structured-log-transport.ts` · [README do módulo](../../../../../modules/shared/observability/structured-log-transport-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:453004-453006](../../../../../../reference/runtime/host-main.cjs#L453004-L453006) | `method` | não | `level, message, metadata2, onSettled` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:453004-453006](../../../../../../reference/runtime/host-main.cjs#L453004-L453006) | 0 | 0 | 0 | 0 | 0 | 0 |

### host:453004

Chamadas escritas diretamente neste corpo: `Date.now`, `this.enqueueAt`.

SHA-256 do trecho: `999fced637d13cd9deb914cc2558a02df13fa28695182ca4fb6581582faeface`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
