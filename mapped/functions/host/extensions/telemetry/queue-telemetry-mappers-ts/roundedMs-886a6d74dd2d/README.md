# `roundedMs`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/observability/README.md).

**Módulo:** `host/extensions/telemetry/queue-telemetry-mappers.ts` · [README do módulo](../../../../../../modules/host/extensions/telemetry/queue-telemetry-mappers-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:472148-472150](../../../../../../../reference/runtime/host-main.cjs#L472148-L472150) | `FunctionDeclaration` | não | `ms2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:472148-472150](../../../../../../../reference/runtime/host-main.cjs#L472148-L472150) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:472148

Chamadas escritas diretamente neste corpo: `Math.round`.

SHA-256 do trecho: `fbb685e4c233f1d99bb5d589e9ddc19d87e7569048e6b3fb6856b8136d43c2b5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
